namespace $.$$ {

	export class $hyoo_idea_project_list extends $.$hyoo_idea_project_list {

		project_rows() {
			if (this.projects().length === 0) return [this.Empty(), this.Add()]

			return this.projects().map( obj => this.Project(obj) )
		}

		project_id( obj: $hyoo_idea_project ) {
			return obj.id()
		}

		project_name( obj: $hyoo_idea_project ) {
			return obj.name()
		}

	}

}
