# html5时代

[TOC]

## 特性

从标记语言到 Web Application

- Connectivity
- Performance & Integration
- Multimedia
- Web Socket
- Web worker

### Semantics

#### 布局

header\nav\article\section\aside\footer

#### 表单

- datalist
- input 类型 color\date\Datetime-local\Email\Time\Url\Range\Telephone\Number\Search
- output 

### Graphics，3D & Effects

- Canvas

SVG 与 Canvas 区别

| SVG                                      | Canvas                          |
| ---------------------------------------- | ------------------------------- |
| 这个就好像绘制和记忆，换句话说任何使用SVG绘制的形状都能被记忆和操作，浏览器可以再次显示 | Canvas就像绘制和忘记，一旦绘制完成你不能访问像素和操作它 |
| SVG对于创建图形例如CAD软件是良好的，一旦东西绘制，用户就想去操作它     | Canvas在绘制和忘却的场景例如动画和游戏是良好的      |
| 因为为了之后的操作，需要记录坐标，所以比较缓慢                  | 因为没有记住以后事情的意向，所以更快              |
| 我们可以用绘制对象的相关事件处理                         | 我们不能使用绘制对象的相关事件处理，因为我们没有他们的参考   |
| 分辨率无关                                    | 分辨率相关                           |

### CSS3 ／ Styling

- [translation](/lab/fullpage.html)
- transform: rotate | scale | skew | translate |matrix
- animation

### Device Access

- [WebRTC](/lab/webrtc-app/index.html)

### Offline & Storage

- [FileSystem API](/lab/filesystem/index.html)
- Manifest
- localStorage & sessionStorage（注意与 cookie 的区别）
- indexDB
- webSQL

## 参考

1. [探索 FileSystem API](http://www.html5rocks.com/zh/tutorials/file/filesystem/)
2. [HTML5的File API应用](http://blog.meathill.com/tech/js/html5-file-reader-file-writer.html)
3. [canvas选取图像局部放大](http://www.w3cfuns.com/notes/17770/8da9b817b82e5f1b00555dc6cf79f26e)
4. [利用canvas制作图片（可缩放和平移）+相框+文字](http://www.cnblogs.com/zhiyuan-2011/p/4236371.html#3479487)
5. [在视屏应用（webcam）中眼球跟踪的JS库 WebGazer.js ](https://webgazer.cs.brown.edu/)
6. [HTML5中40个最重要的技术点](http://www.techug.com/40-important-html-5-interview-questions-with-answers)
