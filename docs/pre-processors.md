# 预处理器

本模板配置了流行的CSS预处理器（包括LESS，Sass，Stylus和PostCSS）。 要使用预处理器，您只需为其安装相应的webpack loader即可。例如，要使用Sass：

``` bash
npm install sass-loader node-sass --save-dev
```

注意：你也需要安装`node-sass`，因为`sass-loader`依赖于它。

### 在组件里用预处理器

安装完成后，您可以在`* .vue`组件中使用`<style>`标签上的`lang`属性：

``` html
<style lang="scss">
/* write Sass! */
</style>
```

### Sass语法的一点提示

- `lang="scss"` 对应于CSS超集语法（带花括号和分号）。
- `lang="sass"` 对应于基于缩进的语法。

### PostCSS

`* .vue`文件和样式文件（`* .css`，`* .scss`等）默认使用PostCSS，因此您不需要使用特定的加载器。

您可以简单地将您想使用的PostCSS插件添加到项目根目录下的`.postcssrc.js`文件中：

``` js
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "autoprefixer": {}
  }
}
```

详细信息，请参阅[vue-loader's related documentation](http://vuejs.github.io/vue-loader/en/features/postcss.html)。

### 独立CSS文件

为确保提取和处理的一致，建议从根`App.vue`组件导入全局独立样式文件，例如：

``` html
<!-- App.vue -->
<style src="./styles/global.less" lang="less"></style>
```

请注意，您应该只对自己编写的样式执行此操作。 对于现有的库例如Bootstrap或Semantic UI，你可以把它们放在`/static`中，并直接在`index.html`中引用它们。这样避免了额外的构建时间，并且也更好利用浏览器缓存。（(参阅 [处理静态资源](static.md))