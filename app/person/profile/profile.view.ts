namespace $.$$ {

	export class $hyoo_idea_app_person_profile extends $.$hyoo_idea_app_person_profile {
		
		domain() {
			return this.person().domain()
		}

		post(obj: $hyoo_idea_app_post) {
			return obj
		}

		post_list() {
			return this.person().posts()
				.sort( (a, b) => b.date_created().valueOf() - a.date_created().valueOf() )
				.map( obj => this.Post( obj ) )
		}

		post_add(text: string) {
			const obj = this.domain().post_add()
			obj.content( text )
			obj.person( this.person() )
			obj.date_created( new $mol_time_moment() )
			this.person().post_add( obj )
		}

		face_content() {
			return [
				this.Avatar(),
				this.Name(),
				... this.status().length ? [this.Status()] : [],
			]
		}

		blocks() {
			return [
				this.Face(),
				this.Stats(),
				... this.about().length ? [this.About()] : [],
				this.Posts(),
			]
		}

	}

}
