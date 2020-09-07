module.exports = {
  presets: ['next/babel', ['@babel/preset-react', { throwIfNamespace: false }]],
  plugins: [['styled-components', { ssr: true }], 'inline-react-svg']
}
