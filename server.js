var net = require('net')
  , util = require('util')
  , spawn = require('child_process').spawn;

var server = net.createServer(function(socket) {
  var frotz = spawn('frotz', ['hhgttg_59.z3']);
  util.pump(frotz.stdout, socket);
  util.pump(socket, frotz.stdin);
});

server.listen(1337);
