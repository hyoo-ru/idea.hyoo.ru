namespace $.$$ {

	type Role = ReturnType<$hyoo_idea_project['roles']>[number]
	type Role_keys = keyof Role 

	export class $hyoo_idea_project_form extends $.$hyoo_idea_project_form {

		domain() {
			return this.project().domain()
		}

		logo_add( next?: File[] ) {
			if (next && next.length) this.logo_node().blob(next[0])
			return next as readonly any[]
		}

		logo_drop() {
			this.logo_node().list([])
		}

		description_selection( next?: number[] ) {
			return this.description_node().selection( this.domain().user().id(), next )
		}

		@ $mol_mem
		stage_options() {
			const obj = new $hyoo_idea_project_stage
			return obj.stages()
		}

		@ $mol_mem
		role_rows() {
			return this.project().roles().map( (_,id) => this.Role_form(id) ).reverse()
		}

		role_add() {
			this.project().roles_node().add({} as any)
		}

		role_drop(id: number) {
			this.project().roles_node().cut( id )
		}

		@ $mol_mem_key
		role_change({ id, key } : { id: number, key: Role_keys }, next?: string) {
			
			const list = this.project().roles()
			const item = list[id] ?? {}

			if (next === undefined) {
				return item[ key ] ?? ''
			}

			this.project().roles([
				... list.slice( 0, id ),
				{ ... item, [ key ]: next },
				... list.slice( id + 1 ),
			])

			return next
		}

		role_name( id: number, next?: string ) {
			return this.role_change( { id, key: 'name' }, next ) as string
		}

		role_count( id: number, next?: string ) {
			return this.role_change( { id, key: 'count' }, next ) as number || 1
		}

		role_functions( id: number, next?: string ) {
			return this.role_change( { id, key: 'functions' }, next ) as string
		}

	}

}
