namespace $.$$ {

	export class $hyoo_idea_post_add extends $.$hyoo_idea_post_add {

		event_submit() {
			this.submit( this.text() )
			this.text('')
		}

	}

}
