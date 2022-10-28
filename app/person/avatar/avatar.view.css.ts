namespace $.$$ {

	const { per, rem } = $mol_style_unit

	$mol_style_define( $hyoo_idea_app_person_avatar, {

		width: rem(10),
		height: rem(10),
		justifyContent: 'center',

		Image: {
			width: per(100),
			height: per(100),
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
