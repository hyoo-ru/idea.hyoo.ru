namespace $.$$ {

	export class $hyoo_idea_search_page extends $.$hyoo_idea_search_page {

		@ $mol_mem
		persons() {
			return [ ... new Set( this.domain().persons().list().filter( obj => obj.registered() ) ) ]
		}

		results() {
			return this.persons().map( obj => this.Person_row(obj) )
		}

		person( obj: $hyoo_idea_person ) {
			return obj
		}	

	}

}
