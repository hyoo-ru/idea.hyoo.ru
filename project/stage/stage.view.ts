namespace $.$$ {

	export class $hyoo_idea_project_stage extends $.$hyoo_idea_project_stage {

		stage(): $hyoo_idea_project_stages {
			return super.stage() as $hyoo_idea_project_stages
		}

		label() {
			return this.stages()[this.stage()]
		}

	}

}
