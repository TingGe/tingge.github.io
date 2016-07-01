> 工程实践 + 标准化 => JavaScript 生态

1. [匠心之路](https://github.com/TingGe/develop-tools/)
2. [我的前端技能路线图](http://tingge.github.io/grunt-tingge/img/frontend.png)

## 模块化

### Web MV* 

1. [Github 中最流行的 JavaScript 项目（react-test）](http://tingge.github.io/lab/react-test/index.html)
2. [Hacker news(vue-test)](http://tingge.github.io/lab/vue-test/index.html)
3. [我的书柜（angular-test）](http://tingge.github.io/lab/angular-test/index.html)

### Virtual DOM

1. React-Native

### 可视

1. [JavaScript应用领域（d3-test）](http://tingge.github.io/lab/d3-test/index.html)

## 工程化

> 工程化的实践：预编译、合并、压缩、打包和包管理。
>

### 预编译

1. 模版引擎：pug、Handlebars
2. CSS预处理器：PostCSS、Stylus、SaaS、Less
3. JavaScript 友好语言：TypeScript、[CoffeeScript](http://coffeescript.org/)

### 构建

1. NPM Scripts
2. Webpack
3. [rollup-test](https://github.com/TingGe/tingge.github.io/tree/master/lab/rollup-test)
4. [broccoli-babel-test](https://tingge.github.io/lab/broccoli-babel-test/dist/index.html)
5. [grunt-babel-test](https://tingge.github.io/lab/grunt-babel-test/dist/index.html)
6. [phantomjs-test](https://github.com/TingGe/tingge.github.io/tree/master/lab/phantomjs-test)
7. [nightmare-test](https://github.com/TingGe/tingge.github.io/tree/master/lab/nightmare-test)

## Web 服务 && RESTful API

1. [hapi-app](https://github.com/TingGe/tingge.github.io/tree/master/lab/hapi-app)：配置优于编码，业务逻辑必须和传输层进行分离
2. [koa2-app](https://github.com/TingGe/tingge.github.io/tree/master/lab/koa2-app)：借 babel 通过 async/await 来支持 ES6+
3. [koa-app](https://github.com/TingGe/tingge.github.io/tree/master/lab/koa-app)：通过 co 生成器支持 ES6
4. [expressjs5-app](https://github.com/TingGe/tingge.github.io/tree/master/lab/expressjs5-app)：社区生态完善。[Express.js 黑历史](http://clonn.blogspot.com/2016/04/expressjs-express.html)后，IBM 过度干预，使 [Douglas Wilson](https://github.com/dougwilson) 在16年3月退出 5，建议转其它
5. [Restify](http://restify.com/)：仅是 API 服务，可观测 Http 应用的延迟、特征等

## 实时服务

1. [horizon-app](https://github.com/TingGe/tingge.github.io/tree/master/lab/horizon-app)
2. [meteor-test](http://tingge.github.io/lab/meteor-test/index.html)

## 数据库的 Node 框架

### ORM

1. [Sequelize](https://github.com/sequelize/sequelize)：提供对 MySQL，MariaDB，SQLite ，PostgreSQL 和 MSSQL 数据库的简单访问

### SQL

1. [mysql](https://github.com/mysqljs/mysql)：一个纯 javascript 实现的 nodejs 的 MySQL 客户端程序。MySQL 引擎比较好
2. [node-postgres](https://github.com/brianc/node-postgres)：一个支持纯 JavaScript 和本地 libpq 库绑定的 nodejs 的 PostgreSQL 客户端程序。个人感觉这个更好用点。
3. [pg-promise](https://github.com/vitaly-t/pg-promise)：PostgreSQL 的 Promises/A+ 接口
4. [sqlite3](https://github.com/mapbox/node-sqlite3)：SQLite  小、应用于移动端

### NoSQL

1. [cassandra-driver](https://github.com/datastax/nodejs-driver)：Cassandra 便于扩张
2. [redis](https://github.com/NodeRedis/node_redis)：Redis 一般缓存、读写快
3. [Mongoose](https://github.com/LearnBoost/mongoose)：MongoDB ODM（对象模型工具），即将 MongoDB 中数据转换为 JavaScript 对象以供在应用中使用
4. [mongodb](https://github.com/mongodb/node-mongodb-native)：Mongo DB  原生的 NodeJS 驱动
5. [nano](https://github.com/dscape/nano)：最简约的 CouchDB 客户端
6. level、[levelup](https://github.com/rvagg/node-levelup) 和 leveldown：LevelDB
7. [apoc](https://github.com/hacksparrow/apoc)：Neo4j

### 开源,分布式,RESTful 搜索引擎

1. [elasticsearch](https://github.com/elastic/elasticsearch-js)：ElasticSearch 官方的 Node.js 和 浏览器客户端库

### 数据库

| 类别            | 数据库                                      | 特点                                      | 应用场景          |
| ------------- | ---------------------------------------- | --------------------------------------- | ------------- |
| SQL           | [MySQL](http://dev.mysql.com/downloads/mysql/) |                                         | 分析            |
|               | [PostgreSQL](https://www.postgresql.org/download/) |                                         |               |
|               | [SQLite](https://www.sqlite.org/download.html) |                                         |               |
| NoSQL         | [Cassandra](http://cassandra.apache.org/) | 列存储（Wide Column Store/Column-Family）数据库 | 日志；博客平台       |
|               | [Redis](http://redis.io/download)        | 键值（Key-Value）数据库                        | 储存用户信息        |
|               | [MongoDB](https://www.mongodb.com/download-center) | 面向文档（Document-Oriented）数据库              | 日志；分析         |
|               | [CouchDB](http://couchdb.apache.org/)    | 同 MongoDB                               | 同 MongoDB     |
|               | [LevelDB](http://leveldb.org/)           |                                         |               |
|               | [Neo4j](https://neo4j.com/download/)     | 图（Graph-Oriented）数据库                    | 关系性强的数据； 推荐引擎 |
| 实时的分布式搜索和分析引擎 | [ElasticSearch](https://www.elastic.co/downloads) | 面向文档的数据库                                | 大数据；实时监控      |

## 研发基础平台

1. [部署私有 Docker Registry 服务](docker-registry.html)
2. [Docker 中搭建 GitLab服务器](docker-gitlab.html)
3. Nginx
4. LDAP

## 附录

- [移动端适配方案](http://ybshare.coding.io/share/flexible.htm)。大致思路是：[flexible.js](https://github.com/amfe/lib-flexible) 或 [metahandler.js](https://github.com/unbug/generator-webappstarter/blob/master/app/templates/app/src/util/MetaHandler.js?utm_source=tuicool&utm_medium=referral)
- [Houdini：CSS 领域最令人振奋的革新](http://mp.weixin.qq.com/s?__biz=MzAwNTAzMjcxNg==&mid=2651424725&idx=1&sn=c19801bf880556470bb21f8af0cb0225)
- [在高并发的情况下，使用Node.js怎么生成像陌陌里面每个用户都有的数字账号呢，如何才会不重复呢？ 数据库是mongodb](https://mp.weixin.qq.com/s?__biz=MzAxMTU0NTc4Nw==&mid=2661157244&idx=1&sn=ee991dac6c044064b5452ff329b3af2f)
- [HTML 5](html5.html)