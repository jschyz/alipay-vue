## Alipay hybrid 约定

* [小程序介绍](https://myapp.alipay.com/hybrid/index.html)
* `npm start` 用来开启server，必须为`8989`端口
* `npm run build` 用来构建，构建后文件放在`dist`目录下


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

## 优质 Vue Component

* [Mint UI](http://mint-ui.github.io/docs/#!/zh-cn2) 饿了么团队推出精品移动端组件，酌情考虑引用部分组件。详见alipay小程序native [jsApi](https://myapp.alipay.com/jsapi/ui/toast.html)实现

* [Vue Lazyload](https://github.com/hilongjw/vue-lazyload) 图片懒加载

#### 注意
建议不要引用 [vue-router](https://github.com/vuejs/vue-router) 插件，详见[窗口控制技巧](https://myapp.alipay.com/cases/nav-skill.html)

## Babel

Babel是下一代 JavaScript 语法的编译器。

入门教程请参考 阮一峰的[Babel 入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html)

Babel文档 [官网](http://babeljs.io/) [中文](http://babeljs.cn/)

## Eslint

ESLint是一个QA工具，用来避免低级错误和统一代码的风格。

代码风格规范请使用 [JavaScript Standard Style](https://github.com/feross/standard)

ESLint文档 [官网](http://eslint.org/) [中文](https://github.com/Jocs/ESLint_docs)
