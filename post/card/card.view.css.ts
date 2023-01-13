namespace $.$$ {

	const { rem, per, px } = $mol_style_unit

	$mol_style_define( $.$hyoo_idea_post_card, {

		width: per(100),

		Comment: {
			margin: $mol_gap.block,
		},

		Comment_add: {
			alignItems: 'center',
			padding: {
				left: $mol_gap.block,
				right: $mol_gap.block,
			}
		},
		
		Comment_ago: {
			color: $mol_theme.shade,
			padding: $mol_gap.block,
		},
		
		Comment_author: {
			Avatar: {
				width: rem(1.5),
				height: rem(1.5),
			},
		},

	} )

}
