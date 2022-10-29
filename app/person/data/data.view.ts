namespace $.$$ {

	type Job = ReturnType<$hyoo_idea_app_person['jobs']>[number]
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
			return this.person().jobs().map( (_,id) => this.Job_form(id) )
		}

		job_add() {
			this.person().jobs_node().add({})
		}

		job_drop(id: string) {
			this.person().jobs_node().drop( id )
		}

		@ $mol_mem_key
		job({ id, key } : { id: number, key: Job_keys }, next?: string) {
			
			const jobs = this.person().jobs()
			const job = jobs[id] ?? {}

			if (next === undefined) {
				return job[ key ] ?? ''
			}

			this.person().jobs([
				... jobs.slice( 0, id ),
				{ ... job, [ key ]: next },
				... jobs.slice( id + 1 ),
			])

			return next
		}

		position( id: number, next?: string ) {
			return this.job({ id, key: 'position' }, next)
		}

		date_start( id: number, next?: string ) {
			console.log(111111, id, next)
			return this.job({ id, key: 'date_start' }, next)
		}

		date_end( id: number, next?: string ) {
			console.log(22222, id, next)
			return this.job({ id, key: 'date_end' }, next)
		}

		company( id: number, next?: string ) {
			return this.job({ id, key: 'company' }, next)
		}

		industry( id: number, next?: string ) {
			return this.job({ id, key: 'industry' }, next)
		}

		functions( id: number, next?: string ) {
			return this.job({ id, key: 'functions' }, next)
		}
	}

}
