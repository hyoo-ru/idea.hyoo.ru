namespace $.$$ {

	const { rem } = $mol_style_unit
	const { url } = $mol_style_func

	$mol_style_define( $hyoo_idea_app, {
		
		Menu: {
			flex: {
				basis: rem(20),
				shrink: 0,
			},
			justifyItems: 'flex-start',
			Head: {
				alignItems: 'flex-start',
			},
			Foot: {
				padding: $mol_gap.block,
			},
		},
		
		Menu_snippet: {
			flex: {
				grow: 1,
			},
			gap: $mol_gap.block,
			padding: $mol_gap.text,
		},
		
		Logo: {
			width: rem(3),
			height: rem(3),
		},
		
		Descr: {
			color: $mol_theme.shade,
		},
		
	 } )

}
