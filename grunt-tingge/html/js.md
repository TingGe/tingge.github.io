[TOC]

> “一套单页面应用，任何 path 访问都是服务端渲染、然后客户端路由，既解决 seo 问题，又解决渲染问题和前后端分离问题，并且为未来的 [progresive web app](https://www.w3.org/2016/Talks/xq-0709-10th/) 做准备。套上 servie worker 就具有离线功能。所以，从前端开发者长期受益来看，放弃 node 是弊大于利的。”—— 语自 @[携程-工业聚](https://github.com/Lucifier129)
>
> “集市” 和“大教堂”之争，推动着前端这个大生态的繁荣和演进。我把这个过程，总结为 “工程实践 + 标准化 => JavaScript 生态”。

1. [匠心之路](https://github.com/TingGe/develop-tools/)
2. [我的前端技能路线图](/grunt-tingge/img/frontend.png)


## Web 前端

> 至今，没有最佳实践，大家对同一个问题通常有不同解法。这是 library 相对于 framework 的劣势。
> 目前，主流的三大框架 React系、Angular 2系、Vue系 在相互融合。其他类似框架或局部功能替代类库不足成事。

|                                | 技术                                       | React系(Webpack+ React + Redux)           | Progressive  Web  App | 微信小应用 | 支付宝小程序 |
| ------------------------------ | ---------------------------------------- | ---------------------------------------- | --------------------- | ----- | ------ |
| JS 编译器                         | TypeScript、[Flow](https://flowtype.org/)、[CoffeeScript](http://coffeescript.org/) | Babel + ES6                              |                       |       |        |
| CSS 预处理                        | [Scss/Sass](http://sass-lang.com)、[Less](http://lesscss.org)、[Stylus](http://learnboost.github.com/stylus) | sass-loader、[style-loader](https://github.com/webpack-contrib/style-loader)、[css-modules](https://github.com/css-modules/css-modules)、[styled-components](https://github.com/styled-components/styled-components)、[cssnano](https://github.com/ben-eb/cssnano) |                       |       |        |
| CSS 后处理                        | [PostCSS](http://postcss.org/)、[uncss](https://github.com/giakki/uncss)、[Critical](https://github.com/addyosmani/critical)、[CSSO](https://github.com/css/csso) |                                          |                       |       |        |
| web UI                         | [Semantic UI](https://semantic-ui.com/)、[Masonry](http://masonry.desandro.com/)、[Bootstrap](http://getbootstrap.com/)、[Fuel UX](http://getfuelux.com/)、[Ratchet](http://goratchet.com/)、[Foundation](http://foundation.zurb.com/)、[Materialize](http://www.materialscss.com/)、[Material-UI](http://www.material-ui.com/)、[Angular Material](https://material.angularjs.org/latest/) | [Ant-design](http://ant.design/)、Fusion Design（Next/Mext）、[UXCore](https://github.com/uxcore/uxcore)、[Material-UI](https://github.com/callemall/material-ui)、[Semantic-UI-React](https://github.com/Semantic-Org/Semantic-UI-React)、[Blueprint](https://github.com/palantir/blueprint)、[React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap)、[React-Toolbox](https://github.com/react-toolbox/react-toolbox/)、[Grommet](https://github.com/grommet/grommet)、[Fabric](https://github.com/OfficeDev/office-ui-fabric-react)、[React-md](https://github.com/mlaursen/react-md)、[hyperapp](https://github.com/hyperapp/hyperapp)、[React Desktop](https://github.com/gabrielbull/react-desktop)、 |                       |       |        |
| UI 组件                          | [spectrum](https://github.com/bgrins/spectrum)(Colorpicker)、[jquery-qrcode](https://github.com/jeromeetienne/jquery-qrcode)、[chosen](https://github.com/harvesthq/chosen/)、[CodeMirror](https://github.com/codemirror/codemirror)、 [jPicker](http://johndyer.name/photoshop-like-javascript-color-picker/)、[paginationjs](https://github.com/superRaytin/paginationjs)、[lz-string](https://github.com/pieroxy/lz-string/)、[PapaParse](https://github.com/mholt/PapaParse)、[particles.js](https://github.com/VincentGarreau/particles.js)、[handsontable](https://github.com/handsontable) | [react-color](https://github.com/casesandberg/react-color)、[React-Grid-Layout](https://github.com/STRML/react-grid-layout)、[fixed-data-table](https://github.com/facebook/fixed-data-table)、[fixed-data-table-2](https://github.com/schrodinger/fixed-data-table-2)、[react-virtualized](https://github.com/bvaughn/react-virtualized)、react-transitive-number、 ckeditor、 echarts、 react-list、 sortablejs |                       |       |        |
| Shim                           | [es6-shim](https://github.com/paulmillr/es6-shim)、[es5-shim.js](https://github.com/es-shims/es5-shim/) |                                          |                       |       |        |
| Polyfill                       | [reflect-metadata](https://github.com/rbuckton/ReflectDecorators) | babel-polyfill、 ima.js-babel6-polyfill   |                       |       |        |
| DOM库                           | zepto、jQuery、                            | react-dom                                |                       |       |        |
| HTML 5兼容旧浏览器                   | [html5shiv](https://github.com/aFarkas/html5shiv)、[object-observe](https://github.com/MaxArt2501/object-observe)（Object.observe polyfill）、 |                                          |                       |       |        |
| 多点触摸手势库                        | [Hammerjs](http://hammerjs.github.io/)、[jGestures](http://jgestures.codeplex.com/)、 | [react-hammerjs](https://github.com/JedWatson/react-hammerjs) |                       |       |        |
| 工具库                            | lodash、underscore、[LZMA-JS](https://github.com/nmrugg/LZMA-JS/)、[crypto-js](https://github.com/brix/crypto-js)、[Tether](http://tether.io/)、[PinYin](https://github.com/hotoo/pinyin)、Moment、[Numeral](https://github.com/adamwdraper/Numeral-js)、[humanize](https://github.com/taijinlee/humanize)、[Cleave.js](http://nosir.github.io/cleave.js/)（格式化）、[Mousetrap](https://github.com/ccampbell/mousetrap)、[flat](https://github.com/hughsk/flat)、setRafTimeout | [react-cookie](https://github.com/thereactivestack/react-cookie)、[react-qart](https://github.com/BatuhanK/react-qart)、[classnames](https://github.com/JedWatson/classnames)、[glamorous](https://github.com/paypal/glamorous)、[glamor](https://github.com/threepointone/glamor)、[localForage](https://github.com/localForage/localForage)、d3-format、[prismjs](https://github.com/PrismJS/prism)、[react-sizeme](https://github.com/ctrlplusb/react-sizeme)、[clipboard](https://www.npmjs.com/package/clipboard)、 detector、 pubsub-js、 query-string、 react-dropzone、 react-motion、 react-scroll |                       |       |        |
| 模版引擎                           | pug、Handlebars、Mustache、[doT](http://olado.github.io/doT/index.html) |                                          |                       |       |        |
| 异步Task跟踪，分析，错误记录、开发调试跟踪等       | [zone.js](https://github.com/angular/zone.js) |                                          |                       |       |        |
| 模块化                            | ES6 Modules、Browserify（CommonJS）、RequireJS（AMD）、SeaJS（CMD）、KMD.js（KMD）、[systemjs](https://github.com/systemjs/systemjs) |                                          |                       |       |        |
| UI 层轻量级解决方案                    | Vue、Inferno、Preact                       | React、[React VR](https://facebookincubator.github.io/react-vr/) |                       |       |        |
| MV* 框架(路由、数据获取、状态管理)           | Angular、[Aurelia](http://aurelia.io/)、Avalon、Ember |                                          |                       |       |        |
| Pure Render                    |                                          | pure-render-decorator（建议废弃 react-addons-pure-render-mixin、 react-mixin） |                       |       |        |
| 动画                             |                                          | react-transition-group（建议废弃 react-addons-transition-group） |                       |       |        |
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
> MVVM 双向绑定、Virtual DOM，都是为解决直接操作 DOM 的“性能墙”。
>
> 传统的 DOM 操作是直接在 DOM 上操作的，当需要修改一系列元素中的值时，就会直接对 DOM 进行操作。而采用 Virtual DOM 则会对需要修改的 DOM 进行比较（DIFF），从而只选择需要修改的部分。也因此对于不需要大量修改 DOM 的应用来说，采用 Virtual DOM 并不会有优势。开发者就可以创建出可交互的 UI。

|                                 | 个人实例或说明                                  | 相关                                       |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- |
| React                           | [Github 中最流行的 JavaScript 项目（react-test）](http://tingge.github.io/lab/react-test/index.html) | 模板生成器 [create-react-app](https://www.infoq.com/news/2016/07/create-react-app-cli-tool)、React boilerplate、[express-react-views](https://github.com/reactjs/express-react-views) |
| Vue                             | [Hacker news(vue-test)](/lab/vue-test/index.html) |                                          |
| Angular                         | [我的书柜（angular-book）](/lab/angular-book/index.html) |                                          |
| [Angular 2](../lab/quickstart/) | 其创建理念是声明式编程应该用于构建用户界面以及编写软件构建，而命令式编程非常适合来表示业务逻辑 |                                          |
| Aurelia                         |                                          |                                          |
| React-Native                    | 仅适用业务型场景                                 |                                          |

#### Web Components/Shadow DOM

> [模板](http://robdodson.me/html5-template-tag-introduction/)、[HTML引入](http://robdodson.me/exploring-html-imports/)和 [Shadow DOM](http://www.html5rocks.com/zh/tutorials/webcomponents/shadowdom-201/)（[简介](http://www.ituring.com.cn/article/177453)、[基础](http://www.ituring.com.cn/article/177461)、[样式](http://www.ituring.com.cn/article/177570)、[样式续](http://www.ituring.com.cn/article/177653)），所有这些技术的终极目标就是**自定义元素（custom elements）**。
>
> 使用 shadow DOM 的时候应该确保内容和表现的分离。

1. [webcomponentsjs](http://webcomponents.org/)
2. [Polymer](https://www.polymer-project.org/)

### 可视化

> 专题 [data-visualization](https://github.com/TingGe/data-visualization) 

1. [JavaScript应用领域（d3-test）](/lab/d3-test/index.html)

### 工程化/工作流

> 专题 [匠心之路—工具](https://github.com/TingGe/develop-tools#工具)

1. [rollup-test](https://github.com/TingGe/tingge.github.io/tree/master/lab/rollup-test)
2. [broccoli-babel-test](https://tingge.github.io/lab/broccoli-babel-test/dist/index.html)
3. [grunt-babel-test](https://tingge.github.io/lab/grunt-babel-test/dist/index.html)
4. [phantomjs-test](https://github.com/TingGe/tingge.github.io/tree/master/lab/phantomjs-test)
5. [nightmare-test](https://github.com/TingGe/tingge.github.io/tree/master/lab/nightmare-test)

### 状态管理

数据状态大致分为：

- domain-state 领域模型，比如user，order
- ui-state 纯 UI 状态，比如一个弹窗的开闭，tab 是否 active
- aspect-state 指一些切面，比如 redux-simple-router 需要在根 reducer上有个“routing”结点，redux-form 也需要自己的结点

|                               | 说明                                       |
| ----------------------------- | ---------------------------------------- |
| [Redux](http://redux.js.org/) | 解决 component -> action -> reducer -> state 单向数据流转问题。特点可预测、可扩展。 |

### 数据加载器

> GraphQL 与 REST

|                                          | 说明                                       | 相关   |
| ---------------------------------------- | ---------------------------------------- | ---- |
| [Relay](http://facebook.github.io/relay/) | 采用 GraphQL，用于构建数据驱动的 React 应用程序的 JavaScript 框架 |      |
| [tectonic](https://github.com/tonyhb/tectonic) | React 和 Redux 的声明性 REST 数据加载器            |      |

## 通用（Universal）JavaScript

> Nodejs 目前主流的应用场景在于**中间层：**通过node进行模版渲染，处理部分业务逻辑。而真正的后端， 由专业的后端处理。
>
> 个人建议： “Koa2 + Sequelize”的组合是不错的选择。另，Next.js 也值得一试。

| 框架                                       | 说明                                       | 相关                                       |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [Next.js](https://github.com/zeit/next.js/) | 通用 JavaScript 应用程序，基于 React，Webpack 和 Babel | 快速创建支持服务端渲染的 React 应用的命令行辅助工具 [create-next-app](https://open.segment.com/create-next-app) |
| [Electrode](http://www.electrode.io/)    |                                          |                                          |
| [React Server](https://react-server.io/) |                                          |                                          |
| [Universal Angular 2](https://github.com/angular/universal) | Angular 2                                |                                          |
| [Fastboot](https://ember-fastboot.com/)  | Ember                                    |                                          |

### 快速构建应用的工具包(Toolkit)

| 工具包                                      | 组合内容                    |
| ---------------------------------------- | :---------------------- |
| [VulcanJS](https://github.com/VulcanJS/Vulcan) | React, GraphQL & Meteor |

### Node.js 模块

| 模块                                       | 说明                     |
| ---------------------------------------- | ---------------------- |
| [vm2](https://github.com/patriksimek/vm2) | 虚拟模块                   |
| [Hello.js](https://adodson.com/hello.js/) | 基于 OAuth 的浏览器端用户认证 SDK |
| [Sharp](https://github.com/lovell/sharp) | 图像调整模块                 |

### Web 服务 && RESTful API

> Node.js 一类的反应堆模式，不太适合做复杂的事务型业务。

| 服务端框架                                    | 说明                                       | 个人小示例                                    | 相关   |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---- |
| [Koa2](https://github.com/koajs/koa/tree/v2.x) | 借 babel 通过 async/await 来支持 ES6+          | [koa2-spider](https://github.com/TingGe/web-spiders) |      |
| Koa                                      | 通过 co 生成器支持 ES6                          | [koa-app](https://github.com/TingGe/tingge.github.io/tree/master/lab/koa-app) |      |
| [Hapi](http://hapijs.com/)               | 「配置大于约定」，业务逻辑必须和传输层进行分离                  | [hapi-app](https://github.com/TingGe/tingge.github.io/tree/master/lab/hapi-app) |      |
| Feathers                                 |                                          |                                          |      |
| Now                                      | “微服务”                                    |                                          |      |
| [expressjs5-app](https://github.com/TingGe/tingge.github.io/tree/master/lab/expressjs5-app) | 社区生态完善。[Express.js 黑历史](http://clonn.blogspot.com/2016/04/expressjs-express.html)后，IBM 过度干预，使 [Douglas Wilson](https://github.com/dougwilson) 在16年3月退出 5，个人建议转其它 |                                          |      |
| [Express](https://github.com/expressjs/express) |                                          |                                          |      |
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

## 数据库

| 类别            | 数据库                                      | 特点                                      | 应用场景          |
| ------------- | ---------------------------------------- | --------------------------------------- | ------------- |
| SQL           | [MySQL](http://dev.mysql.com/downloads/mysql/) |                                         | 分析            |
|               | [PostgreSQL](https://www.postgresql.org/download/) |                                         |               |
|               | [SQLite](https://www.sqlite.org/download.html) |                                         |               |
| NoSQL         | [Cassandra](http://cassandra.apache.org/) | 列存储（Wide Column Store/Column-Family）数据库 | 日志；博客平台       |
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
- [ShadowDOM Visualizer](http://html5-demos.appspot.com/static/shadowdom-visualizer/index.html)
- [HTML's New Template Tag](http://www.html5rocks.com/zh/tutorials/webcomponents/template/)
- [HTML5 Template Tag: Introduction](http://robdodson.me/html5-template-tag-introduction/)
- [Exploring HTML Imports](http://robdodson.me/exploring-html-imports/)
- [Shadow DOM CSS Cheat Sheet](http://robdodson.me/shadow-dom-css-cheat-sheet/)
