module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },

  plugins: ['prettier', 'unicorn'],

  rules: {
    // Prettier Plugin Rules
    'prettier/prettier': 'error',

    // React Plugin Rules
    'react/prop-types': 0,
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js'],
      },
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'error',
    'react/prefer-stateless-function': ['off'],
  },
};
