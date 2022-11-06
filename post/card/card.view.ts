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

		@ $mol_action
		comment_add() {
			const text = this.comment(); this.comment('')
			this.post().comment_add( text, this.post().domain().user() )
		}

		@ $mol_mem
		comment_rows() {
			return this.post().comments().map( obj => this.Comment(obj) )
		}

		comment_author( obj: $hyoo_idea_post ) {
			return obj.person()
		}

		comment_text( obj: $hyoo_idea_post ) {
			return obj.content()
		}

		comment_created_moment( obj: $hyoo_idea_post ) {
			return obj.created_moment()
		}

	}

}
