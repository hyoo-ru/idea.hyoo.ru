namespace $.$$ {

	export class $hyoo_idea_app extends $.$hyoo_idea_app {

		person_opened() {
			return this.domain().person( this.$.$mol_state_arg.value('person') as $mol_int62_string ?? this.user().id() )
		}

		signup_opened() {
			return this.$.$mol_state_arg.value('signup') === ''
		}

		@ $mol_mem
		pages() {
			if (this.signup_opened()) return [this.Sign_up()]

			return [
				this.Person_profile(),
				this.Feed(),
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
