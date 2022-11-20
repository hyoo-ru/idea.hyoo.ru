namespace $ {

	export class $hyoo_idea_persons extends $hyoo_idea_entity {

		@ $mol_mem
		list_node() {
			return this.state().sub( 'list', $hyoo_crowd_list )
		}

		add( obj: $hyoo_idea_person ) {
			this.list_node().add( obj.id() )
		}

		list() {
			return this.list_node().list().map( id => this.domain().person( id as $mol_int62_string ) )
		}

	}

	export class $hyoo_idea_person extends $hyoo_idea_entity {

		@ $mol_mem
		state() {
			return super.state().sub( '$hyoo_idea', $hyoo_crowd_struct )!
		}

		@ $mol_mem
		avatar_node() {
			return this.state().yoke( 'avatar', $hyoo_crowd_blob )!
		}

		@ $mol_mem
		avatar() {
			if (this.avatar_node().list().length > 0) return this.avatar_node().uri()
			return `https://robohash.org/${this.id()}.png`
		}

		@ $mol_mem
		name( next?: string ) {
			return this.state().sub( 'name', $hyoo_crowd_reg ).str( next )
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
			return this.state().sub( 'jobs', $hyoo_crowd_list )
		}

		@ $mol_mem
		jobs(
			next?: Array<{
				position: string,
				functions: string,
				company: string,
				industry: string,
				date_start: string,
				date_end: string,
				present: boolean,
			}>
		) {
			return this.jobs_node().list( next ) as Exclude<typeof next, undefined>
		}

		@ $mol_mem
		institutions_node() {
			return this.state().sub( 'institutions', $hyoo_crowd_list )
		}

		@ $mol_mem
		institutions(
			next?: Array<{
				degree: string,
				institution: string,
				department: string,
				specialty: string,
				date_finish: string,
			}>
		) {
			return this.institutions_node().list( next ) as Exclude<typeof next, undefined> 
		}

		@ $mol_mem
		registered() {
			return !!this.name()
		}

		@ $mol_mem
		posts_node() {
			return this.state().sub( 'posts', $hyoo_crowd_list )
		}

		@ $mol_mem
		posts( next?: $hyoo_idea_post[] ) {
			const ids = this.posts_node().list( next && next.map( obj => obj.id() ) )
			return ids.map( id => this.domain().post( id as $mol_int62_string ) )
		}

		@ $mol_action
		post_add( obj: $hyoo_idea_post ) {
			obj.person( this )
			this.posts_node().add( obj.id() )
		}

		@ $mol_action
		post_drop( obj: $hyoo_idea_post ) {
			this.posts_node().drop( obj.id() )
		}

		@ $mol_mem
		projects_node() {
			return this.state().sub( 'projects', $hyoo_crowd_list )
		}

		@ $mol_mem
		projects( next?: $hyoo_idea_project[] ) {
			const ids = this.projects_node().list( next && next.map( obj => obj.id() ) )
			return ids.map( id => this.domain().project( $mol_int62_string_ensure(id)! ) )
		}

		@ $mol_action
		project_add( obj: $hyoo_idea_project ) {
			obj.person( this )
			this.projects_node().add( obj.id() )
		}

		@ $mol_action
		project_drop( obj: $hyoo_idea_project ) {
			this.posts_node().drop( obj.id() )
		}

		@ $mol_mem
		pubs(next?: $hyoo_idea_person[]) {
			const ids = this.state().sub('pubs', $hyoo_crowd_list).list( next && next.map( obj => obj.id() ) )
			return ids
				.filter( id => $mol_int62_string_ensure(id))
				.map( id => this.domain().person( $mol_int62_string_ensure(id)! ) )
		}

		@ $mol_mem
		subs(next?: $hyoo_idea_person[]) {
			const ids = this.state().sub('subs', $hyoo_crowd_list).list( next && next.map( obj => obj.id() ) )
			return ids
				.filter( id => $mol_int62_string_ensure(id))
				.map( id => this.domain().person( $mol_int62_string_ensure(id)! ) )
		}

	}

}
