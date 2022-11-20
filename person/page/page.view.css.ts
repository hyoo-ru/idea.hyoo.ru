namespace $.$$ {

	const { rem, px } = $mol_style_unit

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
		
		Jobs: {
			padding: $mol_gap.block,
		},
		Job_functions: {
			$mol_paragraph: {
				padding: 0,
			},
		},

		Job: {
			padding: $mol_gap.block,
		},

		Job_dates: {
			color: $mol_theme.shade,
		},
	
		Education: {
			padding: $mol_gap.block,
		},
		Education_row: {
			padding: $mol_gap.block,
		},
		Education_details: {
			color: $mol_theme.shade,
		},
		
		Project_list: {
			Rows: {
				padding: 0,
			},
		},

	} )

}
