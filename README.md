alipay vue
========

> 蚂蚁金服小程序(alipay hybrid) 基于 vuejs 的 template

运行部分截图

![-1](https://cloud.githubusercontent.com/assets/3281438/20875749/229daa5e-baf8-11e6-9639-070af8dae030.jpg)

## 使用方法

```
yarn install
建议使用 [yarn](https://yarnpkg.com/)
```

```
yarn run start # 开发模式
yarn run build # 构建文件
```
npm run start 会启动一个 http server,
打开网址  http://127.0.0.1:8989/ 进行开发调试，浏览器会自动刷新

## Promise

* [小程序介绍](https://myapp.alipay.com/hybrid/app_meta_rules.html)
* `npm start` 用来开启server，必须为`8989`端口
* `npm run build` 用来构建，构建后文件放在`dist`目录下
* 依赖 `Webpack2` `Vue2`
* 可维护 易扩展 效率高

## High Quality Resources

* [flex.css](https://github.com/lzxb/flex.css) Flex 布局

* [Mint UI](http://mint-ui.github.io/docs/#!/zh-cn2) 饿了么团队推出精品移动端组件，酌情考虑引用部分组件。详见alipay小程序native [jsApi](https://myapp.alipay.com/jsapi/ui/toast.html)实现

* [Vue Lazyload](https://github.com/hilongjw/vue-lazyload) 图片懒加载

* [awesome-vue](https://github.com/vuejs/awesome-vue) Vue资源社区

* 注意
建议不要引用 [vue-router](https://github.com/vuejs/vue-router) 插件，详见[窗口控制技巧](https://myapp.alipay.com/cases/nav-skill.html)

## component communication

* [event hub](https://cn.vuejs.org/v2/guide/migration.html#dispatch-和-broadcast-替换) 简易组件通信方案

* [Vuex](https://vuex.vuejs.org/zh-cn/) 复杂组件通信方案

* [vue 通信方案总结参考阅读](https://segmentfault.com/a/1190000007131605)

## 项目目录结构

````bash
src                           // 源文件目录，`npm run dev`阶段会监听此目录下的文件变动
│
├── assets                    // 存放 样式、字体文件和图片等 公共静态资源
│   ├── css/
│   ├── font/
│   ├── images/
│   └── ../                   // 根据实际项目可分配 media、svg等资源目录
│
├── components                // 存放 Component 文件的目录, 可以在组件内部管理自己的html结构、样式和逻辑和静态资源
│   ├── header                // 组件范例
│   │   ├── logo.png
│   │   └── header.vue
│   └── ../                   // 其他组件 search、nav、tab、list、footer
│
├── utils                     // 公共方法 可能会在多个地方调用到的公共方法，按照不同的功能归类成多个js文件，放在util中
│   ├── bridge.js
│   └── ../                   // 网络请求相关（ajax）、浏览器环境检测（detect）、数据统计（track)
│
├── static                    // 第三方公共资源
│   └── ../                   // 栅格系统(grid)、字体图标(icon-fonts)、动画样式(animate)
│
├── pages                     // 多页面，页面切换方式推荐 [pushWindow](https://myapp.alipay.com/cases/hybrid-skill.html#开发技巧)
│   ├── index/
│   │   ├── index.html
│   │   ├── main.js           // 打包工具会遍历mian.js作为入口文件
│   │   ├── logo.png
│   │   └── component.vue     // 总有一些组件是特殊对待的
│   └── ../                   // 首页(index)，列表页(list)，用户管理(user)
│
│
├── 下面目录根据实际情况酌情添加 ──
├── filters                   // 过滤器
├── directives                // 指令
├── services                  // api服务层
└── vuex                      // [Vuex应用结构](https://github.com/vuejs/vuex/blob/1.0/docs/zh-cn/structure.md)
````

## 编码规范
本脚手架使用 [standard](http://standardjs.com/rules.html) 编码风格。 默认 2 空格缩进，禁用分号，字符串单引号优先。

* build 构建线上代码时会禁用 alert 和 debugger，dev 模式下不禁止
* 如果希望对规则进行更改，可调整 .eslintrc.js。 以允许使用分号为例：

```
'semi': 2 // 2 为 error，1 为 warning, 0 为不检测， 重启 npm 生效
```

* 希望跳过部分文件检测，可配置 .eslintignore, 语法和 .gitignore 一致

## 技能点
详见 [SKILLS.md](SKILLS.md)
