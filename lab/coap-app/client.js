const coap 	= require('coap');
const req 	= coap.request('coap://localhost/ting');

req.setHeader("Accept", "application/json");
req.on('response', function(res){
  res.pipe(process.stdout);
});

req.end();
