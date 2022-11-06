namespace $.$$ {

	const { rem, px, per } = $mol_style_unit

	$mol_style_define( $.$hyoo_idea_project_page, {

		flex: {
			basis: rem(40),
			shrink: 0,
		},

		Title: {
			flex: {
				wrap: 'nowrap',
				grow: 1,
			},
		},

		Face_list: {
			flex: {
				shrink: 1,
			},
		},

		Logo: {
			width: rem(3),
			height: rem(3),
			// margin: $mol_gap.block,
		},
		
		Tools: {
			flex: {
				basis: rem(12),
				direction: 'row-reverse',
			},
			justifyContent: 'flex-start',
		},

		Name: {
			font: {
				size: rem(1.5),
			},
			margin: {
				bottom: rem(0.5),
			},
			letter: {
				spacing: px(1),
			} as any,
		},

		Brief: {
			opacity: 0.8,
		},

		Neck: {
			zIndex: 1,
		},

		Stats_block: {
			Content: {
				padding: 0
			},
		},

		Team_list: {
			flex: {
				grow: 1,
			},
		},

		Posts: {
			Content: {
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
