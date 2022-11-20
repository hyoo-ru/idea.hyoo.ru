namespace $.$$ {

	export class $hyoo_idea_feed_page extends $.$hyoo_idea_feed_page {

		domain() {
			return this.person().domain()
		}

		@ $mol_mem
		posts_all() {
			const persons = [ ... new Set( this.domain().persons().list() ) ]
			const projects = [ ... new Set( persons.map( person => person.projects() ).flat() ) ]
			const posts = [ ... new Set( projects.map( project => project.posts() ).flat() ) ]
			return posts
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
