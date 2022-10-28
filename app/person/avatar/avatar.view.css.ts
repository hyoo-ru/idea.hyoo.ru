namespace $.$$ {

	const { per, rem } = $mol_style_unit

	$mol_style_define( $hyoo_idea_app_person_avatar, {

		width: 'fit-content',
		height: 'fit-content',
		padding: $mol_gap.block,
		justifyContent: 'center',

		Image: {
			width: rem(12),
			height: rem(12),
			border: {
				radius: per(50),
			},
			box: {
				shadow: [{
					x: 0,
					y: 0,
					blur: 0,
					spread: rem(0.25),
					color: $mol_theme.line,
				}],
			}
		},
	} )

}
