namespace $.$$ {

	export class $hyoo_idea_project_page extends $.$hyoo_idea_project_page {

		editing() {
			return this.project().person().id() === this.domain().user().id() && this.$.$mol_state_arg.value('project_edit') === ''
		}

		body() {
			return this.editing() ? [this.Form()] : super.body()
		}

	}

}
