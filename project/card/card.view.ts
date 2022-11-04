namespace $.$$ {

	export class $hyoo_idea_project_card extends $.$hyoo_idea_project_card {

		project_name() {
			return this.project().name() || this.default_name()
		}

	}

}
