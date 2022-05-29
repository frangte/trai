module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'prettier'],
  plugins: [],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
  },
}
