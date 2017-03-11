var page = require('webpage').create();
page.open('/', function(){
  page.includeJs('http://code.jquery.com/jquery-2.2.3.min.js', function(){
    var title = page.evaluate(function(){
      $("#main ol li a").click();
      return document.title;
    });
    console.log(title);
    phantom.exit();
  });
});
