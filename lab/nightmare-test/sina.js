/**
* 模拟登录手机新浪网并截屏
* Todo：nightmare 对清空 eletron 的 cookies.clear() 不够强，所有登录后需手动退出。
*/

var urls = [];
urls.push('http://sina.cn/');

var sizes = [];
sizes.push({
  width: 414,
  height: 736
});
sizes.push({
  width: 736,
  height: 414
});
sizes.push({
  width: 375,
  height: 627
});
sizes.push({
  width: 320,
  height: 568
});

var email = 'test@sina.com';
var password = 'test';

var navigate = function(nightmare) {
  return function(nightmare) {
    nightmare
      .click('#loginBox')
      .wait('#beforeLogin')
      .type('#beforeLogin #loginName', email)
      .type('#beforeLogin #loginPassword', password)
      .type('#beforeLogin #onlyPassword', password) // Todo：这里应该判断，离线用户重新登录场景
      .click('#loginAction')
      .wait();
  };
}

var Nightmare = require('nightmare');

for (u in urls) {
  for (s in sizes) {
    var nightmare = new Nightmare({show:true});

    var size = sizes[s];
    var filename = 'screen-' + String("0" + u).slice(-2) + '-' + size.width + '.png';
    var url = urls[u];

    nightmare
      .viewport(size.width, size.height)
      .goto(url)
      .wait()
      .use(navigate(nightmare))
      .screenshot(filename)
      .run(function(err, nightmare) {
        if(!!err){
          return console.log(err.message);
        }
        console.log('Done.');
      });
    nightmare.end()
  }
}
