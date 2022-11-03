namespace $.$$ {

	export class $hyoo_idea_project_list extends $.$hyoo_idea_project_list {

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
			return this.person().projects()
		}

		project_rows() {
			if (this.projects().length === 0) return [this.Empty()]

			return this.projects().map( obj => this.Project(obj) )
		}

		project_id( obj: $hyoo_idea_project ) {
			return obj.id()
		}

		project_name( obj: $hyoo_idea_project ) {
			return obj.name() || this.nameless_project()
		}

		add() {
			const obj = this.domain().project_add()
			this.domain().user().project_add( obj )
		}

	}

}
