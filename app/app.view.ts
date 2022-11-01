namespace $.$$ {

	type Sections = 'feed' | 'person' | 'projects' | 'settings'

	export class $hyoo_idea_app extends $.$hyoo_idea_app {

		section(next?: Sections) {
			return this.$.$mol_state_arg.value( 'section', next ) || 'feed'
		}

		person_opened() {
			const id = this.$.$mol_state_arg.value('person')
			return this.domain().person( this.$.$mol_state_arg.value('person') as $mol_int62_string ?? this.user().id() )
		}

		signup_opened() {
			return this.$.$mol_state_arg.value('signup') === ''
		}

		profile_edit_opened() {
			return this.$.$mol_state_arg.value('edit') === ''
		}

		project_opened() {
			const id = $mol_int62_string_ensure( this.$.$mol_state_arg.value('project') )
			return id ? this.domain().project( id ) : null as unknown as  $hyoo_idea_project
		}

		@ $mol_action
		signup_open() {
			if (this.user().registered() === false) this.$.$mol_state_arg.value('signup', '')
		}

		@ $mol_mem
		pages() {
			this.signup_open()
			if (this.signup_opened()) return [this.Sign_up()]

			return [
				this.Menu(),
				... this.section() === 'feed' ? [this.Feed()] : [],
				... this.section() === 'person' ? [this.Person_profile()] : [],
				... this.profile_edit_opened() ? [this.Person_data()] : [],
				... this.project_opened() ? [this.Project_page()] : [],
			]
		}

		@ $mol_mem
		sync() {
			this.Online().sub()
		}

		@ $mol_mem
		person_register() {
			this.domain().persons().add( this.domain().user() )
		}

		auto() {
			this.sync()
			this.person_register()
		}
	}

}
