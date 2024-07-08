export const theme = {
	colors: {
		blue: '#B1E5FC',
		green: '#CBEBA4',
		orange: '#FFBC99', 
    violet: '#AFC6FF',
    purplee: '#CABDFF', 
    yellow: '#FFD88D', 
    pink: '#F8B0ED',
		red: '#FB9B9B',

		purple: '#6759FF',

		black_50: '#1A1D1F',
		black_100: '#172B4D',
		black_200: '#41405D',
		black_300: '#666C89',

		gray: '#9A9FA5',
		gray_50: '#6F767E',
		gray_100: '#9B9E9F',
		gray_200: '#EFEFEF',

		white_200: '#FBFBFB',
		background: '#f3f3f3',
		backgroundPrimary: '#FFFFFF'
	},

	fontSize: {
		headingLarge: 48 ,
		headingMedium: 32,
		headingSmall: 18,

		paragraphLarge: 16,
		paragraphMedium: 14,
		paragraphSmall: 13,
		paragraph: 12,
	},

	spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
		s16: 16,
		s20: 20,
		s24: 24,
  },

  borderRadius: {
    s5: 5,
    s8: 8,
    s10: 10,
		s14: 14,
  },

	font: {
		regular: 'Inter_500Medium',
		semiBold: 'Inter_600SemiBold',
		bold: 'Inter_700Bold',
	},
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];