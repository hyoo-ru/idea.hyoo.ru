namespace $.$$ {

	export class $hyoo_idea_plural extends $.$hyoo_idea_plural {

		@ $mol_mem
		plural_rules() {
			const locale = this.$.$mol_locale.lang()
			return new Intl.PluralRules(locale)
		}
		
		select( num : number ) {
			const plural = this.plural_rules().select( num )
			return this[ plural ]()
		}

	}

}
