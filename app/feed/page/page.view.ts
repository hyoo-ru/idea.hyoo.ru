namespace $.$$ {

	export class $hyoo_idea_app_feed_page extends $.$hyoo_idea_app_feed_page {

		domain() {
			return this.person().domain()
		}

		@ $mol_mem
		posts_all() {
			return this.domain().persons().list().map( obj => obj.posts() ).flat()
		}

		@ $mol_mem
		posts_sorted() {
			return this.posts_all().sort( (a, b)=> b.date_created().valueOf() - a.date_created().valueOf() )
		}

		posts() {
			return this.posts_sorted().map( obj => this.Post( obj ) )
		}

		post(obj: $hyoo_idea_app_post) {
			return obj
		}

	}

}
