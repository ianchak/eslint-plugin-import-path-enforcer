# eslint-plugin-import-path-enforcer

ESLint plugin to enforce relative and absolute import paths.

## Installation

You'll first need to install [ESLint](https://eslint.org):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-import-path-enforcer`:

```sh
npm install eslint-plugin-import-path-enforcer --save-dev
```

## Usage

Add plugin to your eslint config file:

```
plugins: ['import-path-enforcer']
```

Add rules that you need:

```
rules: {
  'import-path-enforcer/same-package-import': ["error", "shared/package/directory", "@local"],
  'import-path-enforcer/external-package-import': ["error", "shared/package/directory", "@local"]
}
```

You can configure the shared package directory path. This should be defined relative to the projects root directory. (Fe.: "packages/@local")

You can also define the shortcut you use to reference this shared package directory in your imports.

## Rules

### import-path-enforcer/same-package-import

Enforces the use of absolute imports when importing from a different package.

**Supports autofix!**

### import-path-enforcer/external-package-import

Enforces the use of relative imports when importing inside the same package.
