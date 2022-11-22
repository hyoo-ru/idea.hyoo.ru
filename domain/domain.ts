namespace $ {
	
	export class $hyoo_idea_domain extends $mol_object2 {
		
		@ $mol_mem
		static yard() {
			return new this.$.$hyoo_sync_client
		}

		yard() {
			return $hyoo_idea_domain.yard()
		}
		
		@ $mol_mem
		user() {
			return this.person( this.yard().peer().id )
		}

		@ $mol_mem
		persons() {
			
			const land_id = '9ap4sd_hgpblf' as $mol_int62_string
			
			const rights = new Uint8Array( $mol_fetch.buffer( require( `/hyoo/idea/domain/${land_id}+${land_id}.bin` ) ) )
			$mol_wire_sync( this.yard().world() ).apply( rights )
			
			return $hyoo_idea_persons.make({ id: $mol_const(land_id), domain: $mol_const(this) })
			
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
	
		@ $mol_mem_key
		project( id: $mol_int62_string ) {
			return $hyoo_idea_project.make({ id: $mol_const(id), domain: $mol_const(this) })
		}

		@ $mol_action
		project_add() {
			const land = this.yard().land_grab()
			return this.project( land.id() )
		}

	}

}
