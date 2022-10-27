namespace $ {

	export class $hyoo_idea_app_person extends $hyoo_idea_lib_entity {

		@ $mol_mem
		avatar( next?: string ) {
			return this.state().sub( 'avatar', $hyoo_crowd_reg ).str( next ) || 'https://thiscatdoesnotexist.com'
		}

		@ $mol_mem
		name( next?: string ) {
			return this.state().sub( 'name', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		name_family( next?: string ) {
			return this.state().sub( 'name_family', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		name_father( next?: string ) {
			return this.state().sub( 'name_father', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		gender( next?: 'male' | 'female' ) {
			return this.state().sub( 'gender', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		date_birth( next?: $mol_time_moment ) {
			const str = this.state().sub( 'date_birsth', $hyoo_crowd_reg ).str( next && next.toString() )
			return str ? new $mol_time_moment( str ) : null
		}

		@ $mol_mem
		country( next?: string ) {
			return this.state().sub( 'country', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		city( next?: string ) {
			return this.state().sub( 'city', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		phone( next?: string ) {
			return this.state().sub( 'phone', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		email( next?: string ) {
			return this.state().sub( 'email', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		registered( next?: boolean ) {
			return this.state().sub( 'registered', $hyoo_crowd_reg ).bool( next ) || false
		}

	}

}
