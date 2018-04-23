# Babel配置

本模板使用[`babel-preset-env`]（https://www.npmjs.com/package/babel-preset-env）来配置babel。 你可以在以下链接阅读到更多相关信息 - http://2ality.com/2017/02/babel-preset-env.html。

> 通过自动根据您的目标浏览器或运行时环境来确定所需的 Babel plugin 和 polyfill，从而将 ES2015+ 编译为 ES5。

它使用[`browserslist`]（https://github.com/ai/browserslist）来解析这些信息，因此我们可以使用任何[browserslist`支持的有效查询格式](https://github.com/ai/browserslist#queries).

但是要注意。 `browserslist`建议像在`package.json`或者`.browserslistrc`配置文件中定义目标。 这允许像[`autoprefixer`]（https://github.com/postcss/autoprefixer）和[`eslint-plugin-compat`]（https://github.com/amilajack/eslint-plugin-compat）这样的工具共享配置。就这个这个模板而言，在`package.json`中配置`browserslist`：

```json
{
  "...": "...",
  "browserslist": [ 
    "> 1%",
    "last 2 versions", 
    "not ie <= 8"
  ]
}
```

但是`babel-preset-env`最新稳定版本，`v1.6.1`不支持从`package.json`加载配置。 所以目标环境在`.babelrc`中又重复了一遍。所以如果你想改变你的目标环境，请务必更新`package.json`和`.babelrc`。 请注意，beta版本中已经修复（[`@ babel/preset-env@7.0.0-beta.34`]（https://github.com/babel/babel/tree/master/packages/babel- preset-env））了这个问题，模板会持续跟进。

