namespace $ {

	export class $hyoo_idea_app_persons extends $hyoo_idea_lib_entity {

		@ $mol_mem
		list_node() {
			return this.state().sub( 'list', $hyoo_crowd_list )
		}

		add( obj: $hyoo_idea_app_person ) {
			this.list_node().add( obj.id() )
		}

		list() {
			return this.list_node().list().map( id => this.domain().person( id as $mol_int62_string ) )
		}

	}

	export class $hyoo_idea_app_person extends $hyoo_idea_lib_entity {

		@ $mol_mem
		avatar_node() {
			return this.state().sub( 'avatar', $hyoo_crowd_blob )
		}

		@ $mol_mem
		avatar() {
			if (this.avatar_node().list().length > 0) return this.avatar_node().uri()
			return `https://robohash.org/${this.id()}.png`
		}

		@ $mol_mem
		about( next?: string ) {
			return this.state().sub( 'about', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		status( next?: string ) {
			return this.state().sub( 'status', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		name_user( next?: string ) {
			return this.state().sub( 'name_user', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		name( next?: string ) {
			return this.state().sub( 'name', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		name_family( next?: string ) {
			return this.state().sub( 'name_family', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		name_father( next?: string ) {
			return this.state().sub( 'name_father', $hyoo_crowd_reg ).str( next )
		}

		name_short() {
			return this.name() + ' ' + this.name_family()
		}

		@ $mol_mem
		sex( next?: 'male' | 'female' ) {
			return this.state().sub( 'sex', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		date_birth( next?: $mol_time_moment ) {
			const str = this.state().sub( 'date_birsth', $hyoo_crowd_reg ).str( next && next.toString() )
			return new $mol_time_moment( str || undefined )
		}

		@ $mol_mem
		nationality( next?: string ) {
			return this.state().sub( 'nationality', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		country( next?: string ) {
			return this.state().sub( 'country', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		city( next?: string ) {
			return this.state().sub( 'city', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		phone( next?: string ) {
			return this.state().sub( 'phone', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		email( next?: string ) {
			return this.state().sub( 'email', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		job_status( next?: 'working_for_hire' | 'self-employed' | 'unemployed' ) {
			return this.state().sub( 'job_status', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		skills( next?: string[] ) {
			return this.state().sub( 'skills', $hyoo_crowd_list ).list( next ).map(String)
		}

		@ $mol_mem
		jobs_node() {
			return this.state().sub( 'jobs', $hyoo_crowd_dict )
		}

		@ $mol_mem_key
		job(id: string, next?: {
				position: string,
				functions: string,
				company: string,
				industry: string,
				date_start: string,
				date_end: string,
		}) {
			const obj = this.jobs_node().sub( id, $hyoo_crowd_json ).json(next) as Exclude<typeof next, undefined>
			return obj ?? { position: '', functions: '', company: '', industry: '', date_start: '', date_end: '' }
		}

		// @ $mol_mem
		// jobs(
		// 	next?: Array<{
		// 		position: string,
		// 		functions: string,
		// 		company: string,
		// 		industry: string,
		// 		date_start: string,
		// 		date_end: string,
		// 	}>
		// ) {
		// 	return this.jobs_node().list( next ) as Exclude<typeof next, undefined>
		// }

		@ $mol_mem
		registered() {
			return this.name() && this.name_user() && this.name_family()
		}

		posts_node() {
			return this.state().sub( 'posts', $hyoo_crowd_list )
		}

		posts( next?: $hyoo_idea_app_post[] ) {
			const ids = this.posts_node().list( next && next.map( obj => obj.id() ) )
			return ids.map( id => this.domain().post( id as $mol_int62_string ) )
		}

		@ $mol_action
		post_add( obj: $hyoo_idea_app_post ) {
			obj.person( this )
			this.posts_node().add( obj.id() )
		}

		@ $mol_action
		post_drop( obj: $hyoo_idea_app_post ) {
			this.posts_node().drop( obj.id() )
		}

	}

}
