# html5时代

[TOC]

## 特性

从标记语言到 Web Application

- Connectivity
- Performance & Integration
- Web Socket/SharedWorker
- Web worker
- Geolocation

### Semantics

#### 布局

header\nav\article\section\aside\footer

#### 表单

- datalist
- input 类型 color\calendar\date\Datetime-local\Email\Time\Url\Range\Telephone\Number\Search
- input 属性 autocomplete
- output
- command

- keygen

#### 文本

wbr、ruby

### Multimedia

- audio
- video

```html
<video width="320" height="240" controls="controls">
  <source src="forrest_gump.mp4" type="video/mp4" />
  <source src="forrest_gump.ogg" type="video/ogg" />
  <track kind="subtitles" src="subs_chi.srt" srclang="zh" label="Chinese">
  <track kind="subtitles" src="subs_eng.srt" srclang="en" label="English">
</video>
```

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

- Web动画

  requestAnimationFrame

### CSS3 ／ Styling

- CSS选择器（: not(.input)：所有 class 不是“input”的节点）

- 圆角（border-radius）

- 多列布局（multi-column layout）

- 阴影和反射（Shadow\Reflect）

- 文字特效（text-shadow）

- 文字渲染（text-decoration\text-overflow）`text-overflow:ellipsis;`

- 线性渐变（gradient）

- 旋转（transform）

- 增加了旋转,缩放,定位,倾斜,动画，多背景（transform: rotate | scale | skew | translate |matrix）

  `transform:\scale(0.85,0.90)\ translate(0px,-30px)\ skew(-9deg,0deg)\Animation`

- [translation](/lab/fullpage.html)

### Device Access

- [WebRTC](/lab/webrtc-app/index.html)

### Offline & Storage

- Manifest：缓存机制，而不是离线存储。

- [FileSystem API](/lab/filesystem/index.html)
- localStorage & sessionStorage（注意与 cookie 的区别、基于storage事件的页面通信）
- indexDB
- webSQL

## 参考

1. [探索 FileSystem API](http://www.html5rocks.com/zh/tutorials/file/filesystem/)
2. [HTML5的File API应用](http://blog.meathill.com/tech/js/html5-file-reader-file-writer.html)
3. [canvas选取图像局部放大](http://www.w3cfuns.com/notes/17770/8da9b817b82e5f1b00555dc6cf79f26e)
4. [HTML5 手势检测原理和实现](http://qianduan.guru/2016/08/13/gesture_detection_in_html5/)
5. [H5单页面手势滑屏切换原理](http://www.cnblogs.com/onepixel/p/5300445.html)
6.  [HTML5探秘：用requestAnimationFrame优化Web动画](http://www.webhek.com/requestanimationframe/)
7. [在视屏应用（webcam）中眼球跟踪的JS库 WebGazer.js ](https://webgazer.cs.brown.edu/)
8. [HTML5中40个最重要的技术点](http://www.techug.com/40-important-html-5-interview-questions-with-answers)
