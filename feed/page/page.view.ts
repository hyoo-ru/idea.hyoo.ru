namespace $.$$ {

	export class $hyoo_idea_feed_page extends $.$hyoo_idea_feed_page {

		domain() {
			return this.person().domain()
		}

		@ $mol_mem
		posts_all() {
			return this.domain().persons().list().map( obj => obj.posts() ).flat()
		}

		@ $mol_mem
		posts_sorted() {
			return this.posts_all().sort( (a, b)=> b.created_moment().valueOf() - a.created_moment().valueOf() )
		}

		posts() {
			return this.posts_sorted().map( obj => this.Post( obj ) )
		}

		post(obj: $hyoo_idea_post) {
			return obj
		}

	}

}
