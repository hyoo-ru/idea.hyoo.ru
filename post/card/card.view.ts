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
		like_sub() {
			return [
				this.Like_icon(),
				... this.likes_total() > 0 ? [this.Like_count()] : [],
			]
		}

		likes() {
			return this.likes_total().toString()
		}

	}

}
