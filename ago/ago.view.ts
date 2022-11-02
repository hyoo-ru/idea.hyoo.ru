namespace $.$$ {

	export class $hyoo_idea_ago extends $.$hyoo_idea_ago {

		SECOND = 1000
		MINUTE = this.SECOND * 60
		HOUR = this.MINUTE * 60
		DAY = this.HOUR * 24
		MONTH = this.DAY * 30
		YEAR = this.DAY * 365
		
		unit( ms : number ) {
			if ( ms < this.MINUTE ) return 'second'
			if ( ms < this.HOUR ) return 'minute'
			if ( ms < this.DAY ) return 'hour'
			if ( ms < this.MONTH ) return 'day'
			if ( ms <= this.YEAR ) return 'month'
			return 'year'
		}
		
		@ $mol_mem
		ago() {
			const moment = new $mol_time_moment( this.moment() )
			const ms = $mol_state_time.now( 10000 ) - moment.valueOf()
			const duration = new $mol_time_duration( ms )
			
			const format = { second: 'PT1S', minute: 'PT1M', hour: 'PT1H', day: 'P1DT', month: 'P1MT', year: 'P1YT' }
			const unit = this.unit( ms )
			const value = Math.round( duration.count( format[ unit ] ) )
			const now = unit === 'second' && value < 10

			if (now) return this.now()

			return this.title()
				.replace( this.param_count() , Math.abs( value ).toString() )
				.replace( this.param_unit() , this.units()[ unit ].select( value ) )
		}

	}

}
