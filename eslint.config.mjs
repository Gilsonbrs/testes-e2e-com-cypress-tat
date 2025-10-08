export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        browser: 'readonly',
        node: 'readonly',
        commonjs: 'readonly'
      },
      parserOptions: {
        ecmaVersion: 12
      }
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'no-trailing-spaces': ['error']
    }
  }
]
