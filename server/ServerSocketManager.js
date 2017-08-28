class ServerSocketManager{
  constructor(server){
    this.io = require('socket.io').listen(server, {'forceNew':true });
    console.log('socket server opened')
    this.HandleSignal();
  }

  HandleSignal(){
    let that = this;
    this.io.sockets.on('connection', function(socket){
      this.getSocket = socket;
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


      socket.on('SIGNAL_MFC_COORDINATION', function(data){
        // let jsonData = JSON.parse(data);
        // console.log(jsonData)
        //console.log(data);
        //socket.emit('SIGNAL_MFC_COORDINATION',data);

        socket.broadcast.emit('SIGNAL_MFC_COORDINATION',data);
      });

      socket.on('SIGNAL_JS_COORDINATION', function(data){
        //console.log(data);
        //console.log(data)
        socket.broadcast.emit('SIGNAL_JS_COORDINATION',data);
        //console.log(data);
      });

      socket.on('MFC_IMPORT_STL', function(data){
        socket.broadcast.emit("MFC_IMPORT_STL",data);
      });

      /*
      console.log(that.getData);
      console.log(that.data);

      if(that.getData === true){
        socket.broadcast.emit("SIGNAL_GET_FILE",that.data);
        console.log("come");
      };*/

    });
  }

}

export default ServerSocketManager;
