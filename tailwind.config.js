module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      xsm: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontSize: {
      xsm:'11px'
    },
    extend: {
      gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      colors: {
        paleBlue:'#0F2B5B',
        deepBlue: '#00183E',
        Blue: '#0F3354',
        deepRed: "#801812",
        purple: '#5B1A66'
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
    ],
};
