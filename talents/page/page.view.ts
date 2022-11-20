namespace $.$$ {

	export class $hyoo_idea_talents_page extends $.$hyoo_idea_talents_page {

		@ $mol_mem
		persons() {
			const persons = this.domain().persons().list()
				.filter( obj => obj.registered() )
			return [ ... new Set( persons.reverse() ) ]
		}

		results() {
			return this.persons().map( obj => this.Person_row(obj) )
		}

		person( obj: $hyoo_idea_person ) {
			return obj
		}	

	}

}
