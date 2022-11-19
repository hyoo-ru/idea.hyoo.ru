namespace $ {

	export class $hyoo_idea_entity extends $mol_object {

		id(): $mol_int62_string {
			return '0_0'
		}

		head(): $mol_int62_string {
			return '0_0'
		}
		
		domain(): $hyoo_idea_domain {
			throw new Error('Not defined')
		}

		@ $mol_mem
		land() {
			return this.domain().yard().land( this.id() )
		}

		@ $mol_mem
		state() {
			return this.land().node( this.head(), $hyoo_crowd_struct )
		}
		
		toJSON() {
			return this.id()
		}

	}

}
