namespace $.$$ {

	export class $hyoo_idea_person_avatar extends $.$hyoo_idea_person_avatar {

		blob_exists() {
			return this.blob().list().length > 0
		}

		placeholder() {
			return super.placeholder().replace('{id}', this.blob().land.id)
		}

		uri() {
			return this.blob_exists() ? this.blob().uri() : this.placeholder()
		}

	}

}
