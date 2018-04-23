# 单元测试

本模板为单元测试提供2个选项：
1. Jest
2. Karma and Mocha.

## Jest

- [Jest](https://facebook.github.io/jest/)：用JSDOM跑测试用例并发送结果。

### 文件

- `setup.js`

  在Jest跑单元测试之前运行的文件。它把Vue的productionTip设为false。

### Mock依赖

Jest能力来源于mock依赖，更多详情看[mock functions guide](https://facebook.github.io/jest/docs/mock-functions.html)

## Karma and Mocha

- [Karma](https://karma-runner.github.io/): 启动浏览器，跑测试用例，发送结果。
- [karma-webpack](https://github.com/webpack/karma-webpack): karma的webpack插件。
- [Mocha](https://mochajs.org/): 编写测试用例的测试框架。
- [Chai](http://chaijs.com/): 提供更好的断言语法的测试断言库。
- [Sinon](http://sinonjs.org/): 提供spie,stub和mock的测试工具库。
[karma-sinon-chai](https://github.com/kmees/karma-sinon-chai)整合了Chai和Sinon，所以在测试文件中所有Chai接口(`should`, `expect`, `assert`)和`sinon`全局可用。

### 文件

- `index.js`

  它是`karma-webpack`的入口文件，用来打包测试代码和源代码，大部分情况下你可以忽略它。

- `specs/`

  他是你写真实测试用例的地方。你可以在测试中使用ES2015+以及所有的webpack loader。

- `karma.conf.js`

  这是Karma配置文件，通过[Karma docs](https://karma-runner.github.io/)获取详细信息。

### 在更多浏览器中跑测试

你可以通过安装更多的[karma launchers](https://karma-runner.github.io/1.0/config/browsers.html)来达到在大量真实的浏览器上运行测试用例的目的，然后在`test/unit/karma.conf.js`文件里调整`browsers`字段。

### Mock依赖

Karma单元测试模板默认安装了[inject-loader](https://github.com/plasticine/inject-loader)。有关`*.vue`组件的用法，请参见[vue-loader docs on testing with mocks](http://vue-loader.vuejs.org/en/workflow/testing-with-mocks.html).