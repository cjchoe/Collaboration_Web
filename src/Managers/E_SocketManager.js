import * as THREE from 'three';
var STLLoader = require('three-stl-loader')(THREE)
import axios from 'axios';


class E_SocketManager{

  constructor(manager){
    this.socket = io();
    this.component = null;
    this.HandleSignal();
    let mfc_Rotation_JsonData;
    this.manager = manager;
  }

  SetChatComponent(comp){
    this.component = comp;
  }

  UnMountComponent(){
    this.component = null;
  }

  HandleSignal(){
    let that = this;
    this.socket.on('SIGNAL_JOIN', function(data){
      console.log(data + " has joined");
    });

    this.socket.on('SIGNAL_CHAT', function(data){
      if(that.component === null) return;

      that.component.onChatSignal(data);
    });

    /*
    this.socket.on('SIGNAL_JS_COORDINATION', function(data){
      //let jsonData = JSON.parse(data);
      // console.log(jsonData.pos)
      // console.log(jsonData.pos._x);
      // console.log(jsonData.pos._y);
      // console.log(jsonData.pos._z);
      console.log(data);
    });*/

    this.socket.on('SIGNAL_MFC_COORDINATION', function(data){
      //console.log(data);
      //받은 string형의 data를 JS에서 사용할 수 있는 Jason형태로 바꾼다.
      let jsonData = JSON.parse(data);

      // camera의 position,up,tartget Synchronization 수행!
      that.manager.camera.position.set(jsonData.pos.x,jsonData.pos.y,jsonData.pos.z);
      that.manager.camera.up.set(jsonData.up.x,jsonData.up.y,jsonData.up.z);
      that.manager.controls.target.set(jsonData.tar.x,jsonData.tar.y,jsonData.tar.z);
    });

    this.socket.on('MFC_IMPORT_STL', function(data){
      that.manager.LoadSTL(data);
    });
  }


}

export default E_SocketManager;
