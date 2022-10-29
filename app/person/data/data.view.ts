namespace $.$$ {

	export class $hyoo_idea_app_person_data extends $.$hyoo_idea_app_person_data {

		@ $mol_mem
		avatar_file(next?: File[]) {
			if (next && next.length) this.person().avatar_node().blob(next[0])
			return next as readonly any[]
		}

		avatar_drop() {
			this.person().avatar_node().list([])
		}

	}

}
