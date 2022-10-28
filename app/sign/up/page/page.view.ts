namespace $.$$ {

	export class $hyoo_idea_app_sign_up_page extends $.$hyoo_idea_app_sign_up_page {

		signup() {
			this.$.$mol_state_arg.value('signup', null)
		}

		name_bid() {
			return !this.name() ? this.messages().required : ''
		}

		name_family_bid() {
			return !this.name_family() ? this.messages().required : ''
		}

		name_user_bid() {
			const val = this.name_user()

			if (val.includes(' ')) return this.messages().no_spaces
			if (val.length > 15) return this.messages().need_less_letters.replace('{count}', this.name_user_max_letters_count().toString())
			if (!val) return this.messages().required
			return ''
		}
	}
	
}
