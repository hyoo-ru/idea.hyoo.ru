namespace $.$$ {

	const { rem, px } = $mol_style_unit

	const list_item = {
		border: {
			bottom: {
				color: $mol_theme.line,
				style: 'solid',
			},
		},
		padding: {
			top: rem(1),
			bottom: rem(1),
		},

		':first-child': {
			padding: {
				top: 0,
			},
		},
		':last-child': {
			padding: {
				bottom: 0,
			},
			border: 'none',
		},
	}

	const list_item_header = {
		font: {
			weight: 'bold',
		},
		letter: {
			spacing: px(1),
		} as any,
	}

	const list_item_muted = {
		font: {
			size: rem(0.75),
		},
		margin: {
			bottom: $mol_gap.block,
		},
		opacity: 0.8,
	}

	$mol_style_define( $.$hyoo_idea_person_page, {

		Title: {
			flex: {
				wrap: 'nowrap',
				grow: 1,
			},
		},

		flex: {
			basis: rem(40),
			shrink: 0,
		},

		Face_list: {
			flex: {
				shrink: 1,
			},
		},

		Status: {
			color: $mol_theme.shade,
		},

		Tools: {
			flex: {
				basis: rem(12),
				direction: 'row-reverse',
			},
			justifyContent: 'flex-start',
		},

		Summary: {
			padding: {
				left: $mol_gap.text,
			},
		},

		Neck: {
			alignItems: 'center',
			zIndex: 1,
		},

		Actions: {
			margin: {
				left: 'auto',
			},
		},
		
		Position: {
			padding: $mol_gap.text,
		},

		Location: {
			padding: $mol_gap.text,
		},
		
		About: {
			padding: $mol_gap.block,
		},

		Projects_block: {
			padding: $mol_gap.block,
		},

		Job_functions: {
			$mol_paragraph: {
				padding: 0,
			},
		},

		Job: list_item as any,

		Job_position: list_item_header as any,
		Job_dates: list_item_muted,
	
		Education_row: list_item as any,
		Education_head: list_item_header as any,
		Education_details: list_item_muted,

		Posts: {
			padding: $mol_gap.block,
		},

	} )

}
