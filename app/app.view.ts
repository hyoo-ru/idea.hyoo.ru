namespace $.$$ {

	type Sections = 'feed' | 'person' | 'projects' | 'talents'

	export class $hyoo_idea_app extends $.$hyoo_idea_app {

		section(next?: Sections) {
			return this.$.$mol_state_arg.value( 'section', next ) || 'feed'
		}

		person_opened() {
			const id = $mol_int62_string_ensure( this.$.$mol_state_arg.value('person') )
			return id ? this.domain().person( id ) : null as unknown as $hyoo_idea_person
		}

		project_opened() {
			const id = $mol_int62_string_ensure( this.$.$mol_state_arg.value('project') )
			return id ? this.domain().project( id ) : null as unknown as  $hyoo_idea_project
		}

		@ $mol_mem
		invite_opened() {
			return ['invite_person', 'invite_project'].some( val => !!this.$.$mol_state_arg.value( val ) )
		}

		@ $mol_mem
		pages() {
			
			const arg = this.$.$mol_state_arg.dict()
			const keys = Object.keys( arg )
			
			const addon = keys.map( key => {
				switch( key ) {
					case 'person': return this.Person_page( arg.person )
					case 'project': return this.Project_page( arg.project )
					case 'invite': return this.Invite_page()
				}
			} ).filter( $mol_guard_defined )

			return [
				... super.pages(),
				... addon,
			]
			
		}

		@ $mol_mem
		person_register() {
			
			const user = this.domain().user()
			if( !user.registered() ) return false
			
			this.domain().persons().add( user )
			
		}
		
		user_id() {
			return this.domain().user().id()
		}

		auto() {
			this.person_register()
		}

	}

}
