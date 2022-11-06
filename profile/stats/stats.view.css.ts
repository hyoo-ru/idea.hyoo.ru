namespace $.$$ {

	const { rem, per, px } = $mol_style_unit

	$mol_style_define( $.$hyoo_idea_profile_stats, {

		width: per(100),

		justifyContent: 'space-between',

		color: $mol_theme.text,

	} )

	$mol_style_define( $.$hyoo_idea_profile_stat, {

		flex: {
			direction: 'column',
		},

		letter: {
			spacing: px(1),
		} as any,

	} )

}
