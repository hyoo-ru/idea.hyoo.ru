namespace $.$$ {

	export class $hyoo_idea_sign_up_page extends $.$hyoo_idea_sign_up_page {

		signup() {
			this.$.$mol_state_arg.value('signup', null)
		}

		name_bid() {
			return !this.name() ? this.messages().required : ''
		}

		name_family_bid() {
			return !this.name_family() ? this.messages().required : ''
		}

	}
	
}
