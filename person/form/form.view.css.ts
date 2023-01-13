namespace $.$$ {

	const { rem, px } = $mol_style_unit

	export const $hyoo_idea_person_form_multy = {
		margin: $mol_gap.block,
		padding: {
			bottom: $mol_gap.block,
		},
		border: {
			radius: $mol_gap.round,
		},
		background: {
			color: $mol_theme.card,
		},
		$mol_form_field: {
			padding: {
				left: $mol_gap.block,
				right: $mol_gap.block,
				top: $mol_gap.space,
				bottom: $mol_gap.space,
			},
		},
	}

	$mol_style_define( $.$hyoo_idea_person_form, {

		flex: {
			basis: rem(50),
		},
		
		Avatar_control: {
			alignItems: 'center',
		},

		Job_form: $hyoo_idea_person_form_multy,
		Jobs_field: {
			Label: {
				alignItems: 'center',
			},
		},

		Institution_form: $hyoo_idea_person_form_multy,
		Institutions_field: {
			Label: {
				alignItems: 'center',
			},
		},

	} )

}
