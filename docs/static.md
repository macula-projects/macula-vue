# 处理静态资源

你会注意到项目结构有2个静态资源的目录：`src/assets` 和 `static/`，他们有什么区别？

### Webpacked资源

要回答这个问题，我们首先要理解webpack是怎么处理静态资源的。在`*.vue`组件中，所有template和css是用`vue-html-loader`和`css-loader`解析asset URL的。比如`<img src="./logo.png">`和`background: url(./logo.png)`, `"./logo.png"` 是一个相对路径，并且会被**webpack作为一个模块依赖**。

由于`logo.png`不是js文件，要作成模块依赖，我们需要用`url-loader`和 `file-loader`来处理它。本模板已经配置了这些loader，你可以用文件指纹和base64内联这些特性，同时使用相对路径而不必担心部署。

由于这些资源可能在构建过程中被内联/复制/重命名，因此它们基本上是源代码的一部分。这就是为什么建议将Webpack处理的静态资源和其他源文件放在`/src`里面的原因。 实际上，你甚至不需要把它们都放在`/src/assets`中：你可以根据使用到它们的模块/组件来组织它们。例如，您可以将每个组件放在其自己的目录中，并且其静态资源也至于其中。

### 资源解决规则

- **相对URL**，例如 `./assets/logo.png`将被解析为模块依赖项。它们将被替换为基于您的Webpack输出配置的自动生成的URL。

- **未加前缀的URL**，例如 `assets/logo.png`将被视为相对URL并解析成`./assets/logo.png`。

- **以`~`为前缀的URL**被视为模块请求，类似于`require（'some-module/image.png'）`。如果你想用到Webpack的模块解析配置，你需要使用这个前缀。例如，你有一个叫做`assets`的别名，那么你需要使用`<img src="~assets/logo.png">`。

- **根-相对URL**，例如 `/assets/logo.png`不会被处理。

### 在JS中获取资源路径

为了让Webpack返回正确的资源路径，您需要使用`require（'./relative/path/to/file.jpg'）`，它将被`file-loader`处理并返回解析后的URL。 例如：

``` js
computed: {
  background () {
    return require('./bgs/' + this.id + '.jpg')
  }
}
```

**请注意，上面的例子将包含`./bgs/`下的所有图像。**这是因为Webpack无法猜测它们在运行时会使用哪一个，所以它包含了所有的。

### "真"静态资源

相比之下，`static/`中的文件根本不会被Webpack处理：它们保持相同的文件名直接被复制到最终目的地。您必须使用绝对路径来引用这些文件，这是通过在`config.js`中加入`build.assetsPublicPath`和`build.assetsSubDirectory`来确定的。

示例：

``` js
// config/index.js
module.exports = {
  // ...
  build: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static'
  }
}
```

任何放在`static/`中的文件都应该使用绝对URL`/static/[filename]`来引用。 如果您将`assetSubDirectory`更改为`assets`，那么这些URL将需要更改为`/assets/[filename]`。

我们将在[集成后端](backend.md)中了解更多配置文件的相关信息。
