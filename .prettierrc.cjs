module.exports = {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
  ],
  printWidth: 50,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  jsxSingleQuote: true,
  semi: true,
  importOrder: [
    '<THIRED_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
