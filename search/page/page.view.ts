namespace $.$$ {

	export class $hyoo_idea_search_page extends $.$hyoo_idea_search_page {

		persons() {
			return this.domain().persons().list()
				.filter( obj => {
					return obj.registered()
				} )
		}

		person( obj: $hyoo_idea_person ) {
			return obj
		}

		team_rows() {
			return this.persons().map( obj => this.Person_row(obj) )
		}

		projects() {
			return this.domain().persons().list()
				.map( obj => obj.projects() ).flat()
		}

		project( obj: $hyoo_idea_project ) {
			return obj
		}

		project_rows() {
			return this.projects().map( obj => this.Project_row(obj) )
		}

		results() {
			return this.type() === 'team' ? this.team_rows() : this.project_rows()
		}

	}

}
