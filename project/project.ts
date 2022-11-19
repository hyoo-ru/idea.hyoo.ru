namespace $ {

	export type $hyoo_idea_project_stages = 'idea' | 'teambuilding' | 'prototyping' | 'pilot' | 'monetization'

	export class $hyoo_idea_project extends $hyoo_idea_entity {

		@ $mol_mem
		person( next?: $hyoo_idea_person ) {
			const id = this.state().sub( 'person', $hyoo_crowd_reg ).str( next && next.id() )
			return this.domain().person( $mol_int62_string_ensure(id)! )
		}

		owner( next?: $hyoo_idea_person ) {
			return this.person( next )
		}

		@ $mol_mem
		logo_node() {
			return this.state().yoke( 'logo', $hyoo_crowd_blob )!
		}
		
		@ $mol_mem
		logo() {
			return this.logo_node().uri()
		}

		@ $mol_mem
		brief( next?: string ) {
			return this.state().sub( 'brief', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		name( next?: string ) {
			return this.state().sub( 'name', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		site( next?: string ) {
			return this.state().sub( 'site', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		description_node() {
			return this.state().sub( 'description', $hyoo_crowd_text )
		}

		@ $mol_mem
		description( next?: string ) {
			return this.description_node().text( next )
		}

		@ $mol_mem
		team_node() {
			return this.state().sub( 'team', $hyoo_crowd_list )
		}
		
		@ $mol_mem
		stage( next? : $hyoo_idea_project_stages ) {
			return this.state().sub( 'stage', $hyoo_crowd_reg ).str( next ) as typeof next || 'idea'
		}

		@ $mol_mem
		roles_node() {
			return this.state().sub( 'jobs', $hyoo_crowd_list )
		}

		@ $mol_mem
		roles(
			next?: Array<{
				name: string,
				functions: string,
				person: string,
			}>
		) {
			return this.roles_node().list( next ) as Exclude<typeof next, undefined>
		}

		@ $mol_mem
		team( next?: $hyoo_idea_person[] ) {
			const ids = this.team_node().list( next )
			return ids.map( id => this.domain().person( $mol_int62_string_ensure(id)! ) )
		}

		@ $mol_mem
		team_members() {
			return [...this.team(), this.owner()].filter( obj => obj.projects_node().has( this.id() ) )
		}

		@ $mol_mem
		team_requests() {
			return this.domain().persons().list().filter( obj =>
				obj.projects_node().has( this.id() )
				&& !this.team_node().has( obj.id() )
				&& obj.id() !== this.owner().id()
			)
		}

		@ $mol_mem
		team_invites() {
			return this.team().filter( obj => !obj.projects_node().has( this.id() ) )
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
		post_add( obj: $hyoo_idea_post, person?: $hyoo_idea_person ) {
			obj.person( person )
			obj.project( this )
			this.posts_node().add( obj.id() )
		}

		@ $mol_action
		post_drop( obj: $hyoo_idea_post ) {
			this.posts_node().drop( obj.id() )
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
