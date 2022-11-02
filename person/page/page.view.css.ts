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

		flex: {
			basis: rem(40),
			shrink: 0,
		},

		padding: {
			bottom: $mol_gap.block,
		},

		Face: {
			flex: {
				wrap: 'nowrap',
			},
		},

		Face_list: {
			flex: {
				shrink: 1,
			},
		},

		Avatar: {
			width: rem(7),
			height: rem(7),
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

		Status: {
			opacity: 0.8,
		},

		Summary: {
			padding: {
				left: $mol_gap.text,
			},
		},

		Neck: {
			alignItems: 'center',
		},

		Stats: {
			Content: {
				padding: 0
			},
		},

		Actions: {
			margin: {
				left: 'auto',
			},
		},

		Contacts: {
			Content: {
				flex: {
					direction: 'column',
				},
			},
		},

		Contacts_phone: {
			justifyContent: 'space-between',
			margin: {
				bottom: $mol_gap.block,
			},
		},

		Contacts_email: {
			justifyContent: 'space-between',
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
