namespace $.$$ {

	export class $hyoo_idea_profile_block extends $.$hyoo_idea_profile_block {

		rows() {
			const rows = this.expanded() ? [this.Label(), this.Content()] : [this.Label()]
			return rows.filter(Boolean)
		}

		expanded(next?: boolean) {
			return this.$.$mol_state_local.value( `${this}.expanded()`, next ) ?? super.expanded()
		}

	}

}
