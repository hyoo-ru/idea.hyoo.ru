namespace $.$$ {

	export class $hyoo_idea_project_form extends $.$hyoo_idea_project_form {

		domain() {
			return this.project().domain()
		}

		logo_add( next?: File[] ) {
			if (next && next.length) this.logo_node().blob(next[0])
			return next as readonly any[]
		}

		logo_drop() {
			this.logo_node().list([])
		}

		description_selection( next?: number[] ) {
			return this.description_node().selection( this.domain().user().id(), next )
		}

	}

}
