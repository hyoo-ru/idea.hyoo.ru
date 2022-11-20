namespace $.$$ {

	export class $hyoo_idea_post_card extends $.$hyoo_idea_post_card {

		author() {
			return this.post().person()
		}

		author_name() {
			return this.author().name()
		}

		person_id() {
			return this.author().id()
		}

		likes_count() {
			return this.likes_total()
		}

		@ $mol_action
		comment_add() {
			const text = this.comment(); this.comment('')
			this.post().comment_add( text, this.post().domain().user() )
		}
		
		@ $mol_mem
		comments_count() {
			return this.post().comments().length
		}

		@ $mol_mem
		comment_rows() {
			if( !this.comments_showed() ) return []
			return [
				... this.post().comments().map( obj => this.Comment(obj) ),
				this.Comment_add(),
			]
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
