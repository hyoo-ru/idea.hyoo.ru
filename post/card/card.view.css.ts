namespace $.$$ {

	const { rem, per } = $mol_style_unit

	$mol_style_define( $.$hyoo_idea_post_card, {

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

		Head: {
			margin: {
				bottom: $mol_gap.block,
			},
		},

		Ago: {
			font: {
				size: rem(0.75),
			},
		},

		Foot: {
			margin: {
				top: $mol_gap.block,
			},
		},

		Share: {
			margin: {
				left: 'auto',
			},
		},

	} )

}
