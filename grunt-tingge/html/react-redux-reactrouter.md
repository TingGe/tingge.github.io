# 关于 React 系前端技术的思考

> 本文会持续更新。
>
> 最初文章地址在ATA社区《[关于 React 系前端技术的思考（上）](https://www.atatech.org/articles/90786)》和《[关于 React 系前端技术的思考（下）](https://www.atatech.org/articles/90787)》 

## 起因

最近，我和朋友聊到在用的一些前端技术。一番侃大山后，我感觉不妨将一些思考与各位前端或全栈开发者们分享和交流下。

所谓“侃”，大抵是面广而点到为止。请各位大牛们本着“历史最久的未必是最好的、宣传最凶的未必是合适的”实用精神，用心点评、多多指教。

## 背景和现状

我最近一年，参与的产品和项目的共同特征：数据型业务、企业级（Web 和 H5）应用。最常用 Table、Form、Chart 等组件。  因此，今天主要探讨这类场景的技术和解决方案。

技术上大致经历：

- 从16 年下半年的 React 系技术小试到后来踩过 “React + Redux + React Router ” 全家桶的各种坑；

- 从 Web 产品和钉钉 H5 微应用两种不同场景的研发与性能优化到前后端分离、组件化和SPA；

- 从 Webpack v1 到 v3 的构建工具升级到 Deer、Def、Just 和 Dawn 的探索；

- 从本机 Mock 数据到 RAP、Swagger 等前后端接口约定和接口对比验证的探索；

- 经历了 Fusion 和 Ant 两种不同 UI 解决方案的落地实践；

- 经历了 ECharts 和 G2 的图表可视化方案；

  ……

至今，我暂称为一套 React 系的单页面应用的前端技术吧。

### React 系单页面应用的前端技术

|                       | 选型                                       | 说明                                       |
| --------------------- | ---------------------------------------- | ---------------------------------------- |
| 开发语言                  | TypeScript                               |                                          |
| 格式规范                  | prettier、stylelint                       | 团队规范                                     |
| 构建                    | Webpack 3、ts-node                        | 只考虑现代浏览器，因此未选用构建效率较低的 babel。（Babel 生态中很多插件和预制分的足够细致，因此会造成一个项目依赖很多的情况） |
| 包管理                   | yarn                                     | 考虑到 lock version 稳定                      |
| 构建依赖包                 | node v8.0                                |                                          |
| Git hook              | lint-staged、husky                        |                                          |
| CSS 预处理               | [Sass](http://sass-lang.com/)、sass-loader、[style-loader](https://github.com/webpack-contrib/style-loader) | 有限制的使用层级，变量，函数，宏 ，禁止 extend              |
| web UI                | [Ant-design](http://ant.design/)         |                                          |
| UI 组件                 | 部分自研                                     |                                          |
| 图表                    | 部分自研                                     |                                          |
| 工具库                   | lodash、[classnames](https://github.com/JedWatson/classnames)、moment |                                          |
| View 层                | React                                    |                                          |
| 路由控制                  | [react-router](https://github.com/ReactTraining/react-router)、 react-redux、 react-router-redux |                                          |
| 异步 Action 和 Reducer 库 | Redux-Thunk                              |                                          |
| 应用状态管理                | Redux                                    | 降低样本代码的优良实践 [Dva](https://github.com/dvajs/dva)、[Kea](https://github.com/keajs/kea) 等 |
| 测试                    | 暂无                                       |                                          |

### 优良实践

1. 命令式生成常规列表和表单的 generater；
2. 保持团队代码风格和规范一致性：Code Review、开发工具插件保障和 precommit 矫正；
3. 沉淀出一些业务级或通用级的组件和工具库；
4. G11N 全球化实现方案。

### 痛点

- 样板代码较多。有没有更适合的，如 [Dva](https://github.com/dvajs/dva) 或其他？
- Mock 方案，造数成本较高。有没有结合 TypeScript 强类型约束，生成 Mock 数据的更优秀方案？

## 对未来的一些思考

在思考这篇中，我将以“如何做开源技术选型”的方法论来做指导。因此，在前端工程化、前端架构、组件化与分形、状态管理和关于 React 替代方案等具体方面会列出可选项，重在论证，不做直接结论。

### 如何做开源技术选型

> “我们认为，技术/功能在技术选型中的权重，可能只有四分之一”——出自 EAII 企业架构创新研究院宋潇男

在此，在尊重作者主旨的前提下，将《【详解】为什么选择Kubernetes作为云平台的微服务治理框架》中关于“开源技术选型”的内容稍作整理，供大家品鉴：

#### 技术/功能

技术/功能只是技术选型过程中需要考量的诸多维度中的一个，只要这些开源产品大体上能满足我们的需求，架构上没有明显的缺陷，开发语言和现有团队比较匹配、Roadmap 比较完善，就没什么大问题。

#### 项目的运作模式

开源项目的运作模式中，我们重点关注以下三点：

##### 1. 使用哪种开源 License

其中最重要的是 License。在很多技术人员的眼中，License 问题依然没有得到足够的重视。（对这个问题感兴趣的同学可以移步 [http://choosealicense.com/]() 查看各种开源License的差异。）

##### 2. 开发模式和测试模式

开发模式，值得关注，但是一般知名的开源项目，在开发模式上都不会有太大的问题，更重要的是测试模式。很多开源项目自身不重视测试，把填坑的事情丢给参与厂商，这种项目，如果贵司不是动不动就能派出几十人上百人的大厂，必须慎用。会认真做测试框架、定期发测试报告的项目，必须好评。

##### 3. 被一家公司掌控还是松散的社区决策？

项目运作是被一家公司掌控还是松散的社区决策，以前都说大教堂不如集市，那是因为以前大教堂基本上不搞开源，搞开源的大教堂和集市，就难说哪个好了，参与过 OpenStack 厂商扯皮的同学，应该对这个深有体会。

#### 技术提供者的产业背景

在项目技术提供者的产业背景中，我们重点关注以下三点：

1. 技术提供者的产业经验
2. 自己有没有大规模使用？
3. 是从自身需求沉淀出来的产品还是按设想的需求开发的产品？

现在都讲“吃自己的狗粮”，很多最为成功的产品，都是在自己内部的长期的、大规模的使用中反复锤炼，再发布给公众使用的，最好的例子就是 AWS 。从自身实际需求出发的、给自己做的产品，往往会比按设想需求出发的、给客户做的产品更好。所以我们往往更加青睐大型互联网公司释放出来的开源项目，比如 Netflix 的一系列开源项目。

#### 生态环境

在项目所处于的生态环境中，我们重点关注以下三点：

1. 技术和技术提供者在产业链中的位置
2. 与友商的合作/竞争关系
3. 是众望所归还是单打独斗？

互联网时代，没有生态、就等于没有未来。良好的合作、清晰的分工界面，会让项目得到更好的发展，总想占点上下游的便宜，动别人的奶酪，或者妄图以一己之力对抗全行业，当然也有成功的，但是概率真的很低。

#### 小结

以上是宋潇男关于开源技术选型的方法，大致从技术/功能、项目运作模式、技术提供者的产业背景和生态环境四个方面来综合考量。我想，结合加权评分法和德尔菲法或其他群体决策的方式，就可以得出以较严谨、科学的结论。

另外，此话题还可以引申出“何时自研 vs 选用开源技术”，我想，大概取决于整合资源的能力吧。

### 前端工程化

当下，主流的 React、Angular、Vue 前端框架各自形成了全家桶式开发方式。或许，成也萧何败也萧何吧。

前端工程化方面，大致还还处于类 creat-react-app 改造、各个群体基于 “commander + prompt + semver” 自研或相互学习、相互融合阶段。

#### 集团

| 集团内工具                                    | 个人点评                                     |
| ---------------------------------------- | ---------------------------------------- |
| Def                                      | 可谓大成，集成工程套件、云构建和插件市场于一体。                 |
| Just                                     | 本地开发工具，提供 CLI 命令行和 WebUI 两种使用形式。         |
| [Dawn](https://github.com/alibaba/dawn/blob/master/README-zh.md) | 通过 pipeline 和 middleware 抽象固化操作的开发构建工具；支持私有中心服务。 |

#### 开源社区

| 工具                                       | 个人点评                                     |
| ---------------------------------------- | ---------------------------------------- |
| [Yeamon](http://yeoman.io/)              | 开源的老牌工具，不过依赖 generators 也确实有些不错的实践。比如[这里](https://www.zhihu.com/question/58406043/answer/161501084)。 |
| [Ink](https://github.com/vadimdemedes/ink) | 严格来讲，它只是 React 风格写 Cli 罢了。不过作者提供了 [generator-ink-cli](https://github.com/vadimdemedes/generator-ink-cli)。我想，可能受 Yeamon 启发吧。 |

### 前端架构

[Micah Godbolt](https://micahgodbolt.com/) 的动物书《[前端架构设计](http://www.ituring.com.cn/book/tupubarticle/13637)》中阐述了以下两个点：

1. 前端架构的核心可概括为：代码、流程、测试、文档；
2. 前端架构师的主要职责：体系设计（描绘产品和代码最终形态）、工作规划（制定完整开发工作流）和监督跟进（保证项目高效率）。

那么，实际项目执行中如何实施呢？

以项目结构为例，在实际项目执行中，怎样的项目结构可以节约文件导航、便于重构和 Bug 修复呢？

答案很简单，基于特性进行组织。 如 [r-park/todo-react-redux](https://github.com/r-park/todo-react-redux) 中结构：

![r-park 中 todo-react-redux 示例](https://tingge.github.io/img/todo-react-redux.jpg)

当然，仅此还不够。 [Jack Hsu](https://github.com/jaysoo) 在《[Three Rules For Structuring (Redux) Applications](https://jaysoo.ca/2016/02/28/organizing-redux-application/)》中说，还要设计严格的模块边界，还要避免循环依赖。

以上述三个规则为尺，每隔段时间修一修项目中代码的坏味道。如此，便一切安好。

### 组合、分形与 Redux

> 如果子组件的结构和框架整体结构是相同的，这个单向架构就被称为是**分形的**。
>
> —— 摘自 《[单向用户接口架构](http://adoyle.me/blog/unidirectional-user-interface-architectures.html)》。原文《[Unidirectional User Interface Architectures](https://staltz.com/unidirectional-user-interface-architectures.html)》

彻底的可组合性 (composable) 的需求，引发了 Redux 中对于分形（Fractal）的各类实践。Redux 官方 [Issue 1528](https://github.com/reactjs/redux/issues/1528) 中提供了包括 [redux-loop](https://github.com/redux-loop/redux-loop)、[prism](https://github.com/salsita/prism) 等解决。另外，古老的 [React Redux Starter Kit](https://github.com/davezuko/) 项目中在 2017年3月30日也记录了一种不错的 [Fractal Project Structure](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) 实现方案。

### 状态管理

目前，状态管理大致分为两大类：基于 MDV (Model Driven View) 的 [Redux](http://redux.js.org/)、[MobX](https://github.com/mobxjs/mobx)、[Dob](https://github.com/ascoders/dob)，和基于 MVI (Model View Intent) 的 [RxJS 5](https://github.com/ReactiveX/RxJS)、[CycleJS](https://github.com/cyclejs/cyclejs) 和 [xstream](https://github.com/staltz/xstream) 等。

或许出于技术延续性和团队习惯的原因，我们主要在用 Redux 和 Dob。不过，说不定哪天会用上可以更灵活地操作数据流的 RxJS 5 一类吧。毕竟， Redux 在做数据关联查询时还是感觉不方便的。

### 关于 React 替代方案

2017年9月23日，Adam Wolff 以 [Relicensing React, Jest, Flow, and Immutable.js](https://code.facebook.com/posts/300798627056246) 宣告将 React 重新授权为 “MIT” 。

“BSD + Patents” 风波以称不上皆大欢喜的方式告一段落。或许，在防御专利流氓和帮助开源生态成长我们都有很长的路要走。

以下是前段时间调研的一些替代品：

| 类库                                       | 点评                                       |
| ---------------------------------------- | ---------------------------------------- |
| [Preact](https://preactjs.com/)          | [preact-compat](https://preactjs.com/guide/switching-to-preact) 兼容。缺点是有性能折损、对事件代理支持不足等问题。 |
| [Inferno](https://www.infernojs.org/)    | [inferno-compat](https://github.com/infernojs/inferno/tree/master/packages/inferno-compat) 兼容。 |
| [anu（又称 qreact）](https://github.com/RubyLouvre/anu) | [迁移成本低](https://rubylouvre.github.io/anu/install.html)。去哪儿司徒正美主力，基于 preact 改进，待观察。 |
| [react-lite](https://github.com/Lucifier129/react-lite) | 迁移成本低。携程工业聚主力，小有名气，待观察。                  |
| [Rax](https://alibaba.github.io/rax/)    | 迁移成本低。阿里的一个跨容器的渲染引擎。                     |

我个人感受是替代品在兼容性和 “Learn once, write everywhere” 上尚有欠缺。不过，在 H5 站点的场景，这些替代品值得一试。

### 前端报告

前端报告，是一个很容易被前端团队忽略的存在。然而，当我们用 [Google TestMySite](http://link.zhihu.com/?target=https%3A//testmysite.thinkwithgoogle.com/) 检测自己的站点时发现加载时间过长或者当我们思考前端未来走向时，你会发现一个可以快速生成且可靠的前端报告还是很有用的。

我在一些项目中用 [Webpack Bundle Analyzer](https://github.com/th0r/webpack-bundle-analyzer) 来做这件事。配合 Webpack 的 [DLLPlugin](https://doc.webpack-china.org/plugins/dll-plugin/) 或 [CommonsChunkPlugin](https://webpack.js.org/plugins/commons-chunk-plugin/) ，“嘿，兄弟！看我帮你优化掉多少个重复的代码/类库/组件 ！”

## 总结

随着产品或项目的不同阶段，我们在测试方案、分形、状态管理、前端报告等方面也在不断探索和成长。近期，我计划整合一套 [AVA](https://github.com/avajs/ava) 、[Enzyme](https://github.com/airbnb/enzyme) 和 [UIRecorder](https://github.com/alibaba/uirecorder) 的测试方案。后续分享，欢迎跟进。

期待与各位同学交流学习。

## 参考

此文受以下文章启发，在此表示感谢。如有侵权，请联系我删除。

- [【详解】为什么选择Kubernetes作为云平台的微服务治理框架](http://eaworld.io/post/20)
- [基于开源项目搭建属于自己的技术堆栈](https://mp.weixin.qq.com/s?__biz=MjM5OTM0MzIwMQ==&mid=2652552134&idx=1&sn=4b5f7e25ab0752098755115dde71eedd)
- [脚手架类的命令行工具用到了哪些技术?](https://www.zhihu.com/question/58406043/answers/created)
- [3 Lightweight React Alternatives: Preact, VirtualDom & Deku](https://www.sitepoint.com/react-alternatives-preact-virtualdom-deku/)
- [高性能迷你 React 框架 anu 发布](https://segmentfault.com/a/1190000009659319)
- [Hot Reloading in React](https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf)
- [单页应用的数据流方案探索](https://mp.weixin.qq.com/s?__biz=MzIwNjQwMzUwMQ==&mid=2247485159&idx=1&sn=7ae4b01c51532e37699a7e59b2aa940f)
- [大型高性能 React PWA 如何消除各类性能瓶颈？](https://mp.weixin.qq.com/s?__biz=MzIwNjQwMzUwMQ==&mid=2247485161&idx=1&sn=f32154a71f2a75dcecb3e63abf0b0204)
- [DEF 2.0 的想法](http://taobaofed.org/blog/2015/12/18/think-to-def/)
- [2017 年前端领域有哪些探索和实践?](https://mp.weixin.qq.com/s/hlutyDi20J6wzVedZ6gSWg)
- [【译】Redux + React 应用程序架构的 3 条规范（内附实例）](https://juejin.im/entry/577b85f62e958a00548f1799)
- [Redux 异步方案选型](https://segmentfault.com/a/1190000007248878)
- [单向用户接口架构](http://adoyle.me/blog/unidirectional-user-interface-architectures.html)
- [Fractal Project Structure](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure)