# 集成后端

如果你正在构建一个纯静态的app（一个与后端API分开部署的app），那么你可能不需要编辑`config/index.js`。 但是，如果您想将此模板与现有的后端框架集成，例如Rails/Django/Laravel这些会自带项目结构，您可以编辑`config/index.js`来生成前端资源到后端项目中。

我们来看看默认的`config/index.js`：

``` js
// config/index.js
'use strict'
const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost',
    port: 8080, 

    // skipping other options as they are only convenience features
  },
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    productionSourceMap: true,
    
    // skipping the rest ...
  },
}
```

在`build`部分中，我们有以下选项：

### `build.index`

>必须是本地文件系统上的绝对路径。

这就是生成'index.html`（带有资源注入URL）的地方。

如果您将此模板与后端框架一起使用，则可以相应地编辑`index.html`，并将此路径指向由后端文件，例如，用于Rails应用程序的`app/views/layouts/application.html.erb`，或用于Laravel应用程序的`resources/views/index.blade.php`。

### `build.assetsRoot`

>必须是本地文件系统上的绝对路径。

它指向app的所有静态资源的根目录。例如，Rails/Laravel两个的`public/`。

### `build.assetsSubDirectory`

在`build.assetsRoot`的这个目录下嵌入webpack生成的资源，这样它们就不会与`build.assetsRoot`中的其他文件混在一起。 例如，如果`build.assetsRoot`是`/path/to/dist`，并且`build.assetsSubDirectory`是`static`，那么所有Webpack资产都将在`path/to/dist/static`中生成。

该目录将在每次构建之前清除，因此它只应包含由build生成的资源。

在`static/`里面的文件将在构建过程中被原样复制到这个目录中。 这意味着如果你改变了这个前缀，所有你在`static/`中引用文件的绝对URL也需要改变。 有关更多详细信息，请参阅[处理 Static Assets](static.md)。

### `build.assetsPublicPath`

这是你的`build.assetsRoot`通过HTTP提供的URL路径。 在大多数情况下，这将是根路径（`/`）。 只有在后端框架为静态资源提供前缀时才更改此设置。 在内部，它作为`output.publicPath`传递给Webpack。

### `build.productionSourceMap`

是否为生产版本生成 source map。

### `dev.port`

指定开发服务器的侦听端口。

### `dev.proxyTable`

为dev服务器定义代理规则。 更多详细信息，请参阅[开发期间的API代理](proxy.md) 。
