namespace $.$$ {

	const { rem, per } = $mol_style_unit

	$mol_style_define( $hyoo_idea_app_person_profile, {

		flex: {
			basis: rem(25)
		},

		Name: {
			font: {
				size: rem(1.5),
			},
		},

		Bio: {
			font: {
				size: rem(1),
			},
			padding: $mol_gap.text,
		},

		$hyoo_idea_app_person_profile_stat: {
			flex: {
				basis: rem(5),
			},
			alignItems: 'center',
		},

		Stats_row: {
			width: per(100),
			justifyContent: 'space-around',
		},

	} )

	$mol_style_define( $hyoo_idea_app_person_profile_block, {

		Content: {
			alignItems: 'center',
		},

	} )

}
