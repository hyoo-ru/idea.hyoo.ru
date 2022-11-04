namespace $ {

	export type $hyoo_idea_project_stages = 'idea' | 'teambuilding' | 'prototyping' | 'pilot' | 'monetization'

	export class $hyoo_idea_project extends $hyoo_idea_entity {

		@ $mol_mem
		person( next?: $hyoo_idea_person ) {
			const id = this.state().sub( 'person', $hyoo_crowd_reg ).str( next && next.id() )
			return this.domain().person( $mol_int62_string_ensure(id)! )
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
		team( next?: $hyoo_idea_person[] ) {
			const ids = this.team_node().list( next )
			return ids.map( id => this.domain().person( $mol_int62_string_ensure(id)! ) )
		}

		@ $mol_mem
		stage( next? : $hyoo_idea_project_stages ) {
			return this.state().sub( 'stage', $hyoo_crowd_reg ).str( next ) as typeof next || 'idea'
		}

	}

}
