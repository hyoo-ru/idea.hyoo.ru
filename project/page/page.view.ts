namespace $.$$ {

	export class $hyoo_idea_project_page extends $.$hyoo_idea_project_page {

		editing() {
			return this.project().person().id() === this.domain().user().id() && this.$.$mol_state_arg.value('project_edit') === ''
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

	}

}
