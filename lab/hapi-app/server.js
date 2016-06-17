'use strict';

const Hapi = require('hapi');
const Good = require('good');

const server = new Hapi.Server();
server.connection({
  port: 3000
});

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    // 响应 ‘hello’，并设置 Cookie 键 data、值 test
    reply('Get all').state('data', 'test', {
      encoding: 'none'
    });
  }
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function(request, reply) {
    reply('Get item ' + request.params.name + '!');
  }
});

server.route({
  method: ['PUT', 'POST'],
  path: '/',
  handler: function(request, reply) {
    reply('Did something');
  }
});

server.register(require('inert'), (err) => {
  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {
      reply.file('./public/hello.html');
    }
  });
});

server.register({
  register: Good,
  options: {
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          response: '*',
          log: '*'
        }]
      }, {
        module: 'good-console'
      }, 'stdout']
    }
  }
}, (err) => {
  if (err) {
    throw err;
  }

  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('info', 'Server running at:', server.info.uri);
  });
});
