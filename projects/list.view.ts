namespace $.$$ {

	export class $hyoo_idea_projects extends $.$hyoo_idea_projects {

		person() {
			const id = $mol_int62_string_ensure( this.$.$mol_state_arg.value('projects_person') )
			return id ? this.domain().person( id ) : this.domain().user()
		}

		self() {
			return this.person().id() === this.domain().user().id()
		}

		@ $mol_mem
		projects() {
			const projects = this.domain().persons().list()
				.map(
					person => person.projects().filter( project => project.name() )
				)
				.flat()
			return [ ... new Set( projects ) ]
		}
		
		@ $mol_mem
		projects_filtered() {
			return this.projects().filter(
				$mol_match_text( this.filter(), project => [ project.name(), project.brief() ] )
			).reverse()
		}

		project_rows() {
			return [
				... this.projects().length > 2 ? [ this.Filter() ] : [],
				... this.projects_filtered().map( obj => this.Card(obj) )
			]
		}
		
		project( obj: $hyoo_idea_project ) {
			return obj
		}

		add() {
			const obj = this.domain().project_add()
			this.domain().user().project_add( obj )
			this.$.$mol_state_arg.value( 'project', obj.id() ) 
		}

	}

}
