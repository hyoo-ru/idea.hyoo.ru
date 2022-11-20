namespace $.$$ {
	export class $hyoo_idea_person_card extends $.$hyoo_idea_person_card {
		
		@ $mol_mem
		info() {
			return [
				this.Name(),
				... this.name_sub().length ? [ this.Name_sub() ] : [],
			]
		}
		
		name() {
			return super.name() || '???'
		}
		
	}
}
