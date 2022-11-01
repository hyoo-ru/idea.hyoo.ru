namespace $.$$ {

	const { rem, px, per } = $mol_style_unit

	$mol_style_define( $.$hyoo_idea_project_page, {

		flex: {
			basis: rem(40),
			shrink: 0,
		},

		Project_logo: {
			width: rem(8),
			margin: $mol_gap.block,
		},

		Face: {
			alignItems: 'center',
		},

		Name: {
			padding: $mol_gap.text,
			font: {
				size: rem(1.5),
			},
			line: {
				height: per(150),
			} as any,
			text: {
				align: 'center',
			} as any,
			letter: {
				spacing: px(1),
			} as any,
		},

	} )

}
