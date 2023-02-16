/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  rules: {
    // Priority A: Essential
    // Priority B: Strongly Recommended 
    "vue/first-attribute-linebreak": ["error", {
      "singleline": "ignore",
      "multiline": "below"
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-closing-bracket-spacing": ["error", {
      "startTag": "never",
      "endTag": "never",
      "selfClosingTag": "always"
    }],
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 1
      },      
      "multiline": {
        "max": 1
      }
    }],
    "vue/singleline-html-element-content-newline": ["error", {
      "ignoreWhenNoAttributes": true,
      "ignoreWhenEmpty": true,
    }],
    "vue/v-bind-style": [0],
    "vue/v-on-style": [0],
    // Priority C: Recommended
    "vue/attributes-order": ["error", {
      "order": [
        "EVENTS",
        "GLOBAL",
        "OTHER_ATTR",
        "OTHER_DIRECTIVES",
        "LIST_RENDERING",
        "UNIQUE",
        "DEFINITION",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "SLOT",
        "TWO_WAY_BINDING",
        "CONTENT"
      ],
      "alphabetical": false
    }],
    "vue/component-tags-order": ["error", {
      "order": [ [ "template", "script" ], "style" ]
    }],
    // Uncategorized
    "vue/block-tag-newline": ["error", {
      "singleline": "always",
      "multiline": "always",
      "maxEmptyLines": 0,
    }],
    "vue/html-button-has-type": ["error", {
      "button": true,
      "submit": true,
      "reset": true
    }],
    "vue/no-restricted-static-attribute": ["error", "style"],
    "vue/no-restricted-v-bind": ["error", "style"],
    "vue/padding-line-between-blocks": ["error", "always"],
    "vue/max-len": ["error", {
      "code": 100,
      "template": 100,
      "tabWidth": 2,
      "comments": 80,
      "ignorePattern": "",
      "ignoreComments": true,
      "ignoreTrailingComments": false,
      "ignoreUrls": false,
      "ignoreStrings": false,
      "ignoreTemplateLiterals": false,
      "ignoreRegExpLiterals": false,
      "ignoreHTMLAttributeValues": false,
      "ignoreHTMLTextContents": false,
    }],
    "semi": ['error', 'always'],
    "max-lines": ["warn", {
      max: 100,
      skipComments: true,
    }],
  },
  ignorePatterns: [
    "dist/",
    "cypress/",
    ".eslintrc.cjs",
    "src/components/__tests__/",
    "*.d.ts",
    "cypress.config.ts",
    "vite.config.ts"
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
