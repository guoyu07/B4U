module.exports = {
  env: {
    browser: true
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  plugins: [
    'html'
  ],
  rules: {
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 0,
    'max-len': 0,
    'no-console': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
