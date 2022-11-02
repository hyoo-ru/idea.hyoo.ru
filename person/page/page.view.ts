namespace $.$$ {

	export class $hyoo_idea_person_page extends $.$hyoo_idea_person_page {

		self() {
			return this.person().id() === this.domain().user().id()
		}

		tools() {
			return [
				... this.self() ? [this.Edit_button()] : [],
			]
		}

		body() {
			return this.self() && this.editing() ? [this.Edit_form()] : super.body()
		}

		project_count() {
			return this.person().projects().length.toString()
		}

		post_count() {
			return this.person().posts().length.toString()
		}

		sub_count() {
			return this.person().subs().length.toString()
		}

		pub_count() {
			return this.person().pubs().length.toString()
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

		@ $mol_mem
		summary_rows() {
			return [
				... this.job_current() !== null ? [this.Position()] : [],
				... !!this.person().city() ? [this.Location()] : [],
				... this.person().date_birth() !== null ? [this.Age()] : [],
			]
		}

		@ $mol_mem
		neck() {
			return [
				this.Summary(),
				... this.self() === false ? [this.Actions()] : [],
			]
		}

		@ $mol_mem
		jobs() {
			return this.person().jobs().map( (_, index) => this.Job( index ) )
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
			return this.person().institutions().map( (_, index) => this.Education_row(index) )
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
				... obj.date_finish ? [new $mol_time_moment(obj.date_finish).toString('YYYY')] : [],
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
