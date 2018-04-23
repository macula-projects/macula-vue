# 环境变量

有时会根据应用程序运行的环境做不同的配置。

举个例子：

```js
// config/prod.env.js
module.exports = {
  NODE_ENV: '"production"',
  DEBUG_MODE: false,
  API_KEY: '"..."' // 所有环境共享
}

// config/dev.env.js
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEBUG_MODE: true // 覆盖prod.env中的DEBUG_MODE值
})

// config/test.env.js
module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})
```

> **注意：** 字符串变量需要被包裹成单引号和双引号`'“...”“`

所以，环境变量是：
- Production
    - NODE_ENV   = 'production',
    - DEBUG_MODE = false,
    - API_KEY    = '...'
- Development
    - NODE_ENV   = 'development',
    - DEBUG_MODE = true,
    - API_KEY    = '...'
- Testing
    - NODE_ENV   = 'testing',
    - DEBUG_MODE = true,
    - API_KEY    = '...'

如我们所见，`test.env`继承`dev.env`，`dev.env`继承`prod.env`。

### 使用

在代码中使用环境变量很简单。 例如：

```js
Vue.config.productionTip = process.env.NODE_ENV === 'production'
```
