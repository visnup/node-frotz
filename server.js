var net = require('net')
  , util = require('util')
  , spawn = require('child_process').spawn;

var server = net.createServer(function(socket) {
  var t0 = Date.now();
  util.log(socket.remoteAddress + ' connected');

  var frotz = spawn('sudo', ['-u', 'nobody', 'frotz', 'hhgttg_59.z3']);
  util.pump(frotz.stdout, socket);
  util.pump(socket, frotz.stdin);

  socket.on('close', function() {
    var t = Date.now() - t0;
    util.log(socket.remoteAddress + ' disconnected - ' + t/1000 + 's');
  });
});

server.listen(1337);
