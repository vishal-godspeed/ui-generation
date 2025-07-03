const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './**/*.html',
    './css/**/*.css',
    './script.js',
    './script2.js',
  ],
  theme: {
    extend: {
      // 🎨 Colors
      colors: {
        primary: colors.blue,
        secondary: colors.amber,
        muted: colors.gray,
        dark: colors.zinc[900],
        light: colors.zinc[100],
        white: colors.white,
        black: colors.black,
        success: colors.green,
        error: colors.red,
        warning: colors.yellow,
        info: colors.sky,
      },
      // 🔤 Typography
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
        mono: ['Fira Code', 'ui-monospace'],
      },
      // 🌈 Gradients
      backgroundImage: theme => ({
        'primary-gradient': `linear-gradient(to right, ${theme('colors.primary.500')}, ${theme('colors.primary.700')})`,
        'secondary-gradient': `linear-gradient(to right, ${theme('colors.secondary.500')}, ${theme('colors.secondary.700')})`,
        'success-gradient': `linear-gradient(to right, ${theme('colors.success.500')}, ${theme('colors.success.700')})`,
        'info-gradient': `linear-gradient(to right, ${theme('colors.info.500')}, ${theme('colors.info.700')})`,
        'dark-gradient': `linear-gradient(to right, ${theme('colors.dark')}, ${theme('colors.black')})`,
        'error-gradient': `linear-gradient(to right, ${theme('colors.error.500')}, ${theme('colors.error.700')})`,
      }),
    },
  },
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.btn': {
          display: 'inline-block',
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.semibold'),
          fontFamily: theme('fontFamily.sans').join(','),
          fontSize: theme('fontSize.base'),
          backgroundColor: theme('colors.primary.500'),
          color: theme('colors.white'),
          transitionProperty: theme('transitionProperty.DEFAULT'),
          transitionDuration: theme('transitionDuration.150'),
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: theme('colors.primary.700'),
          },
          '&:disabled': {
            opacity: '0.5',
            cursor: 'not-allowed',
          },
        },
        '.btn.bg-secondary-500': {
          backgroundColor: theme('colors.secondary.500'),
          color: theme('colors.white'),
        },
        '.btn.bg-secondary-500:hover, .btn.hover\:bg-secondary-700:hover': {
          backgroundColor: theme('colors.secondary.700'),
        },
        '.btn.bg-muted-500': {
          backgroundColor: theme('colors.muted.500'),
          color: theme('colors.white'),
        },
        '.btn.bg-muted-500:hover, .btn.hover\:bg-muted-700:hover': {
          backgroundColor: theme('colors.muted.700'),
        },
        '.btn.text-white': {
          color: theme('colors.white'),
        },
      });
    },
  ],
}; 