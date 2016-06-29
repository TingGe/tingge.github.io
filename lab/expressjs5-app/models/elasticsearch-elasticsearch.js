var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200'
});

// Ping the cluster
client.ping({
  requestTimeout: 30000,

  // undocumented params are appended to the query string
  hello: "elasticsearch"
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});

// Use Promises
client.search({
  q: 'books'
}).then(function(response) {
  var hits = response.hits.hits;
  console.log(hits);
}, function(error) {
  console.trace(error.message);
});

// Allow 404 response
client.indices.delete({
  index: 'test_index',
  ignore: [404]
}).then(function (body) {
  // since we told the client to ignore 404 errors, the
  // promise is resolved even if the index does not exist
  console.log('index was deleted or never existed');
}, function (error) {
  // oh no!
});

