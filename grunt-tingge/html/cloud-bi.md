# 云商业智能(Cloud BI)

本文主要是我个人的一些思考，如需转载请标明[本文引用地址](/html/cloud-bi.html)和[听歌](/html/me.html)签名。资料采集自互联网，如有侵权，请联系我删除。

> 云BI产品和主要前端技术研究。

## 定义

> BI：Info = Fn(Data)

商业智能（Business Intelligence）——业界比较公认的说法是在1996年最早由[加特纳集团（Gartner Group）](http://www.gartner.com/technology/home.jsp)提出的一个商业概念，通过应用基于事实的支持系统来辅助商业决策的制定。商业智能技术提供使企业迅速分析数据的技术和方法，包括收集、管理和分析数据，将这些数据转化为有用的信息。——取自《白话大数据与机器学习》



从应用上来讲，它是一套完整的解决方案，用来将企业中现有的数据进行有效的整合，快速准确的提供报表并提出决策依据，帮助企业做出明智的业务经营决策。

BI的作用一方面是供**数据分析师**／数据管理者做业务分析（数据建模、分析和应用制作），另一方面提供**管理者**及时有效的数据支撑，降低决策难度（应用查看、邮件等）。

云商业智能(Cloud BI)在数据架构中处于前端分析的位置，其核心作用是对获取数据的多维度分析、数据的切片、数据的上钻和下钻、cube等。通过ETL数据抽取、转化形成一个完整的数据仓库、然后对数据仓库的数据进行抽取，而后是商业智能的前端分析和展示。

### 关键词

数据建模、数据源、数据集、OLAP、雪花模型、星型模型、多维分析、行、列、维度、度量、上卷、下钻、cube、Dashboard、Report

### 过程

数据分析：关键词**统计和概率**。在平时工作中用的统计大多为计数功能，如在使用Excel时会用到 COUNT、SUM、AVERAGE等统计函数；用SQL语言对数据库的某些字段进行计数（count）、求和（sum）、求平均（avg）等函数。而概率的应用大多则是根据样本的数量以及占比得到“可能性”和“分布比例”等描述数值。

## 产品

### 商业

#### 基于SaaS模式的商业智能解决方案

| 产品                                       | 特点                                       |
| ---------------------------------------- | ---------------------------------------- |
| Tableau Online                           | Tableau Server的托管版本，在网络浏览器或移动设备中使用交互式仪表板将每个人变成企业分析师。在评论信息中心可以分享信息，可订阅并定期获取更新 |
| QlikView和Qlik Customer Success Framework | 为企业提供人员，技术和服务，帮助企业逐步优化数据作为战略资源。QlikView使用自然分析来搜索和处理信息，作出洞察和决策 |
| Birst                                    | 提供完整的商业智能所需的所有组件，包括数据集成，ETL服务，分析，报告，计划和交付，所有这些都可通过订阅定价模式获得。主要功能包括通过SOC 2 II审核，ISO 27001，聚合，SQL优化，MPP列存储数据库和100%多租户架构的高性能分析以及单独部署的客户数据库实例 |
| SiSense                                  | 提供商业智能产品，包括由片内技术支持的后端技术，使非技术用户能够加入和分析来自多个来源的大型数据集，以及前端可视化创建(如仪表板和报告) |
| Kognitio Cloud                           | 一种安全的私有云平台即服务，利用云计算模型，Kognitio分析平台可以按固定期限每月支付运营成本。Kognitio Cloud为客户提供商业智能(BI)解决方案，以满足其日益增长的分析需求，而传统实施的成本只有一小部分 |
| Jaspersoft                               | AWS提供的云分析服务器，已经获得数百家从初创公司到财富500强公司的客户使用。 Jaspersoft的模块化，可扩展，基于标准的架构提供了在任何环境中轻松部署所需的灵活性。成本低到不到1美元/小时，可连接到RDS，Redshift和EMR等亚马逊数据源，10分钟内开始数据分析 |
| BIRT                                     | Actuate的SaaS产品，可在云中利用超过200GB的数据来完成商业智能分析，而且数据量每天都在增长，可广泛应用在各种各样的的设备，包括智能手机和平板电脑。BIRT的按需帐户预配置了来自亚马逊关系数据库服务RDS的数据存储，并包括安全数据传输工具以及与行业标准数据库的安全数据连接，包括日益流行的云数据源 |
| Bime                                     | 为只有浏览器的企业提供快速，简单和强大的商业智能。BIME允许在同一地点连接线上和企业内部，并创建与所有数据源的连接，创建和执行查询地图，关系分析，项目符号图表和数百个定制的仪表板等 |
| SAP Business Objects BI OnDemand         | 在软件即服务(SaaS)模型中提供了一个全面的商业智能解决方案，以实现业务的完整视图。 SAP BusinessObjects BI OnDemand在单一，直观的应用程序中通过自助服务BI和数据整合可为用户节省时间和成本。功能包括上传电子表格和/或将不同的数据源直接带入解决方案，利用软件的独特搜索和浏览功能探索数据的每个方面，创建准确，及时的仪表板和报告 |
| MicroStrategy Cloud                      | 将一流的企业BI，数据库分析和数据集成功能集成在一个服务中。 MicroStrategy BI平台的功能是按需提供的，并针对最苛刻的企业应用进行了优化。 MicroStrategy Cloud可为基础设施大大节省成本支出，无需软、硬件来维护，无需花费设置、配置、管理的成本 |
| Domo                                     | 一个基于云的执行管理平台，使用户可以在一个地方直接，实时地访问他们关心的所有业务信息。任何人都能够以任何他们想要的方式发现，混搭，可视化和呈现数据 |
| GoodData                                 | 支持数据治理，安全和监督以及业务用户对自助服务发现的期望。 GoodData提供完整的云BI控制，以加速实时访问，并且能够为销售、营销和客户服务提供实时访问及时准确的分析报告，而不受时间、地点的约束 |
| Yellowfin                                | 从数据到仪表板的出色分析能力。它提供提供了企业所需要的所有数据发现功能，同时在业务用户所需的易用性和企业IT的治理需求之间提供了良好的平衡 |
| Pentaho                                  | 一个高度灵活的平台，用于混合，编排和分析几乎任何来源的数据，有效地跨越系统，应用程序和企业便捷。Pentaho的开放式架构和标准方面的优势，使其成为了嵌入到基于云的应用程序，并与现有企业架构保持一致的理想解决方案 |
| IBM Cognos Analytics on Cloud            | 使用安全的商业智能软件即服务(SaaS)解决方案提供自助服务，数据治理和报告。当企业需要在Web或移动设备上保持相同的统一体验时，Cognos Analytics能够快速查找，分析，创建和共享洞察信息 |
| SAP Lumira Cloud                         | 无需IT帮助的情况下在安全的云环境中访问，可视化和共享数据。这种自助服务商务智能解决方案使用户能够通过拖放，轻松地探索信息并显示隐藏的洞察能力。功能包括在云中易于使用的自助BI，通过直观的拖放界面对数据进行可视化 |
| TIBCO Spotfire Cloud                     | 分析软件即服务，用于数据分析。在云上无需任何安装就能满足需求，企业可对数据进行不同的可视化比较，并给出建议 |
| 1010data                                 | 应用于云中或企业内部的大数据分析平台。可满足在高可用性系统中的企业级分析平台。  |
| Oracle商业智能平台                             | 一整套直观的BI工具。一个成熟的平台，用于为企业创建商业智能应用程序       |
| [微软 Power BI](https://powerbi.microsoft.com/zh-cn/) | 提供了通过Excel和Power BI for Office 365提供的完整的自助服务商务智能解决方案。Excel提供数据发现，分析和可视化功能，帮助用户从其数据中识别更深入的业务洞察。 Office 365的Power BI提供了一个易于部署的基于云的BI环境，供用户从任何地方共享，协作和访问数据和报告。 2017年1月10日[针对手机端优化的Power BI报告正式上线](https://powerbi.microsoft.com/en-us/blog/power-bi-mobile-phone-reports-now-available-everywhere/) |
| Information Builders                     | 提供多种云部署选项。移动企业级商业智能，让数据完整性流程以及与云的集成更快更容易。借助云托管服务，客户可以使用共享的公有云环境或专用的私有云资源开始使用全面的信息构建技术 |
| Logi Analytics                           | Logi基于Web的平台和分析应用程序允许企业分析和可视化其数据，快速创建信息应用程序，并将交互式仪表板和报告直接嵌入到操作应用程序中。 |
| Panorama Software PowerApps              | 基于Web托管和高效的OLAP(在线分析处理)平台，可以创建，管理和支持任何类型的分析场景。该平台提供API来创建OLAP多维数据集，以及从Google Apps中提供和创建自定义的面向用户的报告 |
| Zoho Reports                             | 在线报告和商业智能服务，可帮助企业分析业务数据，并创建有洞察的报告和仪表板，以便做出明智的决策 |
| Deloitte Managed Analytics(DMA)          | 通过多个数据源提供可操作的洞察，通常不需要对内部基础架构进行大量投资       |
| Alteryx                                  | 一个单一的工作流程，用于数据混合，分析和报告。此工作流程允许内部，第三方和基于云的数据的无缝混合，以及使用60种预构建工具进行空间和预测分析 |
| Matillion                                | 自助服务商业智能和分析。 Matillion用户无需技术技能就可以快速生成强大的分析和报告 |
| Salesforce分析云                            | 快速响应和交互式可视化看起来感觉更像是一个游戏而不是一个图形           |
| Informatica                              | 数据集成解决方案系列专门用于帮助SaaS应用程序。平台客户可基于云将驻留在内部数据库和系统或云应用之间的数据集成 |
| FICO分析云                                  | 分析和决策管理解决方案，用于共享和协作，吸引和增长客户，管理债务和防止欺诈    |
| SAS云分析                                   | 支持BI，报告和仪表板，并扩展到数据分析。通过单一界面交付，云分析支持决策树，网络图，动态预测，目标寻求和情景分析，路径分析和文本分析等 |
| Rosslyn Analytics                        | 将数据管理和分析结合在一个单一的基于云的环境中，提供更智能，更快速，更有洞察力的业务决策 |
| Mo'mix Performance Center                | 利用软件即服务(SaaS)交付模式，无需基础设施成本，而且投资回报快       |
| Bitam                                    | 企业性能管理(EPM)解决方案，包括商业智能，财务规划和战略规划的SaaS服务。该软件包括创建定制和操作仪表板的能力，其中包括业务度量和关键性能指标(KPI)，用于通过图形，图表和表格来实现计划的可视化实际性能 |
| BellaDati                                | 可十分方便地从诸如Salesforce，Facebook，Google Analytics等数据仓库或 MySQL ，DB2等平台中导入数据，无需编写代码，企业用户只需简单的选择、拖拽、确认等动作即可完成数据仓库的设计并生成分析报告 |
| RJMetrics                                | 完整的分析平台，旨在帮助在线企业与数据出更明智的决策。 RJMetrics提供整合，优化和分析数据所需的所有技术 |
| Atom BI                                  | 专注于帮助企业以简单和安全的方式回答业务问题。 Atom BI提供的功能包括通过分析库，仪表板访问市场上最好的和最传统的工具，并在几秒钟内通过Web构建报告和分析 |
| Oracle Hyperion                          | 提供基于云的应用程序管理，通过提供可预测的结果，提高透明度和合规性，以及使用Hyperion财务管理，Hyperion计划，Hyperion人力规划，数据关系管理等提高业务一致性，帮助客户推动盈利增长 |
| Anaplan                                  | 基于云的商业建模和规划平台，用于销售，运营和财务                 |
| Chartio                                  | 一种商业智能服务，通过直观的拖放界面，可以从各种来源中搜索数据，从而创建交互式图表和完善的仪表板 |
| TARGIT Cloud                             | TARGIT商务智能解决方案(TARGIT BI Suite)的补充，它可以在线共享数据和分析，并与同事一起工作。它还允许在线与企业外部的同事共享数据 |
| Host                                     | 一套完整的企业性能管理应用程序。基于云的交付模型有助于提高业务敏捷性和降低成本，同时更快地部署。单个报告编写器可以生成各种财务和管理报告，并深入了解数字背后的细节 |
| Oracle Eloqua商业智能云服务                     | Oracle Eloqua Marketing Cloud Service的强大附加功能，使数据专家和分析营销人员能够创建自定义报告，仪表板，过滤器和提示 |

#### 其他商业产品

| 产品                                       | 特点                                       |
| ---------------------------------------- | ---------------------------------------- |
| FineBI                                   |                                          |
| [海致BDP商业数据平台](https://www.bdp.cn/home.html) |                                          |
| [诸葛](https://zhugeio.com/)               |                                          |
| [阿里云 Quick BI  数加平台](https://data.aliyun.com/product/bi) |                                          |
| [Kyligence](http://kyligence.io/)        | 基于Apache Kylin开源项目的通用型企业级产品。 OLAP on Hadoop，主要客户群体集中在金融、电信、互联网等领域。通过SaaS服务的KyBot快速解决运维和应用问题 |
| [xDataInsight](http://www.xdatainsight.com/portal/html/home.html) | [成都数之联科技集团](http://www.unionbigdata.com/)的一站式敏捷大数据商业分析平台 |

### 开源

| 产品                                       | 特点                                       |
| ---------------------------------------- | ---------------------------------------- |
| [Redash](https://github.com/getredash/redash) | 提供了基于 web 的数据库查询和数据可视化功能。 redash 提供了这么一种简单便捷的方式将这些工作标准化：在 web 页面上输入 sql 语句，使用查询返回的结果构造数据可视化图表，用户可以将这些图表结果拖动构造成自己需要的数据面板，在很大程度上可以缓解数据运维人员对前端开发人员的需求。 |
| Pentaho                                  | 以工作流为核心的、强调面向解决方案而非工具组件的、基于java平台的商业智能(Business Intelligence)套件。包括一个 web server 平台和几个工具软件：报表、分析、图表、数据集成、数据挖掘等，可以说包括了商务智能的方方面面。 |
| Jaspersoft                               | 提供了灵活、可嵌入的商业智能工具                         |
| SpagoBI for Cloud                        | 开源，完整和灵活的商业智能套件。SpagoBI for Cloud的优势在于无需是购买，安装，维护复杂的软硬件设备和软件，而且也无需昂贵的许可 |

分析：

从数据角度来看，主要涵盖**业务数据**和用户使用产品的（脱敏后的）行为数据。一般来讲，对**用户行为数据**利用越充分，产品越智能。

从收费和市场占有量的角度来看，免费固然有利于工具型产品的推广，但**产品稀缺性**决定是否收费。能适应主要目标用户群体的**场景**，是反哺产品成长的关键。

### 评估角度

|           | 措施                                       |      |
| --------- | ---------------------------------------- | ---- |
| 兼容性       | 与市场主流供应商、厂商合作，通过产品双向认证                   |      |
| 应用场景      | 超大规模数据分析能力，重点布局金融、电信、互联网领域， 提供用户行为分析、用户画像、资产分析管理以及数据服务平台等 |      |
| 教育成本／用户体验 | 企业客户更喜欢端到端服务                             |      |
| 安全性       | 数据加密、访问控制列表、SSO                          |      |

### 商业策略

- 开源－商业模式的主流做法（成功案例 红帽）：核心技术是完全开源的，但基于对客户使用开源产品的反馈结果，研发出符合客户需求的企业级产品，帮助客户更好地使用开源技术。
- 细分领域：切入细分领域，竞争相对较小，通用型的产品可复制性强，发展依赖开源社区
- 行业解决方案和通用型产品：通用型产品优势可减少大量研发成本，快速交付；
- 新兴领域布局：云计算

### 趋势

关键词： 大数据、智能、自助、移动。

#### 知名调研机构 [BARC](http://barc-research.com/research/bi-trend-monitor/)

针对BI重要趋势调研了近2800位用户、顾问和供应商。《[2017年BI趋势报告](http://barc-research.com/wp-content/uploads/2016/11/BARC_2017_BI_Trend_Monitor_web.pdf)》的结果显示，**数据可视化**、**自助式BI**和**数据质量/主数据管理**被认为是BI工作中最重要的三个部分，也是当下更受关注的BI趋势。

Gartner 分析师们提出的未来主流BI的标准配置：

1. 敏捷集中地配置BI：支持IT人员能够分权限分内容掌控管理数据；业务人员可自助取数，可直连数据，也可链接经过ETL处理过的数据仓库，更可自助加工处理一些原本不满足需求的数据
2. 分散式分析：支持各个业务部门和用户的分析自由创建不同主题的分析页面，并能协同共享
3. 可控的数据的挖掘分析：保证IT平台的安全性、后台可监控用户行为、可监测平台的访问和使用状况等功能。用户处理好的数据和创建好的分析页面可共享和复用
4. 嵌入式BI：支持将数据转化为可嵌入到其他流程或应用中的BI内容
5. 外网部署：支持类似于针对外部客户的独立服务器部署，允许用户通过局域网和互联网访问

#### 知名调研机构 [Gartner](http://www.gartner.com/technology/home.jsp)

 [Gartner](http://www.gartner.com/technology/home.jsp)的《[商业智能和分析魔力象限](https://www.gartner.com/doc/reprints?id=1-3TYE0CD&ct=170221&st=sb)》也可以查看BI的趋势。

## 主要前端技术

商业智能(BI)由数据建模（数据源、维度、数据集）、数据分析（仪表板、报表）和应用（站点、分享）组成。

具体模块有：登录授权、权限管理(ACL\RBAC)；消息通知、向导（帮助）、反馈和第三方集成等。

主要功能及技术：

#### 数据可视化（Create/View）

- 图表组件
  - [G2](https://github.com/antvis)、Echarts
  - 富文本编辑：[draft.js](https://draftjs.org/) + [draft-js-plugins](https://www.draft-js-plugins.com/)、ckeditor
  - 代码编辑器：[Monaco-Editor](https://microsoft.github.io/monaco-editor/)
- 非图表组件
  - 表格：
  - 拖放：[draggable](https://github.com/Shopify/draggable)
- 布局
  - 跨屏（PC、H5）：[react-grid-layout](https://github.com/STRML/react-grid-layout)、[gaea-editor](https://github.com/ascoders/gaea-editor)
  - 大屏：[golden-layout](https://github.com/deepstreamIO/golden-layout)、[react-mosaic](https://github.com/palantir/react-mosaic)

#### 报表（Create/View）

- 电子表格：[JSpreadsheets](https://jspreadsheets.com/)、[socialcalc](https://github.com/DanBricklin/socialcalc)、[EtherCalc](https://ethercalc.net/)、[React datasheet](https://nadbm.github.io/react-datasheet/)、[GrapeCity](http://www.gcpowertools.com.cn/)

#### 站点搭建（Create／View）

> 站点，是一个直观反映数据分析师个人能力和品牌的地方；一个供决策者从BI获取信息来指明方向的地方。


个人建议，参照互联网广告中在线生成 Landing Page 页做法，让用户可通过“点选+拖拽”快速建站。

区别是将组件内容替换为该用户下的仪表或报表。

重点：数据和模版隔离；站点模版包的组织方式。

以下提供几个参考：

- [IM Creator Website Builder](https://www.imcreator.com/themes)
- [Woobox builder](https://woobox.com/landing-page) 
- [SnapPages](https://snappages.com/)

可参考模版

- [HTML.am](http://www.html.am/templates/simple-website-templates/)

#### 数据分享（Share）

- 邮件（newsletter）
  - 截屏：[Puppeteer](https://github.com/GoogleChrome/puppeteer)、[Chromeless](https://github.com/graphcool/chromeless)、[Headless Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md)
  - [邮件HTML模版](http://tingge.github.io/lab/rwd-edm.html)：[Ink](http://foundation.zurb.com/emails.html)、[MJML](https://github.com/mjmlio/mjml)
- 短消息（message）
  - 站内（公告、审批、消息等）：[跨浏览器的桌面通知插件 Push.js](https://pushjs.org/)
  - [IM](https://github.com/TingGe/develop-tools#mac或linux系)(钉钉、短信、微信)：
- 支持BI功能模块嵌入业务系统：
  - 安全 iframe 嵌入研究：[Really Understanding iFrames](https://onlineadview.wordpress.com/2011/11/06/really-understanding-iframes/)、
- 二维码
- PDF
  - [jsPDF](https://parall.ax/products/jspdf)

#### 数字处理&可读性

> 对统计型数值的运算。计数（count）、求和（sum）、求平均（avg）的取整等

- 数字运算：[Math.js](https://github.com/josdejong/mathjs)
- 数据格式化：[d3-format](https://github.com/d3/d3-format)
- 数据导入和导出：[CSV.js](https://github.com/knrz/CSV.js)


#### 国际化

> G11N = I18N + L10N + T9N

国际化需从字符、语言、标识和文本、文本排版方向、风格和布局、导航六个方面来设计，个人的一点方案： 

1. 使用和设定系统 locale：通过“用户语言设置导航 ＋  `(navigator.language || navigator.browserLanguage).toLowerCase()` 获取用户浏览器默认语言”，来设定locale
2. 设置 html lang属性。
3. 页面中 js 读取lang加载对应语言包（如 [React Intl](https://github.com/yahoo/react-intl)、[react-intl-universal](https://github.com/alibaba/react-intl-universal)、AntDesign 的` <LocalProvier>`等）。

优点：这样遵循W3C 的 [Html 语义](https://www.w3.org/International/articles/language-tags/)，既能解决人的可读，又利于对搜索引擎的SEO。更多可参考 [W3C i18n](https://www.w3.org/International/techniques/authoring-html)

思考：

1. 语言包除 map 方式外，是否有更好的管理方式？
2. 如何实现（无人或半人工干预的）智能语言翻译和文案优化？Todo：自然语言处理（**NPL**) 方案探索？
3. API 文案：
   - 根据请求头携带 lang 参数（次要的 IP 地域等）方式，响应对应语言内容
   - 模仿 HTTP 状态码，根据 code 映射文案

## 前端方案

- 组件化/模块化方案
- 视场景的，SPA、PWA和同构／[SSR](https://css-tricks.com/server-side-react-rendering/)方案
- 微服务，[GraphQL](http://graphql.org/)
- 利用人工智能和算法，基于用户行为、业务数据分析的，智能仪表板、报表或图表生成和推荐

## 参考

- [钉钉 h5 微应用开发](https://open-doc.dingtalk.com/docs/doc.htm?treeId=367&articleId=107520&docType=1)
- adelaide: [Business Intelligence](https://www.adelaide.edu.au/planning/data-warehouse/)
- 知乎：[大数据、云计算和商业智能这三者的关系到底如何，以后的发展前景有什么看法？](https://www.zhihu.com/question/20540118)
- [44个基于SaaS的商业智能解决方案](http://www.d1net.com/software/news/457934.html)
- [Gartner 2017 BI报告，微软IBM甲骨文SAP谁家哭了](http://www.toutiao.com/i6390605880072602114/?iid=8215432465)
- [国内经典BI系统架构分析](http://mt.sohu.com/20160506/n448010261.shtml)