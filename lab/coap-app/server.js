const coap 	= require('coap');
const DBHelper	= require('./db_helper.js');
const server 	= coap.createServer();

DBHelper.initDB();

server.on('request', function(req, res){
  if(req.headers['Accept'] == 'application/json'){
    res.code = '2.05';
  }
  res.end(`Hello ${req.url.split('/')[1]}\n`);
});

server.listen(function(){
  console.log('server started');
});
