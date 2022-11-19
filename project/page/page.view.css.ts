namespace $.$$ {

	const { rem, px, per } = $mol_style_unit

	$mol_style_define( $.$hyoo_idea_project_page, {

		flex: {
			basis: rem(40),
			shrink: 0,
		},

		Face_list: {
			flex: {
				shrink: 1,
			},
		},

		Stage: {
			padding: $mol_gap.block,
			flex: {
				grow: 0,
			},
		},

		Brief: {
			color: $mol_theme.shade,
		},
		
		Description: {
			padding: $mol_gap.block,
		},

		Team: {
			padding: $mol_gap.block,
		},
		
		Posts: {
			padding: $mol_gap.block,
		},

	} )

}
