namespace $ {

	export class $hyoo_idea_proejct extends $hyoo_idea_entity {

		logo( next?: Blob ) {
			return this.state().sub( 'logo', $hyoo_crowd_blob ).blob( next )
		}

		name( next?: string ) {
			return this.state().sub( 'name', $hyoo_crowd_reg ).str( next )
		}

		description_node() {
			return this.state().sub( 'description', $hyoo_crowd_text )
		}

		description( next?: string ) {
			return this.description_node().text( next )
		}

		team( next?: $hyoo_idea_person[] ) {
			const ids = this.state().sub( 'team', $hyoo_crowd_list ).list( next )
			return ids.map( id => this.domain().person( id as $mol_int62_string ) )
		}

	}

}
