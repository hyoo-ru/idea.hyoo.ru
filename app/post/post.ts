namespace $ {

	export class $hyoo_idea_app_post extends $hyoo_idea_lib_entity {

		@ $mol_mem
		person( next?: $hyoo_idea_app_person ) {
			const id = this.state().sub( 'person', $hyoo_crowd_reg ).str( next && next.id() )
			return id ? this.domain().person( id as $mol_int62_string ) : null
		}

		@ $mol_mem
		content( next?: string ) {
			return this.state().sub( 'content', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		moment_added( next?: $mol_time_moment ) {
			const str = this.state().sub( 'moment_added', $hyoo_crowd_reg ).str( next && next.toString() )
			return str ? new $mol_time_moment( str ) : null
		}

	}

}
