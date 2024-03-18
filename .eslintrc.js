module.exports = {
  env: {
    node: true
  },
  extends: ['standard', 'plugin:playwright/recommended', 'plugin:yml/standard'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs,yml}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'require-await': 'error',
    curly: 'error',
    'playwright/expect-expect': 'off',
    'playwrigh/no-focused-test': 'off'
  }
}
