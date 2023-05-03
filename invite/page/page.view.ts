namespace $.$$ {

	export class $hyoo_idea_invite_page extends $.$hyoo_idea_invite_page {

		user() {
			return this.domain().user()
		}

		person() {
			const id = $mol_int62_string_ensure( this.person_id() || this.$.$mol_state_arg.value( 'invite_person' ) )
			return id ? this.domain().person( id ) : null as unknown as $hyoo_idea_person
		}

		project() {
			const id = $mol_int62_string_ensure( this.project_id() || this.$.$mol_state_arg.value( 'invite_project' ) )
			return id ? this.domain().project( id ) : null as unknown as $hyoo_idea_project
		}
	
		@ $mol_mem
		project_dict() {
			return this.domain().user().projects()
				.filter( obj => obj.person().id() === this.domain().user().id() )
				.reduce( (dict, obj) => {
					dict[obj.id()] = obj.name()
					return dict
				}, {} as Record< string, string > )
		}

		@ $mol_mem
		person_dict() {
			return this.domain().persons().list().filter( obj => obj.registered() ).reduce( (dict, obj) => {
				dict[obj.id()] = obj.name()
				return dict
			}, {} as Record< string, string > )
		}

		fields() {
			return [
				... this.project() ? [this.Project_field()] : [this.Project_select_field()],
				... this.person() ? [this.Person_field()] : [this.Person_select_field()],
				this.Status_field(),
			]
		}

		@ $mol_mem
		person_is_invited() {
			return this.project()?.team_node()?.has( this.person()?.id() ) ?? false
		}

		@ $mol_mem
		project_is_invited() {
			return this.person()?.projects_node()?.has( this.project()?.id() ) ?? false
		}

		@ $mol_mem
		status_text() {
			if ( this.person_is_invited() && this.project_is_invited() ) return this.status().joined
			else if ( this.person_is_invited() || this.project_is_invited() ) return this.status().sended
			return this.status().none
		}

		submit_enabled() {
			return !!this.person() && !!this.project() && !this.person_is_invited() && !this.project_is_invited()
		}

		@ $mol_action
		submit() {

			if ( this.user().id() === this.project().owner().id() ) {
				this.project().team_node().add( this.person().id() )
			}

			else if ( this.user().id() === this.person().id() ) {
				this.user().projects_node().add( this.project().id() )
			}

		}

	}

}
