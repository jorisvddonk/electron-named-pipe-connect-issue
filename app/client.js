module.exports = {
  timeNamedPipeConnect: function() {
    console.time('socket_namedpipe');
    var socket_namedpipe = require('net').createConnection('\\\\.\\pipe\\' + "some_named_pipe", function() {
      console.log("Socket connected (named pipe)");
      console.timeEnd('socket_namedpipe');
    });
    socket_namedpipe.on('error', function(e){
      console.error(e);
      console.timeEnd('socket_namedpipe');
    });
  },

  timePortConnect: function() {
    console.time('socket_port');
    var socket_port = require('net').createConnection(51978, function() {
      console.log("Socket connected (port 51978)");
      console.timeEnd('socket_port');
    });
    socket_port.on('error', function(e){
      console.error(e);
      console.timeEnd('socket_port');
    });
  },

  timeRandomPortConnect: function() {
    console.time('socket_portrandom');
    var port = parseInt(Math.random() * 65535, 10);
    var socket_portrandom = require('net').createConnection(port, function() {
      console.log("Socket connected (port " + port + ")");
      console.timeEnd('socket_portrandom');
    });
    socket_portrandom.on('error', function(e){
      console.error(e);
      console.timeEnd('socket_portrandom');
    });
  }
}
