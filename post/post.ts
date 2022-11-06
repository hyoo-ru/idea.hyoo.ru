namespace $ {

	export class $hyoo_idea_post extends $hyoo_idea_entity {

		@ $mol_mem
		project( next?: $hyoo_idea_project ) {
			const id = this.state().sub( 'project', $hyoo_crowd_reg ).str( next && next.id() )
			return this.domain().project( id as $mol_int62_string )
		}

		@ $mol_mem
		person( next?: $hyoo_idea_person ) {
			const id = this.state().sub( 'person', $hyoo_crowd_reg ).str( next && next.id() )
			return this.domain().person( id as $mol_int62_string )
		}

		@ $mol_mem
		content( next?: string ) {
			return this.state().sub( 'content', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		created_moment( next?: $mol_time_moment ) {
			const ms = this.state().land.first_stamp() ?? 0
			return new $mol_time_moment( ms )
		}

		@ $mol_mem
		likes_node() {
			return this.state().sub( 'likes', $hyoo_crowd_counter )
		}

		@ $mol_mem
		likes_total() {
			this.liked()
			return this.likes_node().total()
		}

		@ $mol_mem
		liked( next?: boolean ) {
			return this.likes_node().counted( next ) ?? false
		}

		@ $mol_mem
		comments_node() {
			return this.state().yoke( 'comments', $hyoo_crowd_list, [], [], ['0_0'] )
		}

		@ $mol_action
		comment_add( text: string, person: $hyoo_idea_person ) {
			const comment = this.domain().post_add()
			comment.content( text )
			comment.person( person )
			this.comments_node()?.add( comment.id() )
		}

		@ $mol_mem
		comments( next?: $hyoo_idea_post[] ) {
			const ids = this.comments_node()?.list( next && next.map( obj => obj.id() ) ) || []
			return ids.map( id => this.domain().post( id as $mol_int62_string ) )
		}

	}

}
