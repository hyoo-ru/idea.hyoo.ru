namespace $ {

	export class $hyoo_idea_post extends $hyoo_idea_entity {

		@ $mol_mem
		person( next?: $hyoo_idea_person ) {
			const id = this.state().sub( 'person', $hyoo_crowd_reg ).str( next && next.id() )
			return this.domain().person( id as $mol_int62_string )
		}

		@ $mol_mem
		content( next?: string ) {
			return this.state().sub( 'content', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		created_moment( next?: $mol_time_moment ) {
			return new $mol_time_moment( this.state().land.first_stamp()! )
		}

	}

}
