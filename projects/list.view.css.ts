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

		Filter: {
			alignSelf: 'stretch',
		},
		
		Rows: {
			padding: $mol_gap.block,
		},

	} )

}
