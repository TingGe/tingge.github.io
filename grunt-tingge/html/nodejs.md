# Node.js 解析

> Node.js 嫁接了 JavaScript 生态和 C/C++ 性能与跨平台。

## Node.js

### 内部顶层组件架构概览：

![](../img/nodejs-arch.png)

- Application/Modules(JS)：JavaScript 程序、Node.js 核心模块和第三方 JS 的 npm 模块
- C/C++ Binding：桥接 Node.js 核心库依赖。
-  Addons：桥接自定义或第三方 C/C++ 库
- [V8](https://chromium.googlesource.com/v8/v8/)：JavaScript 引擎
- [libuv](https://github.com/libuv/libuv)：异步功能 C 库
- [其他 C/C++ 组件和库](https://nodejs.org/en/docs/meta/topics/dependencies/)： [c-ares](http://c-ares.haxx.se/)、[crypto (OpenSSL)](https://www.openssl.org/)、[http-parser](https://github.com/nodejs/http-parser) 、[zlib](http://zlib.net/)，自定义 C/C++ 组件和库等

### 语言分布

![](../img/nodejs-lang.png)

说明：Node.js 的事件驱动，在Linux 版中使用 [libev](http://software.schmorp.de/pkg/libev.html) 和 [libeio](http://software.schmorp.de/pkg/libeio.html)；在Windows 版中用的 [libuv](http://libuv.org/) 。

### 运行流程

![](../img/nodejs-run.jpg)

## libuv 设计图

默认由 4 个线程来处理不同的 I/O 。

![](../img/libuv-architecture.png)

## 参考

1. [[[译\] Node.js 架构概览](https://segmentfault.com/a/1190000005892501)](https://segmentfault.com/a/1190000005892501)
2. [[Which is correct Node.js architecture?](http://stackoverflow.com/questions/36766696/which-is-correct-node-js-architecture)](http://stackoverflow.com/questions/36766696/which-is-correct-node-js-architecture/37512766#37512766)
3. [libuv docs](http://docs.libuv.org/)