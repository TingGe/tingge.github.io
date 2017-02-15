# 云商业智能(Cloud BI)

本文主要是我个人的一些思考，如需转载请标明[本文引用地址](http://tingge.github.io/html/cloud-bi.html)和[听歌](http://tingge.github.io/html/me.html)签名。资料采集自互联网，如有侵权，请联系我删除。

> 云BI产品和主要前端技术研究。

## 定义

从应用上来讲，BI（BusinessIntelligence）即商业智能，它是一套完整的解决方案，用来将企业中现有的数据进行有效的整合，快速准确的提供报表并提出决策依据，帮助企业做出明智的业务经营决策。

云商业智能(Cloud BI)在数据架构中处于前端分析的位置，其核心作用是对获取数据的多维度分析、数据的切片、数据的上钻和下钻、cube等。通过ETL数据抽取、转化形成一个完整的数据仓库、然后对数据仓库的数据进行抽取，而后是商业智能的前端分析和展示。——出自“[miao君](https://www.zhihu.com/people/mmiaojjun/answers)”

### 关键词

数据建模、数据源、数据集、OLAP、雪花模型、星型模型、多维分析、维度、度量、上钻、下钻、cube、Dashboard、Report

## 产品

### 商业

| 竞品                                       | 特点   |
| ---------------------------------------- | ---- |
| [Tableau](https://www.tableau.com/)      |      |
| [Qlik](http://global.qlik.com/cn)        |      |
| [海致BDP商业数据平台](https://www.bdp.cn/home.html) |      |
| [Power BI](https://powerbi.microsoft.com/zh-cn/) |      |
| [诸葛](https://zhugeio.com/)               |      |

### 开源

| 竞品         | 特点                                       |
| ---------- | ---------------------------------------- |
| Pentaho    | 以工作流为核心的、强调面向解决方案而非工具组件的、基于java平台的商业智能(Business Intelligence)套件。包括一个 web server 平台和几个工具软件：报表、分析、图表、数据集成、数据挖掘等，可以说包括了商务智能的方方面面。 |
| Jaspersoft | 提供了灵活、可嵌入的商业智能工具                         |

分析：

从数据角度来看，主要涵盖**业务数据**和用户使用产品的（脱敏后的）行为数据。一般来讲，对**用户行为数据**利用越充分，产品越智能。

 从收费和市场占有量的角度来看，免费固然有利于工具型产品的推广，但**产品稀缺性**可决定是否收费。能适应主要目标用户群体的**场景**，是反哺产品成长的关键。

## 主要前端技术

除常规的登录授权、权限管理、消息通知、向导（帮助手册）、数据建模、反馈和第三方集成外，以下几项是商业智能(BI)系统的主要功能：

#### 数据可视化

- 跨屏（PC、Mobile）
- 大屏

#### 报表

- 电子表格：[JSpreadsheets](https://jspreadsheets.com/)

#### 数据分享

- 邮件（newsletter）
- 短消息（message）
- 二维码

#### 数字处理

- 数字运算
- 数字格式转换：[d3-format](https://github.com/d3/d3-format)


## 参考

- 知乎：[大数据、云计算和商业智能这三者的关系到底如何，以后的发展前景有什么看法？](https://www.zhihu.com/question/20540118)
- [国内经典BI系统架构分析](http://mt.sohu.com/20160506/n448010261.shtml)