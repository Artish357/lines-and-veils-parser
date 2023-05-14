/* eslint-env node */
module.exports = {
    extends: [
        'eslint:recommended', 
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    settings:  {
        react:  {
          version:  'detect',
        },
    },
};