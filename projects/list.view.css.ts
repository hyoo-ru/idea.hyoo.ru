namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $.$hyoo_idea_projects, {

		flex: {
			basis: rem(20),
			shrink: 0,
		},
		
		Empty: {
			padding: rem(2),
			margin: ['auto', 'auto'],
		},

		Empty_add: {
			padding: 0,
			margin: {
				left: $mol_gap.space,
			},
			display: 'inline-flex',
		},
		
		Rows: {
			padding: $mol_gap.block,
		},

	} )

}