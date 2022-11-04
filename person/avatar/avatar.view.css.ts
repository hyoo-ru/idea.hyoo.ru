namespace $.$$ {

	const { per, rem } = $mol_style_unit

	$mol_style_define( $hyoo_idea_person_avatar, {

		width: rem(5),
		height: rem(5),
		justifyContent: 'center',

		Image: {
			border: {
				radius: per(50),
			},
			width: per(100),
			height: per(100),
			box: {
				shadow: [{
					x: 0,
					y: 0,
					blur: 0,
					spread: rem(0.15),
					color: $mol_theme.text,
				}],
			}
		},
	} )

}
