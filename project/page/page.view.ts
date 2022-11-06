namespace $.$$ {

	export class $hyoo_idea_project_page extends $.$hyoo_idea_project_page {

		self() {
			return this.project().owner().id() === this.domain().user().id()
		}

		editing() {
			return this.project().person().id() === this.domain().user().id() && this.$.$mol_state_arg.value('project_edit') === ''
		}

		Edit() {
			return this.self() ? super.Edit() : null
		}

		body() {
			return this.editing() ? [this.Form()] : super.body()
		}
		
		@ $mol_mem
		slides() {
			const source = this.$.$mol_state_arg.href() + '/'
			return super.slides().replace( '{source}', encodeURIComponent( source ) )
		}
		
		@ $mol_mem
		slides_content() {
			return super.slides_content()
				.replace( '{name}', this.project().name() || '{name}' )
				.replace( '{brief}', this.project().brief() || '{brief}' )
				.replace( '{description}', this.project().description() || '{description}' )
		}

		@ $mol_mem
		message_listener() {

			return new $mol_dom_listener(
				$mol_dom_context,
				'message',
				$mol_wire_async( ( event: MessageEvent< any > )=> {
					
					const data = event.data
					if( !Array.isArray( data ) ) return
					if( data[0] !== 'content' ) return
					
					event.source?.postMessage( [ 'done', this.slides_content() ], { targetOrigin: '*' } )
					
				} )
			)
			
		}

		@ $mol_action
		join_request() {
			this.domain().user().projects_node().add( this.project().id() )
		}

		@ $mol_action
		join_cancel() {
			this.domain().user().projects_node().drop( this.project().id() )
		}


		post(obj: $hyoo_idea_post) {
			return obj
		}

		post_list() {
			return this.project().posts()
				.sort( (a, b) => b.created_moment().valueOf() - a.created_moment().valueOf() )
				.map( obj => this.Post( obj ) )
		}

		post_add(text: string) {
			const obj = this.domain().post_add()
			obj.content( text )
			this.project().post_add( obj , this.domain().user() )
		}

		posts_content() {
			return [
				... this.self() ? [this.Post_add()] : [],
				this.Post_list(),
			]
		}

		team_stat() {
			const roles = this.project().roles()
			return `${roles.filter( obj => !!obj.person ).length}/${roles.length}`
		}

		sub_count() {
			return this.project().subs().length.toString()
		}

		post_count() {
			return this.project().posts().length.toString()
		}

		team_member_list() {
			return this.project().team_members().map( obj => this.Team_member(obj) )
		}

		team_member( obj: $hyoo_idea_person ) {
			return obj
		}

		team_member_role( obj: $hyoo_idea_person ) {
			const role = this.project().roles().find( role => role.person === obj.id() )
			return role?.name || this.team_member_no_role()
		}

	}

}
