# 项目结构

``` bash
├── build/                      # webpack配置文件
│   └── ...
├── config/
│   ├── index.js                # 主项目配置
│   └── ...
├── src/
│   ├── main.js                 # app入口文件
│   ├── App.vue                 # 主页面
│   ├── components/             # ui组件
│   │   └── ...
│   └── assets/                 # 静态资源
│       └── ...
├── static/                     # 纯静态资源（直接复制）
├── test/
│   └── unit/                   # 单元测试
│   │   ├── specs/              # 测试规格文件
│   │   ├── eslintrc            # 用于eslint的配置文件，仅用于单元测试的额外设置
│   │   ├── index.js            # 测试生成入口文件
│   │   ├── jest.conf.js        # 使用Jest进行单元测试时配置文件
│   │   ├── karma.conf.js       # 当使用Karma进行单元测试时，测试运行器配置文件
│   │   └── setup.js            # 在Jest运行你的单元测试之前运行的文件
│   └── e2e/                    # e2e测试
│   │   ├── specs/              # 测试规格文件
│   │   ├── custom-assertions/  # 自定义e2e测试
│   │   ├── runner.js           # 测试run脚本
│   │   └── nightwatch.conf.js  # 测试运行器配置文件
├── .babelrc                    # babel配置
├── .editorconfig               # 缩进，空格、制表符和编辑器的类似设置
├── .eslintrc.js                # eslint配置
├── .eslintignore               # eslint忽略规则
├── .gitignore                  # git忽略规则
├── .postcssrc.js               # postcss配置
├── index.html                  # index.html模板
├── package.json                # 构建脚本和依赖关系
└── README.md                   # 默认的README文件
```

### `build/`

这个目录包含webpack开发环境和生产环境的配置。通常你不需要理会这些文件，除非你想自定义webpack loader，在这种情况下，你应该看看`build/webpack.base.conf.js`。

### `config/index.js`

这是为构建过程提供配置参数的配置文件。详情请看[开发期间的API代理](proxy.md) 和[集成后端](backend.md)。

### `src/`

这是你应用的代码所在。这个目录里的结构很大程度上取决于你自己。如果你使用Vuex，你可以看[recommendations for Vuex applications](http://vuex.vuejs.org/en/structure.html)。

### `static/`

这个目录是放你不想用Webpack处理的静态资源。当webpack打包的时候，他们会直接复制到相应的打包目录。
详情请看[处理静态资源](static.md)

### `test/unit`

包含单元测试相关文件，详情请看[单元测试](unit.md)。

### `test/e2e`

包含e2e测试相关文件，详情请看[端到端测试](e2e.md)。

### `index.html`

这个文件是单页面应用的入口文件，在开发和打包的时候，webpack会把所有资源生成的链接注入到这个模板渲染最终的html。

### `package.json`

这个文件包含所有依赖的NPM包和[构建命令](commands.md)。
