namespace $.$$ {

	type Sections = 'feed' | 'person' | 'projects' | 'search'

	export class $hyoo_idea_app extends $.$hyoo_idea_app {

		section(next?: Sections) {
			return this.$.$mol_state_arg.value( 'section', next ) || 'feed'
		}

		person_opened() {
			const id = $mol_int62_string_ensure( this.$.$mol_state_arg.value('person') )
			return id ? this.domain().person( id ) : null as unknown as $hyoo_idea_person
		}

		signup_opened() {
			return this.$.$mol_state_arg.value('signup') === ''
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
			return [
				this.Menu(),
				... this.section() === 'feed' ? [this.Feed()] : [],
				... this.section() === 'person' ? [this.My_page()] : [],
				... this.section() === 'projects' ? [this.Project_list()] : [],
				... this.section() === 'search' ? [this.Search_page()] : [],
				... this.person_opened() ? [this.Person_page()] : [],
				... this.project_opened() ? [this.Project_page()] : [],
				... this.invite_opened() ? [this.Invite_page()] : [],
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
