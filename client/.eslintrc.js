module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'react-hooks',
    'jest',
  ],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/ban-ts-comment': [
      2,
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        minimumDescriptionLength: 10,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-explicit-any': 2,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowTernary: true },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 2,
    'jsx-quotes': ['error', 'prefer-single'],
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '&&': 'after',
          '||': 'after',
        },
      },
    ],
    'import/prefer-default-export': [
      'off',
    ],
    'no-underscore-dangle': [
      'off',
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off', // Unecessary now due to new jsx compilation
    'react/jsx-one-expression-per-line': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      0,
      { extensions: ['.ts, .tsx'] },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [
          'Link',
        ],
        specialLink: [
          'to',
          'hrefLeft',
          'hrefRight',
        ],
        aspects: [
          'noHref',
          'invalidHref',
          'preferButton',
        ],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: [
            'nesting',
            'id',
          ],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: [
            'nesting',
            'id',
          ],
        },
      },
    ],
    'jsx-a11y/no-autofocus': [0, {
      ignoreNonDOM: true,
    }],
    'max-len': ['error', {
      code: 100,
      ignoreUrls: true,
      ignoreComments: true,
      ignoreStrings: true,
      ignorePattern: '<p[^>]*>.*?</p>',
    }],
    'no-use-before-define': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-multiple-empty-lines': [
      'error',
      { max: 1, maxEOF: 1 },
    ],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'arrow-parens': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': [2, 'static public field'],
    'react/sort-comp': [
      2,
      {
        order: [
          'constructor',
          'static-variables',
          'instance-variables',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
    'import/extensions': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: [],
        filter: {
          regex: '_id',
          match: true,
        },
      },
    ],
  },
};
