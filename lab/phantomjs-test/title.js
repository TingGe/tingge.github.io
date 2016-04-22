var page = require('webpage').create(),
    system = require('system'),
    url;

if(system.args.length === 1){
  console.log('Usage: title.js <some URL>');
  phantom.exit();
}

url = system.args[1];
page.open(url, function(status){
  var title = page.evaluate(function(){
    return document.title;
  });
  console.log('Page ' + url + ' title is ' + title);
  phantom.exit();
});
