namespace $.$$ {

	export class $hyoo_idea_person_page extends $.$hyoo_idea_person_page {

		self() {
			return this.person().id() === this.domain().user().id()
		}

		Edit() {
			return this.self() ? super.Edit() : null as unknown as any
		}

		@ $mol_mem
		body() {
			return this.self() && this.editing() ? [this.Edit_form()] : super.body()
		}

		project_count() {
			return this.person().projects().length
		}
		
		Projects_block_title() {
			return super.Projects_block_title().replace( '{count}', this.project_count().toString() )
		}

		post_count() {
			return this.person().posts().length
		}

		Posts_title() {
			return super.Posts_title().replace( '{count}', this.post_count().toString() )
		}

		sub_count() {
			return this.person().subs().length
		}

		pub_count() {
			return this.person().pubs().length
		}

		@ $mol_mem
		job_current() {
			const job = this.person().jobs().find( obj => obj.present && !!obj.position && !!obj.company )
			return job ?? null
		}

		@ $mol_mem
		position() {
			return super.position()
				.replace('{position}', this.job_current()!.position)
				.replace('{company}', this.job_current()!.company)
		}

		@ $mol_mem
		location() {
			return super.location()
				.replace('{city}', this.person().city())
		}

		date_birth(next?: $mol_time_moment) {
			return this.person().date_birth( next )!
		}

		@ $mol_mem
		summary_rows() {
			return [
				... this.job_current() !== null ? [this.Position()] : [],
				... !!this.person().city() ? [this.Location()] : [],
				// ... this.person().date_birth() !== null ? [this.Age()] : [],
			]
		}

		actions() {
			return this.self() ? [] : [this.Invite_button()]
		}

		@ $mol_mem
		personal() {
			return [
				... !!this.about() ? [this.About()] : [],
				... this.jobs().length > 0 ? [this.Jobs()] : [],
				... this.education().length > 0 ? [this.Education()] : [],
			]
		}

		@ $mol_mem
		contacts_content() {
			return [
				... !!this.phone() ? [this.Contacts_phone()] : [],
				... !!this.email() ? [this.Contacts_email()] : [], 
			]
		}
		
		phone_uri() {
			return `tel:${ this.phone() }`
		}

		email_uri() {
			return `mailto:${ this.email() }`
		}

		@ $mol_mem
		jobs() {
			return this.person().jobs()
				.filter( obj => !!obj.position && !!obj.company && !!obj.date_start && (!!obj.date_end || obj.present === true) )
				.map( (_, index) => this.Job( index ) )
		}

		job_position( id: number ) {
			return this.person().jobs()[id].position
		}

		job_company( id: number ) {
			return this.person().jobs()[id].company
		}

		job_dates( id: number ) {
			const job = this.person().jobs()[id]
			return [
				new $mol_time_moment( job.date_start ).toString( 'Month YYYY' ),
				job.present ? this.msg().job_present : new $mol_time_moment( job.date_end ).toString( 'Month YYYY' )
			].join(' - ')
		}

		job_functions( id: number ) {
			return this.person().jobs()[id].functions
		}

		@ $mol_mem
		education() {
			return this.person().institutions()
				.filter( obj => !!obj.specialty && !!obj.institution && !!obj.date_finish )
				.map( (_, index) => this.Education_row(index) )
		}

		education_head( id: number ) {
			const obj = this.person().institutions()[id]
			return [
				obj.specialty,
			].join(' - ')
		}

		education_details( id: number ) {
			const obj = this.person().institutions()[id]
			return [
				obj.institution,
				new $mol_time_moment(obj.date_finish).toString('YYYY'),
			].join(', ')
		}

		post(obj: $hyoo_idea_post) {
			return obj
		}

		post_list() {
			return this.person().posts()
				.sort( (a, b) => b.created_moment().valueOf() - a.created_moment().valueOf() )
				.map( obj => this.Post( obj ) )
		}

		post_add(text: string) {
			const obj = this.domain().post_add()
			obj.content( text )
			obj.person( this.person() )
			this.person().post_add( obj )
		}

		posts_content() {
			return [
				... this.self() ? [this.Post_add()] : [],
				this.Post_list(),
			]
		}

	}

}
