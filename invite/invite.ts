namespace $ {
	export class $hyoo_idea_invite extends $hyoo_idea_entity {

		@ $mol_mem
		project( next?: $hyoo_idea_project ) {
			const id = $mol_int62_string_ensure( this.state().sub( 'project', $hyoo_crowd_reg ).str( next && next.id() ) )
			return id ? this.domain().project( id ) : null
		}

		@ $mol_mem
		candidate( next?: $hyoo_idea_person ) {
			const id = $mol_int62_string_ensure( this.state().sub( 'candidate', $hyoo_crowd_reg ).str( next && next.id() ) )
			return id ? this.domain().person( id ) : null
		}

		@ $mol_mem
		person( next?: $hyoo_idea_person ) {
			const id = $mol_int62_string_ensure( this.state().sub( 'person', $hyoo_crowd_reg ).str( next && next.id() ) )
			return id ? this.domain().person( id ) : null
		}

		@ $mol_mem
		comment( next?: string ) {
			return this.state().sub( 'comment', $hyoo_crowd_reg ).str( next )
		}
		
		@ $mol_mem
		status( next?: 'pending' | 'accepted' | 'rejected' | 'canceled' ) {
			return this.state().sub( 'status', $hyoo_crowd_reg ).str( next ) as typeof next || 'pending'
		}

	}
}
