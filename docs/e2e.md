# 端到端测试

本模板使用[Nightwatch.js](http://nightwatchjs.org)进行e2e测试。 Nightwatch.js是在Selenium之上构建，与e2e测试运行器高度集成。本模板自带Selenium服务器和chromedriver二进制文件，因此您不必自己琢磨它们。

我们来看看`test/e2e`目录里的文件：

- `runner.js`

  启动开发服务器的Node.js脚本，然后启动Nightwatch以对其运行测试。这是运行`npm run e2e`时将运行的脚本。

- `nightwatch.conf.js`

  Nightwatch配置文件。 更多详细信息，请参阅[Nightwatch配置](http://nightwatchjs.org/gettingstarted#settings-file)。

- `custom-assertions/`

  可以在Nightwatch测试中使用自定义断言。 更多详细信息，请参见[编写自定义断言的Nightwatch](http://nightwatchjs.org/guide#writing-custom-assertions)。

- `specs/`

  你的实际测试！更多详细信息，请参阅[编写Nightwatch测试](http://nightwatchjs.org/guide#writing-tests)和[API参考](http://nightwatchjs.org/api)。

### 在更多浏览器中跑测试

要配置运行测试的浏览器，请在[`test/e2e/nightwatch.conf.js`](https://github.com/vuejs-templates/webpack/blob/master/template/test/e2e/nightwatch.conf.js#L17-L39)中的“test_settings”下添加一个条目，以及在[`test/e2e/runner.js`](https://github.com/vuejs-templates/webpack/blob/master/template/test/e2e/runner.js#L15)中增加`--env`标志。 如果你想配置像SauceLabs这样的远程测试服务器，你可以根据环境变量配置Nightwatch，也可以使用一个单独的配置文件。 更多详细信息，请参阅[Selenium上的Nightwatch文档](http://nightwatchjs.org/guide#selenium-settings)。
