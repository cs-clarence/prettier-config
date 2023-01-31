module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  useTabs: false,
  printWidth: 80,
  htmlWhitespaceSensitivity: "strict",
  singleAttributePerLine: true,
  bracketSpacing: true,
  editorconfig: false,
  bracketSameLine: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  arrowParens: "always",
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: "auto",
  requirePragma: false,
  insertPragma: false,
  endOfLine: "lf",
  pluginSearchDirs: ["."],
  overrides: [
    {
      files: "*.gohtml",
      options: { parser: "html" },
    },
    {
      files: "*.gojson",
      options: { parser: "json" },
    },
    {
      files: "*.goyaml",
      options: { parser: "yaml" },
    },
    {
      files: "*.goyml",
      options: { parser: "yaml" },
    },
    {
      files: "*.gomd",
      options: { parser: "markdown" },
    },
    {
      files: "*.gojson5",
      options: { parser: "json5" },
    },
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
        svelteStrictMode: false,
        svelteSortOrder: "options-styles-scripts-markup",
        svelteAllowShorthand: true,
        svelteBracketNewLine: true,
        svelteIndentScriptAndStyle: true,
      },
    },
  ],
};
