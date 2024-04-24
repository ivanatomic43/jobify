// eslint-disable-next-line no-unused-vars
const OFF = 0
// eslint-disable-next-line no-unused-vars
const WARNING = 1
const ERROR = 2

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: ['@react-native-community', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
    {
      files: ['src/api/**/*', 'src/payments-api/**/*'],
      rules: {
        'no-duplicate-imports': 'off',
        'eslint-comments/no-unused-disable': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
        '@typescript-eslint/no-redeclare': 'off',
      },
    },
  ],
  rules: {
    'import/order': [
      ERROR,
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/jsx-sort-props': [
      ERROR,
      {
        ignoreCase: true,
        callbacksLast: true,
        reservedFirst: true,
        shorthandFirst: true,
        noSortAlphabetically: true,
      },
    ],
    'jest/no-disabled-tests': 'warn',
    'no-duplicate-imports': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-boolean-value': 'error',
  },
}
