namespace $.$$ {

	const { per, rem, px } = $mol_style_unit

	$mol_style_define( $.$hyoo_idea_profile_block, {

		// width: per(100),

		Label: {
			alignItems: 'flex-end',
			padding: {
				bottom: 0,
			},
			font: {
				weight: 'bold',
			},
			letter: {
				spacing: px(1),
			} as any,
		},

		Title: {
			margin: {
				left: rem(0.5), 
			},
		},

		Expander: {
			justifyContent: 'center',
			margin: {
				bottom: 0,
			},
		},

		Content: {
			margin: {
				top: 0,
				left: $mol_gap.block,
				right: $mol_gap.block,
			},
			padding: $mol_gap.block,
			border: {
				radius: $mol_gap.round,
			},
			background: {
				color: $mol_theme.card,
			},
		},

	} )

}
