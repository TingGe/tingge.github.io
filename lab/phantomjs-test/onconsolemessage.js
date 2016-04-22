var page = require('webpage').create(),
    system = require('system'),
    url;

url = system.args[1];
if(url.length === 1){
  console.log('Usage: onconsolemessage.js <some URL>');
  phantom.exit();
}

page.onConsoleMessage = function (msg){
  console.log('Page title is ' + msg);
};

page.open(url, function (status){
  page.evaluate(function(){
    console.log(document.title);
  });
  phantom.exit();
});
