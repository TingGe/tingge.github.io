var page = require('webpage').create();
page.open('http://www.sina.com.cn', function(){
  page.render('./snapshots/sina-com-cn.png');
  phantom.exit();
});
