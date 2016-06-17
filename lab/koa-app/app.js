var koa = require('koa');
var KeyGrip = require('keygrip');
var app = koa();

// 设置 Cookie 签名密钥。注意：签名密钥只在配置项 signed 参数为真是才会生效
// app.keys = ['im a newer secret', 'i like koa'];
app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');

// x-response-time
app.use(function*(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(function*(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response
app.use(function*() {
  this.body = 'Hello Ting';
  this.cookies.set('name', 'ting', {
    signed: true
  });
});

// Handler Error
app.on('error', function(err, ctx) {
  log.error('server error', err, ctx);
});

app.listen(3000);
