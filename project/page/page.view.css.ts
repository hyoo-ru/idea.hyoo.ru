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

		Tools: {
			flex: {
				basis: rem(12),
				direction: 'row-reverse',
			},
			justifyContent: 'flex-start',
		},

		Brief: {
			color: $mol_theme.shade,
		},

		Stats_block: {
			Content: {
				padding: 0
			},
			flex: {
				shrink: 0,
			},
		},

		Team_list: {
			flex: {
				grow: 1,
			},
		},

		Posts: {
			Content_card: {
				flex: {
					direction: 'column',
				},
				padding: 0,
				background: {
					color: 'unset',
				},
			},
		},

	} )

}
