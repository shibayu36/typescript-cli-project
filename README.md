# typescript-cli-project
This is a sample project to create a cli tool by TypeScript.

## How to install sample cli
```sh
$ npm run build
$ npm link
$ typescript-cli-project hoge
hoge
```

## How to create this project
Install dependencies.

```sh
# typescript
$ npm install --save-dev typescript @types/node
# webpack
$ npm install --save-dev webpack webpack-cli ts-loader
# eslint & prettier
$ npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-config-prettier eslint-plugin-prettier
```

Setup build configuration.  tsconfig.json, webpack.config.js, etc.

Setup eslint and prettier configuration.  .eslintrc.js and etc.
