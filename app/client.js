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
  }
}
