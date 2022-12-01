namespace $.$$ {

	export class $hyoo_idea_feed_page extends $.$hyoo_idea_feed_page {

		domain() {
			return this.person().domain()
		}

		@ $mol_mem_key
		posts_after( anchor: $hyoo_idea_post ) {
			
			const exists = new Set( this.Posts().row_ids() ) as Set< $mol_int62_string >
			const next = [] as $mol_int62_string[]
			
			const persons = [ ... new Set( this.domain().persons().list() ) ].reverse()
			for( const person of persons ) {
				if( !person.name() ) continue
				
				const projects = [ ... person.projects() ].reverse()
				
				for( const project of projects ) {
					if( !project.name() ) continue
					
					const posts = [ ... project.posts() ].reverse()
					
					for( const post of posts ) {
						if( exists.has( post.id() ) ) continue
						
						next.push( post.id() )
						
						if( next.length > 10 ) break
					}
					
				}
				
			}
			
			return next
		}

		post( id: $mol_int62_string ) {
			return this.domain().post( id ) 
		}

	}

}
