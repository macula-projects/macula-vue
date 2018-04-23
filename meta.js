const path = require('path')
const fs = require('fs')

const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')

const pkg = require('./package.json')

const templateVersion = pkg.version

const { addTestAnswers } = require('./scenarios')

module.exports = {
  metalsmith: {
    // When running tests for the template, this adds answers for the selected scenario
    before: addTestAnswers
  },
  helpers: {
    if_or(v1, v2, options) {

      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    template_version() {
      return templateVersion
    },
  },
  
  prompts: {
    name: {
      when: 'isNotTest',
      type: 'string',
      required: true,
      message: '项目名称',
    },
    description: {
      when: 'isNotTest',
      type: 'string',
      required: false,
      message: '项目描述',
      default: 'A Vue.js project',
    },
    author: {
      when: 'isNotTest',
      type: 'string',
      message: '作者',
    },
    build: {
      when: 'isNotTest',
      type: 'list',
      message: 'Vue build',
      choices: [
        {
          name: 'Runtime + Compiler: 推荐给大多数用户',
          value: 'standalone',
          short: 'standalone',
        },
        {
          name:
            'Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere',
          value: 'runtime',
          short: 'runtime',
        },
      ],
    },
    router: {
      when: 'isNotTest',
      type: 'confirm',
      message: '安装 vue-router ?',
    },
    auto_router: {
      when: 'isNotTest && router',
      type: 'confirm',
      message: '自动生成 vue-router 配置 ?'
    },
    layouts: {
      when: 'isNotTest && router',
      type: 'confirm',
      message: '支持 dynamic layout ?'
    },
    lint: {
      when: 'isNotTest',
      type: 'confirm',
      message: '使用 ESLint 检查代码 ?',
    },
    lintConfig: {
      when: 'isNotTest && lint',
      type: 'list',
      message: '选择一种 ESLint preset',
      choices: [
        {
          name: '进阶版 (https://iwiki.infinitus.com.cn/pages/viewpage.action?pageId=21348869)',
          value: 'cenarius',
          short: 'Cenarius',
        },
        {
          name: '强制版 (https://iwiki.infinitus.com.cn/pages/viewpage.action?pageId=21348863)',
          value: 'cenarius-base',
          short: 'Cenarius-base',
        },
        {
          name: 'none (自行配置)',
          value: 'none',
          short: 'none',
        },
      ],
    },
    unit: {
      when: 'isNotTest',
      type: 'confirm',
      message: '设置单元测试',
    },
    runner: {
      when: 'isNotTest && unit',
      type: 'list',
      message: '选择一种 test runner',
      choices: [
        {
          name: 'Jest',
          value: 'jest',
          short: 'jest',
        },
        {
          name: 'Karma and Mocha',
          value: 'karma',
          short: 'karma',
        },
        {
          name: 'none (自行配置)',
          value: 'noTest',
          short: 'noTest',
        },
      ],
    },
    e2e: {
      when: 'isNotTest',
      type: 'confirm',
      message: '使用 Nightwatch 进行 e2e 测试 ?',
    },
    ui_demo: {
      when: 'isNotTest && router && auto_router && layouts',
      type: 'list',
      message: '安装 ui demo ? (推荐)',
      choices: [
        {
          name: 'Yes, 使用 vant ui',
          value: 'vant',
          short: 'vant'               
        },
        {
          name: 'Yes, 使用 vux ui',
          value: 'vux',
          short: 'vux'
        },
        {
          name: 'No, 我自行搞定',
          value: false,
          short: 'no',
        }
      ]
    },
    autoInstall: {
      when: 'isNotTest',
      type: 'list',
      message:
        '项目创建后自动运行 `npm install` ? (推荐)',
      choices: [
        {
          name: 'Yes, 使用 NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'Yes, 使用 Yarn',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'No, 我自行搞定',
          value: false,
          short: 'no',
        },
      ],
    },
  },
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'build/webpack.test.conf.js': "unit && runner === 'karma'",
    'test/unit/**/*': 'unit',
    'test/unit/index.js': "unit && runner === 'karma'",
    'test/unit/jest.conf.js': "unit && runner === 'jest'",
    'test/unit/karma.conf.js': "unit && runner === 'karma'",
    'test/unit/specs/index.js': "unit && runner === 'karma'",
    'test/unit/setup.js': "unit && runner === 'jest'",
    'test/e2e/**/*': 'e2e',
    'src/modules/**/router/**/*': 'router',
    'build/template/router.js': 'router && auto_router',
    'src/modules/demo_vux/**/*': "router && auto_router && layouts && (ui_demo === 'vux')",
    'src/modules/demo_vant/**/*': "router && auto_router && layouts && (ui_demo === 'vant')",
    'src/plugins/layout.js': 'router && layouts',
    'src/modules/**/layouts/**/*': 'router && layouts'
  },
  complete: function(data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  },
}
