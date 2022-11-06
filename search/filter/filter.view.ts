namespace $.$$ {

	export class $hyoo_idea_search_filter extends $.$hyoo_idea_search_filter {

		@ $mol_mem
		form_fields() {
			return [
				this.Type_field(),

				... this.type() === 'posts' ? [

					this.Posts_what_field(),
					... this.posts_what() === 'user' ? [
						this.Post_user_field(),
					] : [],
					... this.posts_what() === 'project' ? [
						this.Post_project_field(),
					]: [],
					... this.posts_what() === 'idea' ? [

					]: [],

				] : [],

				... this.type() === 'team' ? [

				] : [],

				... this.type() === 'project' ? [

				] : [],
			]
		}

		@ $mol_mem
		post_user_dict() {
			return this.domain().persons().list()
				.filter( obj => obj.registered() )
				.reduce( (dict, obj) => {
					dict[obj.id()] = obj.name_short()
					return dict
				}, {} )
		}

		@ $mol_mem
		post_project_dict() {
			return this.domain().persons().list()
				.map( obj => obj.projects() ).flat()
				.filter( obj => !!obj.name && !!obj.description )
				.reduce( (dict, obj) => {
					dict[obj.id()] = obj.name()
					return dict
				}, {} )
		}

		type( next?: string ) {
			return this.$.$mol_state_arg.value('search_type', next) ?? super.type()
		}

		posts_what( next?: string ) {
			return this.$.$mol_state_arg.value('search_posts_what', next) ?? super.posts_what()
		}

		post_user( next?: string ) {
			return this.$.$mol_state_arg.value('search_post_user', next) ?? super.post_user()
		}

		post_project( next?: string ) {
			return this.$.$mol_state_arg.value('search_post_project', next) ?? super.post_project()
		}

	}

}
