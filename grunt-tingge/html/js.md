[TOC]

> “一套单页面应用，任何 path 访问都是服务端渲染、然后客户端路由，既解决 seo 问题，又解决渲染问题和前后端分离问题，并且为未来的 [progresive web app](https://www.w3.org/2016/Talks/xq-0709-10th/) 做准备。套上 servie worker 就具有离线功能。所以，从前端开发者长期受益来看，放弃 node 是弊大于利的。”—— 语自 @[携程-工业聚](https://github.com/Lucifier129)
>
> “集市” 和“大教堂”之争，推动着前端这个大生态的繁荣和演进。我把这个过程，总结为 “工程实践 + 标准化 => JavaScript 生态”。

1. [匠心之路](https://github.com/TingGe/develop-tools/)
2. [关于 React 系前端技术的思考](https://tingge.github.io/html/react-redux-reactrouter.html)
3. [我的前端技能路线图](/grunt-tingge/img/frontend.png)


## Web 前端

> 至今，没有最佳实践，大家对同一个问题通常有不同解法。这是 library 相对于 framework 的劣势。
> 目前，主流的三大 FRP 框架 React系、Angular 2系、Vue系 在相互融合。其他类似框架或局部功能替代类库不足成事。

推荐的React设计模式、技术、技巧和窍门：[React Bits](https://vasanthk.gitbooks.io/react-bits/)

更多： [React.js 资料和教程](https://github.com/thoughtbit/it-note/issues/12)


|                                | 技术                                       | React系(Webpack+ React + Redux)           | Progressive  Web  App | 微信小应用 | 支付宝小程序 |
| ------------------------------ | ---------------------------------------- | ---------------------------------------- | --------------------- | ----- | ------ |
| JS 编译器                         | TypeScript、[Flow](https://flowtype.org/)、[CoffeeScript](http://coffeescript.org/) | Babel + ES6                              |                       |       |        |
| CSS 预处理                        | [Scss/Sass](http://sass-lang.com)、[Less](http://lesscss.org)、[Stylus](http://learnboost.github.com/stylus) | sass-loader、[style-loader](https://github.com/webpack-contrib/style-loader)、[css-modules](https://github.com/css-modules/css-modules)、[styled-components](https://github.com/styled-components/styled-components)、[cssnano](https://github.com/ben-eb/cssnano) |                       |       |        |
| CSS 后处理                        | [PostCSS](http://postcss.org/)、[uncss](https://github.com/giakki/uncss)、[Critical](https://github.com/addyosmani/critical)、[CSSO](https://github.com/css/csso) |                                          |                       |       |        |
| CSS 样式库                        | [CSSgram](https://github.com/una/CSSgram)（滤镜特效）、[You-Dont-Need-JavaScript](https://github.com/you-dont-need/You-Dont-Need-JavaScript)（UI 组件） |                                          |                       |       |        |
| web UI                         | [Semantic UI](https://semantic-ui.com/)、[Masonry](http://masonry.desandro.com/)、[Bootstrap](http://getbootstrap.com/)、[Fuel UX](http://getfuelux.com/)、[Ratchet](http://goratchet.com/)、[Materialize](http://www.materialscss.com/)、[Material-UI](http://www.material-ui.com/)、[Angular Material](https://material.angularjs.org/latest/)、[Bulma](https://github.com/jgthms/bulma)（基于Flexbox）、 [Grd](https://github.com/1000ch/grd) | [Ant-design](http://ant.design/)、Fusion Design（Next）、[UXCore](https://github.com/uxcore/uxcore)、[Material-UI](https://github.com/callemall/material-ui)、[Semantic-UI-React](https://github.com/Semantic-Org/Semantic-UI-React)、[Blueprint](https://github.com/palantir/blueprint)、[React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap)、[React-Toolbox](https://github.com/react-toolbox/react-toolbox/)、[Grommet](https://github.com/grommet/grommet)、[Fabric](https://github.com/OfficeDev/office-ui-fabric-react)、[React-md](https://github.com/mlaursen/react-md)、[hyperapp](https://github.com/hyperapp/hyperapp)、[React Desktop](https://github.com/gabrielbull/react-desktop)、 |                       |       |        |
| H5 UI                          | [SUI Mobile](http://sui.taobao.org/)、 [FrozenUI](http://frozenui.github.io/)、 [React-WeUI](https://github.com/weui/react-weui)、 [Framework7](https://framework7.io/)、[Phonon](http://phonon.quarkdev.com/)、[Foundation](http://foundation.zurb.com/)、[Material Foundation](https://eucalyptuss.github.io/material-foundation/) | Fusion Design（Mext）                      |                       |       |        |
| UI 组件                          | [spectrum](https://github.com/bgrins/spectrum)(Colorpicker)、[jquery-qrcode](https://github.com/jeromeetienne/jquery-qrcode)、[chosen](https://github.com/harvesthq/chosen/)、[CodeMirror](https://github.com/codemirror/codemirror)、 [jPicker](http://johndyer.name/photoshop-like-javascript-color-picker/)、[paginationjs](https://github.com/superRaytin/paginationjs)、[lz-string](https://github.com/pieroxy/lz-string/)、[PapaParse](https://github.com/mholt/PapaParse)、[particles.js](https://github.com/VincentGarreau/particles.js)、[handsontable](https://github.com/handsontable)、[ORY Editor](https://github.com/ory/editor)、[Trix](https://github.com/basecamp/trix)、[push.js](https://github.com/Nickersoft/push.js)、[zuck.js](https://github.com/ramon82/zuck.js) | [react-color](https://github.com/casesandberg/react-color)、[React-Grid-Layout](https://github.com/STRML/react-grid-layout)、[fixed-data-table](https://github.com/facebook/fixed-data-table)、[fixed-data-table-2](https://github.com/schrodinger/fixed-data-table-2)、[react-virtualized](https://github.com/bvaughn/react-virtualized)、react-transitive-number、 ckeditor、 echarts、 react-list、 sortablejs |                       |       |        |
| 后台管理模版                         | [Gentelella Admin](https://github.com/puikinsh/gentelella) |                                          |                       |       |        |
| Shim                           | [es6-shim](https://github.com/paulmillr/es6-shim)、[es5-shim.js](https://github.com/es-shims/es5-shim/) |                                          |                       |       |        |
| Polyfill                       | [reflect-metadata](https://github.com/rbuckton/ReflectDecorators) | babel-polyfill、 ima.js-babel6-polyfill、 regenerator-runtime/runtime（async wait 的 polyfill） |                       |       |        |
| DOM库                           | zepto、jQuery、                            | react-dom                                |                       |       |        |
| HTML 5兼容旧浏览器                   | [html5shiv](https://github.com/aFarkas/html5shiv)、[object-observe](https://github.com/MaxArt2501/object-observe)（Object.observe polyfill）、 [Feature.js](https://github.com/viljamis/feature.js) |                                          |                       |       |        |
| 多点触摸手势库                        | [Hammerjs](http://hammerjs.github.io/)、[jGestures](http://jgestures.codeplex.com/)、 | [react-hammerjs](https://github.com/JedWatson/react-hammerjs) |                       |       |        |
| 工具库                            | [ramdajs](http://ramdajs.com/)、lodash、underscore、[collect.js](https://github.com/ecrmnn/collect.js)、[LZMA-JS](https://github.com/nmrugg/LZMA-JS/)、[crypto-js](https://github.com/brix/crypto-js)、[Tether](http://tether.io/)、[PinYin](https://github.com/hotoo/pinyin)、Moment、[Numeral](https://github.com/adamwdraper/Numeral-js)、[humanize](https://github.com/taijinlee/humanize)、[Cleave.js](http://nosir.github.io/cleave.js/)（格式化）、[Mousetrap](https://github.com/ccampbell/mousetrap)、[flat](https://github.com/hughsk/flat)、setRafTimeout | [react-cookie](https://github.com/thereactivestack/react-cookie)、[react-qart](https://github.com/BatuhanK/react-qart)、[classnames](https://github.com/JedWatson/classnames)、[glamorous](https://github.com/paypal/glamorous)、[glamor](https://github.com/threepointone/glamor)、d3-format、[prismjs](https://github.com/PrismJS/prism)、[react-sizeme](https://github.com/ctrlplusb/react-sizeme)、[clipboard](https://www.npmjs.com/package/clipboard)、 detector、 pubsub-js、 query-string、 react-dropzone、 react-motion、 react-scroll、[react-flight](https://github.com/jondot/react-flight)、[highlight.js](https://www.npmjs.com/package/highlight.js)、[react-json-inspector](https://www.npmjs.com/package/react-json-inspector)、[source-map](https://www.npmjs.com/package/source-map) |                       |       |        |
| 模版引擎                           | pug、Handlebars、Mustache、[doT](http://olado.github.io/doT/index.html) |                                          |                       |       |        |
| 异步Task跟踪，分析，错误记录、开发调试跟踪等       | [zone.js](https://github.com/angular/zone.js) |                                          |                       |       |        |
| 模块化                            | ES6 Modules、Browserify（CommonJS）、RequireJS（AMD）、SeaJS（CMD）、KMD.js（KMD）、[systemjs](https://github.com/systemjs/systemjs) |                                          |                       |       |        |
| UI 层轻量级解决方案                    | Vue、Inferno、Preact                       | React、[React VR](https://facebookincubator.github.io/react-vr/) |                       |       |        |
| MV* 框架(路由、数据获取、状态管理)           | Angular、[Aurelia](http://aurelia.io/)、Avalon、Ember |                                          |                       |       |        |
| Pure Render                    |                                          | pure-render-decorator（建议废弃 react-addons-pure-render-mixin、 react-mixin） |                       |       |        |
| 动画                             |                                          | react-transition-group（建议废弃 react-addons-transition-group）、[rc-queue-anim](https://www.npmjs.com/package/rc-queue-anim)、[react-flight](https://github.com/jondot/react-flight) |                       |       |        |
| 表单验证                           |                                          | React 内置的 propTypes                      |                       |       |        |
| 路由控制，可选                        |                                          | [react-router](https://github.com/ReactTraining/react-router)、react-router-redux、[junctions](https://github.com/jamesknelson/junctions) |                       |       |        |
| 连接*React* 组件与 *Redux* store，可选 |                                          | [React-Redux](https://github.com/reactjs/react-redux) |                       |       |        |
| 中间件与异步操作                       | Async、Q                                  | [redux-thunk](https://github.com/gaearon/redux-thunk) |                       |       |        |
| 不可变数据结构                        |                                          | [Immutable.js](https://github.com/facebook/immutable-js/)、immutability-helper、seamless-immutable、  [mori](https://github.com/swannodette/mori)、[cortex](https://github.com/mquan/cortex) |                       |       |        |
| 应用状态管理                         | [ngrx/store](ngrx/store)                 | Redux（redux-promise/[redux-sequence-action](https://github.com/jasonslyvia/redux-sequence-action)）、[redux-immutablejs](https://github.com/indexiatech/redux-immutablejs) |                       |       |        |
| 静态网页生成器（SSG）                   | Gitlab pages、 Netlify、 Surge、 Now static、 Hexo、[Docsify](https://docsify.js.org/) | Gatsby                                   |                       |       |        |

### 模块化/组件化

#### Web MV*/Virtual DOM

> 基于组件（component-based）的构建方式。
>
> MVVM 双向绑定、Virtual DOM，都是为解决直接操作 DOM 的“性能墙”。也有人提出了质疑，比如前端框架 Turbine 的开发者直言 《[Why Turbine doesn't use virtual DOM](https://github.com/funkia/turbine/issues/32) 》
>
> 传统的 DOM 操作是直接在 DOM 上操作的，当需要修改一系列元素中的值时，就会直接对 DOM 进行操作。而采用 Virtual DOM 则会对需要修改的 DOM 进行比较（DIFF），从而只选择需要修改的部分。也因此对于不需要大量修改 DOM 的应用来说，采用 Virtual DOM 并不会有优势。开发者就可以创建出可交互的 UI。

|                                       | 说明                                       | 个人实例                                     | 相关                                       | 探讨     |
| ------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ------ |
| React                                 |                                          | [Github 中最流行的 JavaScript 项目（react-test）](http://tingge.github.io/lab/react-test/index.html) | 模板生成器 [create-react-app](https://www.infoq.com/news/2016/07/create-react-app-cli-tool)、React boilerplate、[express-react-views](https://github.com/reactjs/express-react-views)、 [React Express](http://github.com/dabbott/react-express) | 组件和分形？ |
| Vue                                   |                                          | [Hacker news(vue-test)](/lab/vue-test/index.html) |                                          |        |
| [Moon](https://github.com/kbrsh/moon) | 类 Vue                                    |                                          |                                          |        |
| Angular                               |                                          | [我的书柜（angular-book）](/lab/angular-book/index.html) |                                          |        |
| [Angular 2](../lab/quickstart/)       | 其创建理念是声明式编程应该用于构建用户界面以及编写软件构建，而命令式编程非常适合来表示业务逻辑 |                                          |                                          |        |
| Aurelia                               |                                          |                                          |                                          |        |
| React-Native                          | 仅适用业务型场景                                 |                                          |                                          |        |

#### Web Components/Shadow DOM

> [模板](http://robdodson.me/html5-template-tag-introduction/)、[HTML引入](http://robdodson.me/exploring-html-imports/)和 [Shadow DOM](http://www.html5rocks.com/zh/tutorials/webcomponents/shadowdom-201/)（[简介](http://www.ituring.com.cn/article/177453)、[基础](http://www.ituring.com.cn/article/177461)、[样式](http://www.ituring.com.cn/article/177570)、[样式续](http://www.ituring.com.cn/article/177653)），所有这些技术的终极目标就是**自定义元素（custom elements）**。
>
> 使用 shadow DOM 的时候应该确保内容和表现的分离。

1. [webcomponentsjs](http://webcomponents.org/)
2. [Polymer](https://www.polymer-project.org/)

### 可视化

> 专题 [data-visualization](https://github.com/TingGe/data-visualization)

1. [JavaScript应用领域（d3-test）](/lab/d3-test/index.html)
2. [heatmap.js](https://www.npmjs.com/package/heatmap.js)：Web 的动态 JavaScript 热图
3. recharts

### 工程化/工作流

> 专题 [匠心之路—工具](https://github.com/TingGe/develop-tools#工具)

1. [rollup-test](https://github.com/TingGe/tingge.github.io/tree/master/lab/rollup-test)
2. [broccoli-babel-test](https://tingge.github.io/lab/broccoli-babel-test/dist/index.html)
3. [grunt-babel-test](https://tingge.github.io/lab/grunt-babel-test/dist/index.html)
4. [phantomjs-test](https://github.com/TingGe/tingge.github.io/tree/master/lab/phantomjs-test)
5. [nightmare-test](https://github.com/TingGe/tingge.github.io/tree/master/lab/nightmare-test)

### 状态管理

> `不要把应用的逻辑和数据结构耦合在一起`——取自《Clean Architecture》

数据状态可分为：

- domain-state 领域模型，比如user，order
- ui-state 纯 UI 状态，比如一个弹窗的开闭，tab 是否 active
- aspect-state 指一些切面，比如 redux-simple-router 需要在根 reducer上有个“routing”结点，redux-form 也需要自己的结点

#### MDV（Model Driven View）

公式： `V = f(M)`。

Redux 可表述为 `state := actions.reduce(reducer, initState)`

|                                        | 说明                                       | 探讨     |
| -------------------------------------- | ---------------------------------------- | ------ |
| [Redux](http://redux.js.org/)          | 优点：单一store；通过Action 触发、Reducer 中操作数据； 单向数据流（Component -> Action -> Middleware -> Reducer -> State）。特点可预测、可扩展。缺点：数据关联查询时，还是感觉不方便 | 分组与管理？ |
| [MobX](https://github.com/mobxjs/mobx) | 通过透明的函数响应式编程(transparently applying functional reactive programming - TFRP) 使状态管理简单、可扩展 |        |

#### MVI（Model View Intent）

MVI 基于 Reactive 理念。相关：数据管道。解读：

- Intent，负责从外部的输入中，提取出所需信息；
- Model，负责从Intent生成视图展示所需的数据；
- View，负责根据视图数据渲染视图。

提取为公式：`App := View(Model(Intent({ DOM, Http, WebSocket })))`

|         | 说明         |
| ------- | ---------- |
| RxJS    | 为处理异步操作而设计 |
| CycleJS |            |
| xstream |            |

### React 和 Redux 之上的前端Web应用开发架构

> 关于 View 和状态机的最佳实践，是大多前端团队当下的主旋律。当然，选型是不会限于 React 和 Redux 的。

|                                     | 说明                              |
| ----------------------------------- | ------------------------------- |
| [Kea](https://github.com/keajs/kea) | 构建 React 和 Redux 之上的前端Web应用开发架构 |

### 数据结构可变&不可变

> 可变和不可变是数据结构的属性，而不是语言的。

关于此话题，可以参考《前端精读周刊》的  [Immutable 结构共享是如何实现的？](https://github.com/dt-fe/weekly/issues/14)

#### 可变（Mutable）

可变（Mutable）数据耦合了 Time 和 Value 的概念。

单线程场景： 例如 JavaScript 对象本身可变。通常用 shallowCopy（浅拷贝）或 deepCopy（深拷贝）来规避被修改。缺点是造成了 CPU 和内存的浪费。

并发场景：如 Java 采用并发锁、Immutable Object 模式等方式来实现结构不可变。

|                       | 说明                  |      |
| --------------------- | ------------------- | ---- |
| lodash                | deepCopy, mergeWith |      |
| Object.freeze、const 等 |                     |      |

#### 不可变（Imutable）

> React 系实践中，Pure Render + Immutable.js 搭配。非常适合数据状态为多层嵌套的场景。

另外，也有些语言如 Clojure 则是原子上不可变的。其原理是 Persistent Data Structure（持久化数据结构），并通过 Structural Sharing（结构共享）来优化性能。

- 其内部使用 Trie 数据结构存储，只要两个对象的 `hashCode` 相等，值就是一样的。这样的算法避免了深度遍历比较，性能非常好。
- 通常，结构共享与不可变数据结构相关联，但它也适用于结构上不可变的对象。

|                                          | 说明                                       |      |
| ---------------------------------------- | ---------------------------------------- | ---- |
| [Immutable.js](https://github.com/facebook/immutable-js/) |                                          |      |
| immutability-helper                      |                                          |      |
| [redux-immutablejs](https://github.com/indexiatech/redux-immutablejs) |                                          |      |
| seamless-immutable                       | 只支持 Array 和 Object 两种数据类型                |      |
| [mori](https://github.com/swannodette/mori) | 把`ClojureScript`里持久化数据结构的API支持带到了`JavaScript`里 |      |
| [cortex](https://github.com/mquan/cortex) |                                          |      |

### 数据范式/扁平化

|           | 说明   |
| --------- | ---- |
| normalizr |      |

### 数据加载器

> GraphQL 与 REST

|                                          | 说明                                       | 相关   |
| ---------------------------------------- | ---------------------------------------- | ---- |
| [Relay](http://facebook.github.io/relay/) | 采用 GraphQL，用于构建数据驱动的 React 应用程序的 JavaScript 框架 |      |
| [tectonic](https://github.com/tonyhb/tectonic) | React 和 Redux 的声明性 REST 数据加载器            |      |

### PWA

- [UpUp](https://github.com/TalAter/UpUp)
- ​

## 本地存储

> 离线访问是一套优秀 Web App 的必经之路。

### 浏览器提供

#### 本地存储

| 类别        | 技术                           | 相关   |
| --------- | ---------------------------- | ---- |
| 键值对 (KVP) | Local Storage、Session Sorage |      |
| 数据库组织型    | IndexedDB、Web SQL            |      |

#### 应用缓存

> HTML5 使用 [ApplicationCache](http://www.whatwg.org/specs/web-apps/current-work/#applicationcache) 接口解决了由离线带来的部分难题。

| 组成                      | 说明                                       | 示例                                       |
| ----------------------- | ---------------------------------------- | ---------------------------------------- |
| `<html>`的`manifest`属性   | 缓存文件清单。必须以`text/cache-manifest MIME`类型提供。注意：需在服务器上配置自定义文件类型。 | 页面中`<html manifest="https://tingge.github.io/cache.mf">`；服务(以Apache为例)中`AddType text/cache-manifest .appcache` |
| window.applicationCache | 更新缓存                                     |                                          |
|                         | AppCache 事件                              |                                          |

JS框架的实践

| 框架                                       | 说明                                       | 特点        |
| ---------------------------------------- | ---------------------------------------- | --------- |
| [localForage](https://github.com/localForage/localForage) | [Mozilla](https://www.mozilla.org/en-US/) 出品，将本地存储操作 API 封装成了键值对 (KVP)风格 | 简单，拿来即用   |
| [lovefield](https://github.com/google/lovefield) | 谷歌出品的，为 Web App 提供 SQL-like APIs 服务的本地关系型数据库 | 关联查询等能力较强 |

## 通用 JavaScript（Universal JS）

> Nodejs 目前主流的应用场景在于**中间层：**通过node进行模版渲染，处理部分业务逻辑。而真正的后端， 由专业的后端处理。
>
> 个人建议： UniversalJS 目前只是一种边际场景。推荐“Koa2 + Sequelize”的组合。另 Next.js 也值得一试。

| 框架                                       | 说明                                       | 相关                                       |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [Next.js](https://github.com/zeit/next.js/) | 通用 JavaScript 应用程序，基于 React，Webpack 和 Babel | 快速创建支持服务端渲染的 React 应用的命令行辅助工具 [create-next-app](https://open.segment.com/create-next-app) |
| [Electrode](http://www.electrode.io/)    |                                          |                                          |
| [React Server](https://react-server.io/) |                                          |                                          |
| [Universal Angular 2](https://github.com/angular/universal) | Angular 2                                |                                          |
| [Fastboot](https://ember-fastboot.com/)  | Ember                                    |                                          |
| [Hypernova](https://github.com/airbnb/hypernova) | Airbnb 推出的一种 Universal JS 方案             |                                          |

### 快速构建应用的工具包(Toolkit)

| 工具包                                      | 组合内容                    |
| ---------------------------------------- | :---------------------- |
| [VulcanJS](https://github.com/VulcanJS/Vulcan) | React, GraphQL & Meteor |

### Node.js 模块

| 模块                                       | 说明                                       |
| ---------------------------------------- | ---------------------------------------- |
| os                                       | Node.js 工具模块，提供一些基本的系统操作函数               |
| [co](https://github.com/tj/co)           | 用同步写法编写异步代码                              |
| [json-logic-js](https://www.npmjs.com/package/json-logic-js) | 构建复杂的规则，将它们序列化为 JSON，并在 JavaScript 中执行它们 |
| [mathjs](https://www.npmjs.com/package/mathjs) | 一个数学库                                    |
| [ejs](https://www.npmjs.com/package/ejs) | 嵌入式的 JavaScript 引擎                       |
| [enums](https://www.npmjs.com/package/enums) | 兼容 java 的枚举                              |
| [node-schedule](https://www.npmjs.com/package/node-schedule) | 类 Cron 和非类 Cron 的定时任务                    |
| [nodemailer](https://www.npmjs.com/package/nodemailer) | 邮件发送模块                                   |
| [request](https://www.npmjs.com/package/request) | 简化的HTTP请求的客户端                            |
| [svg2png](https://www.npmjs.com/package/svg2png) | 转换 svg 为 png                             |
| [vm2](https://github.com/patriksimek/vm2) | 虚拟模块                                     |
| [Hello.js](https://adodson.com/hello.js/) | 基于 OAuth 的浏览器端用户认证 SDK                   |
| [Sharp](https://github.com/lovell/sharp) | 图像调整模块                                   |
| [AdonisJS](https://adonisjs.com/)        | **服务端渲染** 的 MVC 框架， Laravel 的 NodeJS 版   |
| csvtojson                                | csv 数据转 json                             |
| prompt                                   | 命令行提醒                                    |
| commander                                | 提供了用户命令行输入和参数解析强大功能                      |
| semver                                   | 语义化版本规则                                  |

### Web 服务 && RESTful API

> Node.js 一类的反应堆模式，不太适合做复杂的事务型业务。

| 服务端框架                                    | 说明                                       | 个人小示例                                    | 相关   |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---- |
| [Egg](https://eggjs.org/)                | 基于 Node.js 和 Koa 的企业级框架                  |                                          |      |
| [Koa2](https://github.com/koajs/koa/tree/v2.x) | 借 babel 通过 async/await 来支持 ES6+          | [koa2-spider](https://github.com/TingGe/web-spiders) |      |
| Koa                                      | 通过 co 生成器支持 ES6                          | [koa-app](https://github.com/TingGe/tingge.github.io/tree/master/lab/koa-app) |      |
| [Hapi](http://hapijs.com/)               | 「配置大于约定」，业务逻辑必须和传输层进行分离                  | [hapi-app](https://github.com/TingGe/tingge.github.io/tree/master/lab/hapi-app) |      |
| Feathers                                 |                                          |                                          |      |
| Now                                      | “微服务”                                    |                                          |      |
| [Nodal](https://github.com/keithwhor/nodal) | 用来创建基于 PostgreSQL 的无状态的、分布式的服务           |                                          |      |
| [expressjs5-app](https://github.com/TingGe/tingge.github.io/tree/master/lab/expressjs5-app) | 社区生态完善。[Express.js 黑历史](http://clonn.blogspot.com/2016/04/expressjs-express.html)后，IBM 过度干预，使 [Douglas Wilson](https://github.com/dougwilson) 在16年3月退出 5，个人建议转其它 |                                          |      |
| [Express](https://github.com/expressjs/express) | 一个路由和中间件 Web 框架，其自身只具有最低程度的功能            |                                          |      |
| Nodal                                    |                                          |                                          |      |
| [Keystone](https://github.com/keystonejs/keystone) | 以 Express 和 MongoDB 为基础搭建的 Node.js CMS 和 web 应用程序平台 |                                          |      |
| [Loopback](https://github.com/strongloop/loopback) | 集“Express ＋ ORM ＋ RESTFul API”于一体的后端解决方案。 关联查询有些坑，个人建议转其它 |                                          |      |
| [DataLoader](https://github.com/facebook/dataloader) | 一个通用工具。可用作应用程序数据提取层的一部分，为各种后端提供一致 API，并通过批处理和缓存减少对后端的请求。 |                                          |      |
| [Restify](http://restify.com/)           | 仅是 API 服务，可观测 Http 应用的延迟、特征等             |                                          |      |

### 实时服务

1. [horizon-app](https://github.com/TingGe/tingge.github.io/tree/master/lab/horizon-app)
2. [meteor-test](https://github.com/TingGe/tingge.github.io/tree/master/lab/meteor-test)

### 数据库 Node 框架

> 与业务场景对应，数据库分为**事务型**和**分析型**。
>
> 一般 “ORM + SQL” 或 “SQL 客户端 + SQL” 组合，来满足常规规模应用。当流量大到数据库扛不住时，加入 MQ 服务。
>
> 事务是恢复和并发控制的基本单位，保证 **ACID**：原子性、一致性、隔离性、持久性。

#### ORM

| 库                                        |                                          |
| ---------------------------------------- | ---------------------------------------- |
| [Sequelize](https://github.com/sequelize/sequelize) | 提供对 MySQL，MariaDB，SQLite ，PostgreSQL 和 MSSQL 数据库的简单访问 |

#### SQL

| 客户端/驱动                                   | 说明                                       |
| ---------------------------------------- | ---------------------------------------- |
| [mysql](https://github.com/mysqljs/mysql) | 一个纯 javascript 实现的 nodejs 的 MySQL 客户端程序。MySQL 引擎比较好 |
| [node-postgres](https://github.com/brianc/node-postgres) | 一个支持纯 JavaScript 和本地 libpq 库绑定的 nodejs 的 PostgreSQL 客户端程序。个人感觉这个更好用点 |
| [pg-promise](https://github.com/vitaly-t/pg-promise) | PostgreSQL 的 Promises/A+ 接口              |
| [sqlite3](https://github.com/mapbox/node-sqlite3) | SQLite  小、应用于移动端                         |
| [hbase-client](https://www.npmjs.com/package/hbase-client) | Node.js的异步HBase客户端                       |

#### NoSQL

| 客户端/驱动                                   | 说明                                       |
| ---------------------------------------- | ---------------------------------------- |
| [cassandra-driver](https://github.com/datastax/nodejs-driver) | Cassandra 便于扩张                           |
| [redis](https://github.com/NodeRedis/node_redis) | Redis 一般缓存、读写快                           |
| [Mongoose](https://github.com/LearnBoost/mongoose) | MongoDB ODM（对象模型工具），即将 MongoDB 中数据转换为 JavaScript 对象以供在应用中使用 |
| [mongodb](https://github.com/mongodb/node-mongodb-native) | Mongo DB  原生的 NodeJS 驱动                  |
| [nano](https://github.com/dscape/nano)   | 最简约的 CouchDB 客户端                         |
| level、[levelup](https://github.com/rvagg/node-levelup) 和 leveldown | LevelDB                                  |
| [apoc](https://github.com/hacksparrow/apoc) | Neo4j                                    |

#### 分布式

> 分布式的 [CAP](https://zh.wikipedia.org/wiki/CAP%E5%AE%9A%E7%90%86) 理论，任何一个分布式系统无法同时满足 Consistency (一致性)、Availability (可用性) 和 Partition tolerance (分区容错性)。
>
> 其中， Consistency 是任何一个系统都不能放弃的，**分布式事务**亦是为了保证数据一致性，有时为了妥协另外两个特性，会放弃**强一致性**，来保证**最终一致性**。

| Node.js /浏览器 客户端库                        | 对应的查询引擎                    |
| ---------------------------------------- | -------------------------- |
| [presto-client-node](https://github.com/tagomoris/presto-client-node) | 分布式查询引擎 Presto             |
| [elasticsearch](https://github.com/elastic/elasticsearch-js) | RESTful 搜索引擎 ElasticSearch |
| [druid-query](https://www.npmjs.com/package/druid-query) | 分布式实时处理系统 Druid            |

## 数据库

| 类别            | 数据库                                      | 特点                                      | 应用场景          |
| ------------- | ---------------------------------------- | --------------------------------------- | ------------- |
| SQL           | [MySQL](http://dev.mysql.com/downloads/mysql/) |                                         | 分析            |
|               | [PostgreSQL](https://www.postgresql.org/download/) |                                         |               |
|               | [SQLite](https://www.sqlite.org/download.html) |                                         |               |
| NoSQL         | [Cassandra](http://cassandra.apache.org/) | 列存储（Wide Column Store/Column-Family）数据库 | 日志；博客平台       |
|               | [HBase](https://github.com/apache/hbase) | 分布式的、面向列的开源数据库                          |               |
|               | [Redis](http://redis.io/download)        | 键值（Key-Value）数据库                        | 储存用户信息        |
|               | [MongoDB](https://www.mongodb.com/download-center) | 面向文档（Document-Oriented）数据库              | 日志；分析         |
|               | [Azure DocumentDB](https://docs.microsoft.com/zh-cn/azure/documentdb/) | 一个完全托管的 NoSQL 数据库服务                     |               |
|               | [CouchDB](http://couchdb.apache.org/)    | 同 MongoDB                               | 同 MongoDB     |
|               | [LevelDB](http://leveldb.org/)           |                                         |               |
|               | [Neo4j](https://neo4j.com/download/)     | 图（Graph-Oriented）数据库                    | 关系性强的数据； 推荐引擎 |
| 分布式查询引擎       | Presto                                   |                                         |               |
| 实时的分布式搜索和分析引擎 | [ElasticSearch](https://www.elastic.co/downloads) | 面向文档的数据库                                | 大数据；实时监控      |
| 分布式实时处理系统     | [Druid](http://druid.io/)                | 列存储，分布式                                 |               |

## 研发基础平台

1. [部署私有 Docker Registry 服务](docker-registry.html)
2. [Docker 中搭建 GitLab服务器](docker-gitlab.html)
3. Nginx
4. LDAP

## 附录

### 趋势

- [Front-End Developer Handbook 2017](https://frontendmasters.gitbooks.io/front-end-handbook-2017/)

### 计算机视觉库

- [tracking.js](https://github.com/eduardolundgren/tracking.js/)：

### NodeJS

- [Node.js 解析](nodejs.html)
- [NodeJS 错误处理最佳实践](https://cnodejs.org/topic/55714dfac4e7fbea6e9a2e5d)
- [10个常见的Node.js面试题](http://www.admin10000.com/document/6715.html)

### 浏览器

- [Chrome 开发者控制台中，你可能意想不到的功能](http://mp.weixin.qq.com/s/EqRfLbuta7RU5jePJCCWAg)
- [Facebook Yoga 跨平台的前端布局引擎](https://github.com/facebook/yoga)
- [浏览器内核的解析和对比](http://www.cnblogs.com/fullhouse/archive/2011/12/19/2293455.html)

### HTML & 性能 & CSS

- [Web 性能](web-performance.html)
- [JavaScript 启动性能瓶颈分析与解决方案](http://mp.weixin.qq.com/s/E_f0MzFFFAgtgISExBbp5w)
- [下一代 Web 应用模型 —— Progressive Web App](http://geek.csdn.net/news/detail/135595)
- [HTML 5](html5.html)
- [移动端适配方案](http://ybshare.coding.io/share/flexible.htm)。大致思路是：[flexible.js](https://github.com/amfe/lib-flexible) 或 [metahandler.js](https://github.com/unbug/generator-webappstarter/blob/master/app/templates/app/src/util/MetaHandler.js?utm_source=tuicool&utm_medium=referral)
- [Houdini：CSS 领域最令人振奋的革新](http://mp.weixin.qq.com/s?__biz=MzAwNTAzMjcxNg==&mid=2651424725&idx=1&sn=c19801bf880556470bb21f8af0cb0225)
- [前端开发中的一些黑魔法Pt2](http://www.w3cplus.com/css/dirty-tricks-dark-corners-front-end-pt2.html)
- [Sass绘制多边形](http://www.w3cplus.com/preprocessor/creat-css-polygon-wiht-border-and-clip-path-property.html)
- [CSS布局之-水平垂直居中](http://div.io/topic/1155)
- [H5项目常见问题汇总及解决方案](http://www.open-open.com/lib/view/open1449325854077.html)
- [应用缓存初级使用指南](https://www.html5rocks.com/zh/tutorials/appcache/beginner/#toc-updating-cache)
- [检查和管理存储、数据库与缓存](https://developers.google.com/web/tools/chrome-devtools/manage-data/local-storage?hl=zh-cn)

### React & Angular & Vue

- [手把手教你基于ES6架构自己的React Boilerplate项目](http://jiji262.github.io/2016/04/29/create-your-own-react-boilerplate/)
- [Create React App](https://www.npmjs.com/package/react-scripts)：一个 Facebook 的React Boilerplate项目
- [让React组件变得可响应](http://mp.weixin.qq.com/s?__biz=MzIwNjQwMzUwMQ==&mid=2247483973&idx=1&sn=01bcd0a60e8cfa0b93f4e82c7d21a677)
- [复杂单页应用的数据层设计](http://mp.weixin.qq.com/s/P9pZDvu7Zp8SkXvbWIHoHw)
- [christianalfoni - Why we are doing MVC and FLUX wrong](http://www.christianalfoni.com/articles/2015_08_02_Why-we-are-doing-MVC-and-FLUX-wrong)
- [Webpack — The Confusing Parts](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9)
- [webpack build可视化统计分析](http://www.iamaddy.net/2016/09/webpack-build-analyzing-statistics/)
- [Next.js提供了基于React的简单通用JavaScript框架](http://www.infoq.com/cn/news/2016/11/next-js-universal-react-framewor)
- [Angular 2 Keynote（September 27，2016）Slider](https://docs.google.com/presentation/d/13cALir2y7UtqrJZLzYPDidsV6OofJmamDqEMKNKz2P0/preview?slide=id.p)

### 原理剖析

- [深入理解React、Redux](http://www.jianshu.com/p/0e42799be566)
- [理解 redux 中间件](https://zhuanlan.zhihu.com/p/21391101)
- [On Structural Immutability](https://clojurefun.wordpress.com/2013/01/21/on-structural-immutability/)
- [Structural sharingand destructive modification](https://www.hexstreamsoft.com/articles/notes-tips-standard-common-lisp-symbols/themes/structural-sharing/)
- [js-structural-sharing](https://github.com/mperdikeas/js-structural-sharing)
- [ShadowDOM Visualizer](http://html5-demos.appspot.com/static/shadowdom-visualizer/index.html)
- [HTML's New Template Tag](http://www.html5rocks.com/zh/tutorials/webcomponents/template/)
- [HTML5 Template Tag: Introduction](http://robdodson.me/html5-template-tag-introduction/)
- [Exploring HTML Imports](http://robdodson.me/exploring-html-imports/)
- [Shadow DOM CSS Cheat Sheet](http://robdodson.me/shadow-dom-css-cheat-sheet/)
