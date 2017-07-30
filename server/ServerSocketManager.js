class ServerSocketManager{
  constructor(server){
    this.io = require('socket.io').listen(server, {'forceNew':true });
    console.log('socket server opened')

    this.HandleSignal();

  }


  HandleSignal(){
    this.io.sockets.on('connection', function(socket){
      //Initialize Chat
      console.log("New Connection!!");
      console.log(socket.handshake.address);

      socket.emit('SIGNAL_JOIN', socket.id)
      socket.broadcast.emit('SIGNAL_JOIN', socket.id) // 모두에게 접속 알린다.


      socket.on('SIGNAL_GENIUS', function(data){
        console.log(data);
      });

      socket.on('SIGNAL_CHAT', function(data){
        console.log(data);
        socket.emit('SIGNAL_CHAT', data);
        socket.broadcast.emit('SIGNAL_CHAT', data);
      });


    });
  }
}

export default ServerSocketManager;
