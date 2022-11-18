namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $.$hyoo_idea_project_card, {
		
		gap: $mol_gap.block,

		List: {
			flex: {
				shrink: 1,
			},
		},

		Name: {
			display: 'inline-flex',
			padding: 0,
		},

		Brief: {
			color: $mol_theme.shade,
		},

		Logo: {
			width: rem(3),
			height: rem(3),
			flex: {
				shrink: 0,
			},
		}

	} )

}
