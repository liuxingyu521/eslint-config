module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:jsonc/recommended-with-jsonc',
  ],
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/comma-dangle': ['error', 'never'],
        'jsonc/indent': ['error', 2],
        'jsonc/array-bracket-newline': ['error', { multiline: true, minItems: null }],
        'jsonc/array-element-newline': ['error', 'always'],
        'jsonc/object-curly-newline': ['error', { consistent: true }],
        'jsonc/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'private',
              'packageManager',
              'author',
              'type',
              'main',
              'exports',
              'license',
              'files',
              'bin',
              'scripts',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'dependencies',
              'devDependencies',
              'peerDependencies',
              'peerDependenciesMeta',
              'optionalDependencies',
              'sideEffects',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'icon',
              'engines',
              'activationEvents',
              'contributes',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
        ],
      },
    },
  ],
  rules: {
    // common
    'comma-dangle': ['error', 'always-multiline'],
    'array-element-newline': ['error', 'consistent'],
  },
}
