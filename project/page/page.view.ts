namespace $.$$ {

	export class $hyoo_idea_project_page extends $.$hyoo_idea_project_page {

		self() {
			return this.project().owner().id() === this.domain().user().id()
		}

		editing() {
			return this.project().person().id() === this.domain().user().id() && this.$.$mol_state_arg.value('project_edit') === ''
		}

		Edit() {
			return this.self() ? super.Edit() : null as unknown as $mol_link
		}

		body() {
			return this.editing() ? [this.Form()] : super.body()
		}
		
		@ $mol_mem
		main() {
			return [
				... this.stage() ? [ this.Stage() ] : [],
				... this.site() ? [ this.Site() ] : [],
				... this.description() ? [ this.Description() ] : [],
			]
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
		slides_send() {
			
			const parent = this.$.$mol_dom_context.parent
			if( parent === this.$.$mol_dom_context.self ) return
			
			parent.postMessage(
				[ 'done', this.slides_content() ],
				{ targetOrigin: 'https://slides.hyoo.ru' }
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
		
		Posts_title() {
			return super.Posts_title().replace( '{count}', this.post_count().toString() )
		}

		posts_content() {
			return [
				... this.self() ? [this.Post_add()] : [],
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
			return this.project().posts().length
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
