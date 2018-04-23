# 为SEO做预渲染

如果你想预先渲染不常发生变化的路由，请使用这个Webpack插件：[prerender-spa-plugin](https://www.npmjs.com/package/prerender-spa-plugin)。 对于频繁更改的网页，[Prerender.io](https://prerender.io/)和[Netlify](https://www.netlify.com/pricing)都会为SEO提供定期预渲染。

## 使用`prerender-spa-plugin`

1. 将它作为开发依赖项：

```bash
npm install --save-dev prerender-spa-plugin
```

2. 在**build/webpack.prod.conf.js**中Require它：

```js
// This line should go at the top of the file where other 'imports' live in
const PrerenderSpaPlugin = require('prerender-spa-plugin')
```

3. 在`plugins`数组中配置它（也在**build/webpack.prod.conf.js**中）：

```js
new PrerenderSpaPlugin(
  // Path to compiled app
  path.join(__dirname, '../dist'),
  // List of endpoints you wish to prerender
  [ '/' ]
)
```

如果你还想预渲染`/about`和`/contact`，那么这个数组就是`[ '/', '/about', '/contact' ]`。

4. 启用`vue-router`的history mode：
```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```
