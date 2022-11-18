namespace $.$$ {

	const { rem, per } = $mol_style_unit

	$mol_style_define( $.$hyoo_idea_post_card, {

		width: per(100),

		padding: {
			bottom: $mol_gap.block,
		},

		background: {
			color: $mol_theme.card,
		},
		
		margin: {
			top: $mol_gap.block,
			bottom: $mol_gap.block,
		},

		border: {
			radius: $mol_gap.round,
		},

		Ago: {
			color: $mol_theme.shade,
		},

		Share: {
			margin: {
				left: 'auto',
			},
		},

		Comment_add: {
			alignItems: 'center',
			padding: {
				left: $mol_gap.block,
				right: $mol_gap.block,
			}
		},

		Avatar: {
			width: rem(2),
			height: rem(2),
		},

		Comment: {
			Actions: {
				alignSelf: 'flex-start',
			},
		},

		Comment_ago: {
			opacity: 0.8,
			font: {
				size: rem(0.75),
			},
		},

		Comment_text: {
			padding: {
				top: $mol_gap.space,
				bottom: $mol_gap.space,
			},
		},

	} )

}
