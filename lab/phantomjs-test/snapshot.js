var page = require('webpage').create();
page.open('http://www.sina.com.cn', function(){
  var time = new Date().getTime();
  page.render('./snapshots/sina-com-cn-' + time + '.png')
  phantom.exit()
})
