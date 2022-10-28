namespace $.$$ {

	const { rem, per } = $mol_style_unit

	$mol_style_define( $.$hyoo_idea_app_post_full, {

		width: per(100),

		background: {
			color: $mol_theme.card,
		},
		
		margin: {
			top: $mol_gap.block,
		},

		border: {
			radius: $mol_gap.round,
		},

		Avatar: {
			width: rem(3),
			height: rem(3),
		},

		Head: {
			alignItems: 'center',
			margin: {
				bottom: $mol_gap.block,
			},
		},

		Ago: {
			font: {
				size: rem(0.75),
			},
		},

		Menu: {
			alignSelf: 'flex-start',
			margin: {
				left: 'auto',
			},
		},

		Foot: {
			margin: {
				top: $mol_gap.block,
			},
		},

	} )

}
