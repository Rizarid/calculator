module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "airbnb-typescript",
    ],
    "overrides": [
        {
          "files": ["*.ts", "*.tsx"],
          "parserOptions": {
            "project": ["./tsconfig.json"],
          },
        }
      ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "parserOptions.project": true,
        "ecmaFeatures": {
            "jsx": true
        },
        "allowImportExportEverywhere": true,
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "import/prefer-default-export": "off",
        "react/function-component-definition": "off",
        "react/require-default-props": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "class-methods-use-this": "off"
    }
}
