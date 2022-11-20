namespace $.$$ {

	export class $hyoo_idea_projects extends $.$hyoo_idea_projects {

		person() {
			const id = $mol_int62_string_ensure( this.$.$mol_state_arg.value('projects_person') )
			return id ? this.domain().person( id ) : this.domain().user()
		}

		self() {
			return this.person().id() === this.domain().user().id()
		}

		tools() {
			return [
				... this.self() ? [this.Add()] : [],
			]
		}

		empty() {
			return [
				this.empty_title(),
				... this.self() ? [this.Empty_add()] : [],
			]
		}

		projects() {
			const projects = this.domain().persons().list()
				.map(
					person => person.projects().filter( project => project.name() )
				)
				.flat()
			return [ ... new Set( projects ) ]
		}

		project_rows() {
			if (this.projects().length === 0) return [this.Empty()]

			return this.projects().map( obj => this.Card(obj) )
		}
		
		project( obj: $hyoo_idea_project ) {
			return obj
		}

		add() {
			const obj = this.domain().project_add()
			this.domain().user().project_add( obj )
		}

	}

}
