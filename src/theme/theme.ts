export const colors = {
  background: '#FBF7F0',
  surface: '#FFFFFF',
  surfaceAlt: '#F3ECE0',
  surfaceSunken: '#EFE6D6',
  primary: '#1B8A5A',
  primaryDark: '#0F6B43',
  primaryLight: '#E4F2EA',
  accent: '#D9483B',
  accentLight: '#FBE7E4',
  gold: '#E4A62B',
  goldLight: '#FBF0DA',
  blue: '#3B7FA8',
  blueLight: '#E4EFF4',
  textPrimary: '#2B2420',
  textSecondary: '#8A8072',
  textOnDark: '#FFFFFF',
  border: '#E7DFD0',
  success: '#2FA84F',
  warning: '#E4A62B',
  danger: '#D9483B',
  white: '#FFFFFF',
  black: '#000000',
} as const;

export const gradeColors = {
  again: colors.danger,
  hard: colors.gold,
  good: colors.primary,
  easy: colors.blue,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 14,
  lg: 20,
  xl: 28,
  pill: 999,
} as const;

export const typography = {
  h1: { fontSize: 30, fontWeight: '800' as const },
  h2: { fontSize: 22, fontWeight: '700' as const },
  h3: { fontSize: 18, fontWeight: '700' as const },
  body: { fontSize: 16, fontWeight: '400' as const },
  bodyBold: { fontSize: 16, fontWeight: '600' as const },
  small: { fontSize: 13, fontWeight: '400' as const },
  smallBold: { fontSize: 13, fontWeight: '700' as const },
  caption: { fontSize: 11, fontWeight: '600' as const },
};

export const shadow = {
  card: {
    shadowColor: '#3A2E1F',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 3,
  },
  floating: {
    shadowColor: '#3A2E1F',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 8,
  },
};
