namespace $.$$ {

	const { rem, per } = $mol_style_unit

	$mol_style_define( $hyoo_idea_person_profile, {

		Body: {
			padding: $mol_gap.block,
		},

		flex: {
			basis: rem(25)
		},

		Avatar: {
			padding: $mol_gap.block,
		},

		Name: {
			font: {
				size: rem(1.5),
			},
		},

		Status: {
			font: {
				size: rem(0.9),
			},
			padding: $mol_gap.text,
		},

		$hyoo_idea_person_profile_stat: {
			flex: {
				basis: rem(5),
			},
			alignItems: 'center',
		},

		Stats_row: {
			width: per(100),
			justifyContent: 'space-around',
		},

		Post_list: {
			width: per(100),
		}

	} )

	$mol_style_define( $hyoo_idea_person_profile_block, {

		width: per(100),

		Content: {
			alignItems: 'center',
			width: per(100),
		},

	} )

}
