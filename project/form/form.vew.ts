namespace $.$$ {

	type Role = ReturnType<$hyoo_idea_project['roles']>[number]
	type Role_keys = keyof Role 

	export class $hyoo_idea_project_form extends $.$hyoo_idea_project_form {

		domain() {
			return this.project().domain()
		}

		@ $mol_mem
		logo_add( next?: File[] ) {
			
			if( !next ) return []
			
			const file = next[0]
			const pict = $mol_picture.fit( file, 96 )

			const blob = pict.format( 'image/webp' )
			if( !blob ) return []
			
			this.logo_node().blob( blob )
			
			return []
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

		role_functions( id: number, next?: string ) {
			return this.role_change( { id, key: 'functions' }, next ) as string
		}

		role_team_member( id: number, next?: string ) {
			return this.role_change( { id, key: 'person' }, next ) as string
		}

		@ $mol_mem
		team_member_dict() {
			return this.project().team_members().reduce( (dict, obj) => {
				dict[obj.id()] = obj.name()
				return dict
			}, {} as Record< string, string > )
		}

		@ $mol_mem_key
		member_role( obj: $hyoo_idea_person ) {
			const roles = this.project().roles()
			const role = roles.find( role => role.person === obj.id() )
			return role?.name || this.role_not_label()
		}


		team_fields() {
			return [
				... this.project().team_members().length > 0 ? [this.Team_field()] : [],
				... this.project().team_requests().length > 0 ? [this.Requests_field()] : [],
				... this.project().team_invites().length > 0 ? [this.Invites_field()] : [],
			]
		}

		@ $mol_mem
		team_rows() {
			return this.project().team_members().map( obj => this.Team_member(obj) )
		}

		@ $mol_mem
		requests_rows() {
			return this.project().team_requests().map( obj => this.Request_member(obj) )
		}

		@ $mol_mem
		invites_rows() {
			return this.project().team_invites().map( obj => this.Invite_member(obj) )
		}

		member( obj: $hyoo_idea_person ) {
			return obj
		}

		@ $mol_action
		team_kick( obj: $hyoo_idea_person ) {
			this.project().team_node().drop( obj.id() )
		}

		@ $mol_action
		request_accept( obj: $hyoo_idea_person ) {
			this.project().team_node().add( obj.id() )
		}

		@ $mol_action
		invite_cancel( obj: $hyoo_idea_person ) {
			this.project().team_node().drop( obj.id() )
		}

		@ $mol_mem_key
		team_actions( obj: $hyoo_idea_person ) {
			return [
				this.Member_role(obj),
				... this.project().owner().id() !== obj.id() ? [this.Team_kick(obj)] : [],
			]
		}

	}

}
