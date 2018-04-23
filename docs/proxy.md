# 开发期间的API代理

我们通常会遇到开发时要访问后端API的需求。为此，我们可以并行（或远程）运行dev server和API后端，并让dev server代理所有API请求，访问实际的后端。

编辑`config/index.js`中的`dev.proxyTable`选项来配置代理规则。dev server使用[[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)进行代理，因此您应该参阅其文档以了解详细用法。这里有一个简单的例子：

``` js
// config/index.js
module.exports = {
  // ...
  dev: {
    proxyTable: {
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
```

上面的例子将代理请求`/api/posts/1`到`http//jsonplaceholder.typicode.com/posts/1`。

## URL匹配

除了静态URL之外，您还可以使用全局模式来匹配URL，例如`/api/**`。更多详细信息，请参见[Context Matching](https://github.com/chimurai/http-proxy-middleware#context-matching)。另外，您可以提供一个自定义函数的`filter`选项，以确定是否应该代理请求：

``` js
proxyTable: {
  '**': {
    target: 'http://jsonplaceholder.typicode.com',
    filter: function (pathname, req) {
      return pathname.match('^/api') && req.method === 'GET'
    }
  }
}
```
