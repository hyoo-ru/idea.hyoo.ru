namespace $ {
	
	export class $hyoo_idea_domain extends $mol_object2 {
		
		@ $mol_mem
		static yard() {
			return new this.$.$hyoo_sync_client
		}

		yard() {
			return $hyoo_sketch_domain.yard()
		}
		
		@ $mol_mem
		user() {
			return this.person( this.yard().peer().id )
		}

		@ $mol_mem
		persons() {
			const land = 'nkxkna_4ekv5r' as $mol_int62_string
			return $hyoo_idea_persons.make({ id: $mol_const(land), domain: $mol_const(this) })
		}
		
		@ $mol_mem_key
		person( id: $mol_int62_string ) {
			return $hyoo_idea_person.make({ id: $mol_const(id), domain: $mol_const(this) })
		}

		@ $mol_mem_key
		post( id: $mol_int62_string ) {
			return $hyoo_idea_post.make({ id: $mol_const(id), domain: $mol_const(this) })
		}

		@ $mol_action
		post_add() {
			const land = this.yard().land_grab()
			return this.post( land.id() )
		}

	}

}
