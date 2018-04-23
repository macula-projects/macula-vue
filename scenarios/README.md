## 这个文件夹干嘛的?

此文件夹包含CircleCI的自动测试的测试场景。

每个`.json`文件都包含一个对象，它代表了vue-cli在安装模板时询问用户的一组问题的答案。

使用`index.js`中的代码，我们将这些答案插入metalsmith元数据中，并跳过查询问题，从而使我们能够在CI中运行不同的测试场景，而无需实际提供任何查询者的答案或mock它。

## 场景

我们目前有3个场景设置：

1. 'minimal'：它基本上回答“不”，它没有路由，没有eslint，没有测试
2. “full”：它对每个选择都回答“是”。使用路由，使用lint强制版，使用全面测试（jest＆e2e）
3. 'full-karma-cenarius-base'：像'full'一样，但是使用lint强制版代替进阶版，使用karma代替jest。

## 如何使用?

通过设置名为`VUE_TEMPL_TEST`的ENV变量来选择场景。

您可以通过在终端中运行此脚本来运行场景：

```
VUE_TEMPL_TEST=minimal vue init webpack your-directory
```
