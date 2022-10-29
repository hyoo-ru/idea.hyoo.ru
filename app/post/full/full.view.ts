namespace $.$$ {

	export class $hyoo_idea_app_post_full extends $.$hyoo_idea_app_post_full {

		author() {
			return this.post().person()
		}

		author_name() {
			return this.author()?.name_short()
		}

	}

}
