'use strict';

module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    stylelint - scss
  ],
  rules: {
    'at-rule-no-unknown': [
      true, {
        ignoreAtRules: [
          'include',
          'each',
          'mixin',
          'if',
          'else',
          'content'
        ]
      }
    ],
    indentation: 2,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/media-feature-value-dollar-variable': 'always',
    'scss/selector-no-redundant-nesting-selector': true,
    'at-rule-empty-line-before': [
      'always',
      {
        ignoreAtRules: ['else'],
        ignore: [
          'blockless-after-same-name-blockless',
          'inside-block'
        ]
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extend',
          'at-root',
          'debug',
          'warn',
          'error',
          'if',
          'else',
          'for',
          'each',
          'while',
          'mixin',
          'include',
          'content',
          'return',
          'function'
        ]
      }
    ],
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: [
          'if',
          'else'
        ]
      }
    ]
  }
}
