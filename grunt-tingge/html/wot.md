# Web of Things (WoT)

> IoT 意味着所有设备能够相互连结，进而形成物联网。而设备沟通能够通过各种方式如 Bluetooth, ZigBee 和 WIFI 等等。IoT 的最后阶段 WoT 则是将这些沟通方式最后都通过统一 Web 标准的方式来达成。这也是以往所有新技术最终能得到蓬勃发展的重要因素之一：统一的标准和规范。——摘自《 IoT 第四階段 : Web of Things (WoT) 》

三维连接的交接面：

![](../img/GGG.png)

## 现状

### Google 的 [Physical Web](https://github.com/google/physical-web) 

### Apple 的 [iBeacon](https://developer.apple.com/ibeacon/)

###  类 Node.js 方案

| 物联网 JS 框架                                | 说明                                       |
| ---------------------------------------- | ---------------------------------------- |
| [Ruff](https://ruff.io/)                 | 基于 [Duktape](http://duktape.org/)        |
| [IoT.js](https://github.com/Samsung/iotjs) 和 [JerryScript](https://github.com/Samsung/jerryscript) | IoT.js 平台使用 JerryScript 引擎来运行 JavaScript 代码，使用 [libuv](https://github.com/Samsung/libuv) 库来实现异步I/O。 |
| [Mongoose IoT Platform](https://github.com/cesanta/mongoose-iot) |                                          |

### Node.js 方案

| 物联网 JS 框架                             | 说明                                       |
| ------------------------------------- | ---------------------------------------- |
| [WoT.City](https://wotcity.com/zh-tw) | 开源 WoT 框架                                |
| [Cylon.js](http://cylonjs.com/ )      | 智能机器人和 IOT 的 JavaScript 开发框架，号称支持不下35种平台，使得开发人员可以使用同样的API来操纵不同的设备，包括 Leap Motion，Pebble 手表，Arduinos 和 Raspberry Pi 等。 |
| [noduino](http://www.noduino.org/)    | 一个简单、灵活的基于 JavaScript 和 Node.js 的框架，能实现通过HTML5、Socket.IO 和 Node.js 等 Web 应用实现对 Arduino 板的控制 |

#### WoT Devices 层

| JS 框架                                    | 说明           |
| ---------------------------------------- | ------------ |
| [shoe](https://github.com/substack/shoe) | 实现 websocket |
| [dnode](https://github.com/substack/dnode) | 实现 RPC       |
| [Mosca](https://github.com/mcollina/mosca)、[MQTT.js](https://github.com/mqttjs/MQTT.js) | MQTT         |

### 其它开源方案

|                                          | 说明                    |
| ---------------------------------------- | --------------------- |
| [Streembit](http://streembit.github.io/) | 分散式、对等网络，人类和机器的安全通信系统 |

## 技术栈架构

![](../img/wot-arch-stack.jpg)

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

![](../img/wot-devices-apis.png)G

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
2. [Web of Things Sales Sheet](https://www.w3.org/WoT/IG/wiki/Web_of_Things_Sales_Sheet)
3. [W3C WEB OF THINGS INTEREST GROUP](https://www.w3.org/WoT/IG/)
4. [WoT Current Practices](https://w3c.github.io/wot/current-practices/wot-practices.html)
5. [Simple Web of Things (SWoT) Architecture Model](http://hollobit.github.io/swot-model/)
6. [Web Thing Model](http://model.webofthings.io/)
7. [IoT第四階段 : Web of Things (WoT)](http://iotforum.advantech.com/discussion/104/iot%E7%AC%AC%E5%9B%9B%E9%9A%8E%E6%AE%B5-web-of-things-wot)
8. [Web of Things (WoT) Architecture](https://w3c.github.io/wot/architecture/wot-architecture.html)
9. [基于Web服务的物联网-WoT(Web of Things)](http://blog.csdn.net/wallance82/article/details/43971831)
10. [Building IoT systems with Web standards](https://www.oreilly.com/ideas/building-iot-systems-with-web-standards)
11. [WoT.City](https://wotcity.com/zh-tw)
12. [IoT and Maker Crossover (IMCO) Conference 2015](http://www.slideshare.net/jollen/iot-and-maker-corssover-imco-conference-taipei-taiwan)
13. [WoT Outreach: joint slide set Outreach slide set aims to increase the awareness of W3C’s WoT work](http://slideplayer.com/slide/9366734/)
14. [WOT BOOK LINKS](http://webofthings.org/wot-book-links/)
15. [Building the web of things](https://evrythng.com/building-web-things/)
16. [The Limitations of the IoT and How the Web of Things Can Help](https://dzone.com/articles/the-limitations-of-the-iot-and-how-the-web-of-thin)
17. [MQTT-Node.js实现-Mosca简介](http://blog.yuansc.com/2015/01/09/MQTT-Nodejs%E5%AE%9E%E7%8E%B0-Mosca%E7%AE%80%E4%BB%8B/)
18. [A new way to write IoT application server code](https://wotcity.com/blog/2016/02/23/connect-iot-device-to-local-host/)
19. [WoT.js - WoT App. Framework for Open Source Hardware](http://www.slideshare.net/hollobit/wotjs)
20. [Internet of Things Protocols and Standards](http://www.cs.wustl.edu/~jain/cse570-15/ftp/iot_prot/index.html)
21. [WoT 与 IoT](../html/iot.html)
22. [互联网与物联网](../html/int-iot.html)
23. [关于高级辅助驾驶系统 ADAS](adas.html)