# Web of Things (WoT)

> IoT 意味着所有设备能够相互连结，进而形成物联网。而设备沟通能够通过各种方式如 Bluetooth, ZigBee 和 WIFI 等等。IoT 的最后阶段 WoT 则是将这些沟通方式最后都通过统一 Web 标准的方式来达成。这也是以往所有新技术最终能得到蓬勃发展的重要因素之一：统一的标准和规范。——摘自《 IoT 第四階段 : Web of Things (WoT) 》

## 现状

当前，大多物联网产品往往来自某一类垂直行业，基于封闭生态系统发展各自的解决方案。

- Google 的 [Physical Web](https://github.com/google/physical-web) 
- Apple 的 [iBeacon](https://developer.apple.com/ibeacon/)
- 类 Node.js 方案。如：

| 物联网 JS 框架                                | 说明                                       |
| ---------------------------------------- | ---------------------------------------- |
| [Ruff](https://ruff.io/)                 | 基于 [Duktape](http://duktape.org/)        |
| [IoT.js](https://github.com/Samsung/iotjs) 和 [JerryScript](https://github.com/Samsung/jerryscript) | IoT.js 平台使用 JerryScript 引擎来运行 JavaScript 代码，使用 [libuv](https://github.com/Samsung/libuv) 库来实现异步I/O。 |
| [Mongoose IoT Platform](https://github.com/cesanta/mongoose-iot) |                                          |

- Node.js 方案。如：

| 物联网 JS 框架                                | 说明                                       |
| ---------------------------------------- | ---------------------------------------- |
| [WoT.js](https://github.com/hollobit/wot.js) |                                          |
| [Cylon.js](http://cylonjs.com/ )         | 智能机器人和 IOT 的 JavaScript 开发框架，号称支持不下35种平台，使得开发人员可以使用同样的API来操纵不同的设备，包括 Leap Motion，Pebble 手表，Arduinos 和 Raspberry Pi 等。 |
| [noduino](http://www.noduino.org/)       | 一个简单、灵活的基于 JavaScript 和 Node.js 的框架，能实现通过HTML5、Socket.IO 和 Node.js 等 Web 应用实现对 Arduino 板的控制 |
| [shoe](https://github.com/substack/shoe) | 实现 websocket                             |
| [dnode](https://github.com/substack/dnode) | 实现 RPC                                   |
| [Mosca](https://github.com/mcollina/mosca) | MQTT                                     |

## 组成

最简版 WoT 涉及 6 类设备、5类接口。

###  6 类设备：

1. UA
2. WoT Server
3. Service Resources
4. WoT Device
5. Sensors
6. Event Trigger

### 5 类接口：

1. UA－WoT Server：HTTPS, RESTful，JSON；数据采集与上报、远程控制操作、多应用数据采集与传出、管理多个WoT Devices。用到的协议如 WebRTC、SSE 和 Web notification
2. WoT Server－Service Resources：与外置服务集成，数据交换、同步状态和信息。外置服务如服务器、云、开放 API 和 Web 资源
3. WoT Server－Sensors／硬件：内置／外置连结。如 I2C、SPI、UART、蓝牙 等
4. WoT Server－WoT Device：多 WoT Device 识别、协作。如 HTTP、Web Socket 和 CoAP 等
5. Event Trigger－WoT Server：向 WoT Server 推送消息。如 MQTT 等基于订阅的协议


### 安全要求

1. WoT Device / WoT Server 授权
2. WoT Service / WoT 应用认证
3. WoT应用支持数据交互保密性
4. WoT 终端 应可以验证数据完整性
5. 防止网络连接滥用
6. WoT 系统应能保护隐私


## 参考

1. [ WoT简介](http://www.educity.cn/wulianwang/433792.html)
2. [Simple Web of Things (SWoT) Architecture Model](http://hollobit.github.io/swot-model/)
3. [IoT第四階段 : Web of Things (WoT)](http://iotforum.advantech.com/discussion/104/iot%E7%AC%AC%E5%9B%9B%E9%9A%8E%E6%AE%B5-web-of-things-wot)
4. [Web of Things (WoT) Architecture](https://w3c.github.io/wot/architecture/wot-architecture.html)
5. [IoT and Maker Crossover (IMCO) Conference 2015](http://www.slideshare.net/jollen/iot-and-maker-corssover-imco-conference-taipei-taiwan)
6. [WoT Outreach: joint slide set Outreach slide set aims to increase the awareness of W3C’s WoT work](http://slideplayer.com/slide/9366734/)
7. [WOT BOOK LINKS](http://webofthings.org/wot-book-links/)
8. [The Limitations of the IoT and How the Web of Things Can Help](https://dzone.com/articles/the-limitations-of-the-iot-and-how-the-web-of-thin)
9. [W3C WEB OF THINGS INTEREST GROUP](https://www.w3.org/WoT/IG/)
10. [MQTT-Node.js实现-Mosca简介](http://blog.yuansc.com/2015/01/09/MQTT-Nodejs%E5%AE%9E%E7%8E%B0-Mosca%E7%AE%80%E4%BB%8B/)
11. [WoT.js - WoT App. Framework for Open Source Hardware](http://www.slideshare.net/hollobit/wotjs)
12. [Internet of Things Protocols and Standards](http://www.cs.wustl.edu/~jain/cse570-15/ftp/iot_prot/index.html)
13. [WoT 与 IoT](../html/iot.html)
14. [互联网与物联网](../html/int-iot.html)
15. [关于高级辅助驾驶系统 ADAS](adas.html)