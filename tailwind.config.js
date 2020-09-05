module.exports = {
  purge: {
    mode: 'layers',
    layers: ['base', 'components', 'utilities'],
    content: ['./src/**.tsx'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
  future: {
    darkModeVariant: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}
