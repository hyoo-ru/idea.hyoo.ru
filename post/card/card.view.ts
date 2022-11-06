namespace $.$$ {

	export class $hyoo_idea_post_card extends $.$hyoo_idea_post_card {

		author() {
			return this.post().person()
		}

		author_name() {
			return this.author().name_short()
		}

		person_id() {
			return this.author().id()
		}

		@ $mol_mem
		likes_total() {
			return this.post().likes_node().total().toString()
		}

		@ $mol_mem
		liked( next?: boolean ) {
			return this.post().likes_node().counted( next ) ?? false
		}

		@ $mol_mem
		like_sub() {
			return [
				this.Like_icon(),
				... this.post().likes_node().total() > 0 ? [this.Like_count()] : [],
			]
		}

	}

}
