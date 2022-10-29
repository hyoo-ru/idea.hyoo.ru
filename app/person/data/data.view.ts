namespace $.$$ {

	type Job = ReturnType<$hyoo_idea_app_person['job']>
	type Job_keys = keyof Job

	export class $hyoo_idea_app_person_data extends $.$hyoo_idea_app_person_data {

		@ $mol_mem
		avatar_file(next?: File[]) {
			if (next && next.length) this.person().avatar_node().blob(next[0])
			return next as readonly any[]
		}

		avatar_drop() {
			this.person().avatar_node().list([])
		}

		@ $mol_mem
		job_rows() {
			return this.person().jobs_node().keys().map( id => this.Job_form(id) )
		}

		job_add() {
			this.person().jobs_node().add( $mol_guid() )
		}

		job_drop(id: string) {
			this.person().jobs_node().drop( id )
		}

		@ $mol_mem_key
		job({ id, key } : { id: string, key: Job_keys }, next?: string) {
			const obj = { ...(this.person().job(id) ?? {}) }

			if (next === undefined) {
				return (obj && obj[key]) ?? ''
			}

			obj[key] = next
			this.person().job(id, obj)

			return next
		}

		position( id: string, next?: string ) {
			return this.job({ id, key: 'position' }, next)
		}

		date_start( id: string, next?: string ) {
			console.log(111111, id, next)
			return this.job({ id, key: 'date_start' }, next)
		}

		date_end( id: string, next?: string ) {
			console.log(22222, id, next)
			return this.job({ id, key: 'date_end' }, next)
		}

		company( id: string, next?: string ) {
			return this.job({ id, key: 'company' }, next)
		}

		industry( id: string, next?: string ) {
			return this.job({ id, key: 'industry' }, next)
		}

		functions( id: string, next?: string ) {
			return this.job({ id, key: 'functions' }, next)
		}
	}

}
