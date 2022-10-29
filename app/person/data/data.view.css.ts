namespace $.$$ {

	const { rem, px } = $mol_style_unit

	$mol_style_define( $.$hyoo_idea_app_person_data, {

		flex: {
			basis: rem(50),
		},

		Avatar: {
			width: rem(5),
			height: rem(5),
		},

		Avatar_control: {
			alignItems: 'center',
		},

		Job_form: {
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
		},

		Jobs_field: {
			Label: {
				alignItems: 'center',
			},
		},

	} )

}
