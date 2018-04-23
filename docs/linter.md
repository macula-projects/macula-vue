# Linter配置

本模板使用[ESLint](https://eslint.org/) 作为linter，并使用[Cenarius](https://www.npmjs.com/package/eslint-config-cenarius) 作为预置配置。

## eslint-plugin-vue

我们总是添加[eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)，它附带了大量有用的规则来编写一致的Vue组件 - 并且它也可以使用lint模板！

您可以在[github](https://github.com/vuejs/eslint-plugin-vue#gear-configs)上找到所有规则。我们选择了`essential` 配置，但我们建议您在熟悉这些配置后切换到更强大的`strongly-recommended` 或`recommended` 规则。

## 自定义

如果您对默认的规则不满意，您有以下几个选择：

1. 在`.eslintrc.js`中覆写规则。 例如，您可以添加以下规则以强制使用分号：

  ``` js
  // .eslintrc.js
  "semi": [2, "always"]
  ```

2. 生成项目时选择不同的ESLint预设，例如[eslint-config-cenarius-base](https://www.npmjs.com/package/eslint-config-cenarius-base)。

3. 生成项目时选择“none”，并定义自己的规则。 更多详细信息，请参见[ESLint文档](https://eslint.org/docs/rules/)。

## 修复Lint错误

您可以运行以下命令让eslint修复它找到的任何错误（并非所有错误都可以修复）：

```
npm run lint -- --fix
```

*（中间的`--`必须要有，这是为了确保`--fix`选项传递给`eslint`，而不是`npm`。使用yarn时可以省略）*
