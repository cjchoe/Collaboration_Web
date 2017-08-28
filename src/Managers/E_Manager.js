import * as THREE from 'three';
<<<<<<< HEAD
import TrackballControls from 'three-trackballcontrols';
import E_SocketManager from './E_SocketManager';
var STLLoader = require('three-stl-loader')(THREE)
// let TrackballControls = require('three-trackballcontrols');

class E_Manager{
  constructor(){
    this.socketMgr = new E_SocketManager(this);
    this.m_bAnimate = true;
    this.Initialize();
    this.socket = io();
=======


class E_Manager{
  constructor(){
    this.m_bAnimate = true;
    this.Initialize();
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
  }

  Initialize(){
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
<<<<<<< HEAD
    this.camera.position.z = 500;

    let geometry = new THREE.TorusGeometry( 200, 100, 16, 100 );
    let material = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } );

=======
    this.camera.position.z = 1000;

    let geometry = new THREE.BoxGeometry( 200, 200, 200 );
    let material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57

    this.mesh = new THREE.Mesh( geometry, material );
    this.scene.add( this.mesh );

    this.renderer = new THREE.WebGLRenderer();
<<<<<<< HEAD

    //Initialize Trackball Controls
    this.controls = new TrackballControls( this.camera, this.renderer.domElement);
    this.controls.rotateSpeed = 4.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.panSpeed = 0.8;
    this.controls.staticMoving = true;
    this.controls.dynamicDampingFactor = 0.3;
    this.controls.keys = [ 65, 83, 68 ];

    this.controls.addEventListener('change', this.Redraw.bind(this));
    // this.controls.addEventListener('change', this.UpdateControl.bind(this));
    this.renderer.domElement.addEventListener('mousedown', this.OnMouseDown.bind(this));
    this.renderer.domElement.addEventListener('mousemove', this.OnMouseMove.bind(this));
    this.renderer.domElement.addEventListener('mouseout', this.OnMouseOut.bind(this));
    this.renderer.domElement.addEventListener('mouseup', this.OnMouseUp.bind(this));
    this.renderer.domElement.addEventListener('scroll', this.OnMouseScroll.bind(this));
    this.bMouseDown = false;

    this.Animate();
  }
  OnMouseScroll(){
    //console.log('scroll moved');
    this.Redraw();
  }


  OnMouseOut(){
    this.bMouseDown = false;
  }

  OnMouseDown(){
    this.bMouseDown = true;
  }

  OnMouseMove(){
    if(this.bMouseDown){
      this.UpdateControl();
    }
  }
  OnMouseUp(){
    this.bMouseDown = false;
  }

  Animate(){
    if(this.m_bAnimate){
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.Redraw();
    }
    this.controls.update();
    requestAnimationFrame( this.Animate.bind(this) );
  }

  UpdateControl(){
    let position = this.camera.position;
    let jsonData = {_x:position.x, _y:position.y, _z:position.z};
    let data = JSON.stringify(jsonData);
    //console.log("updated");
    this.socketMgr.socket.emit("SIGNAL_JS_COORDINATION",data); // 유저가 로테이션 신호를 서버로 emit -> 서버가 신호 받아서 다른 모든 유저들에게 브로드캐스팅 해줌 -> 다른 유저들은 로테이션 신호 받아서 처리.
    //this.socket.emit("SIGNAL_ROTATION", jsonData);
    //console.log(jsonData);
  }

  Redraw(){
=======
    this.Animate();
  }

  Animate(){
    if(!this.m_bAnimate){
      return;
    }

    requestAnimationFrame( this.Animate.bind(this) );

    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;

>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
    this.renderer.render( this.scene, this.camera );
  }

  OnResize(width, height){
    //Handle Resize
<<<<<<< HEAD
    // width *= 0.99;
    height *= 0.99;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( width, height );
    this.controls.handleResize();
    this.Redraw();
=======
    width *= 0.99;
    height *= 0.99;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
  }

  DoAnimate(){
    this.m_bAnimate = true;
<<<<<<< HEAD
=======
    this.Animate();

>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
  }

  CancelAnimate(){
    this.m_bAnimate = false;
  }

  OnClickCube(){
    this.mesh.geometry = new THREE.BoxGeometry( 300, 300, 300 );
    this.mesh.material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
    // this.mesh = new THREE.Mesh( geometry, material );
<<<<<<< HEAD
    this.Redraw();
=======
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
  }

  OnClickSphere(){
    this.mesh.geometry = new THREE.SphereGeometry( 300, 32, 32 ) ;
    this.mesh.material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
<<<<<<< HEAD

    this.Redraw();
=======
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
  }

  OnClickTorus(){
    this.mesh.geometry = new THREE.TorusGeometry( 200, 100, 16, 100 );
    this.mesh.material = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } );
<<<<<<< HEAD
    this.Redraw();
  }

  OnClickRenderSTL(){
    let that = this;
    let loader = new STLLoader();

    loader.load('/file/heal_mandible.stl', function(geometry){
      that.mesh.geometry = geometry
      // this.mesh.material = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } );
      that.Redraw();
    });

  }

  LoadSTL(path)
  { //path equals file name.
    let that = this;
    let loader = new STLLoader();

    let filePath = '/file/' + path;
    loader.load(filePath, function(geometry){
      //that.mesh.geometry = geometry
      let stlMaterial = new THREE.MeshNormalMaterial();
      let stlMesh = new THREE.Mesh(geometry, stlMaterial);

      that.RemoveMesh();
      that.scene.add(stlMesh);
      //let center = that.GetCenter(stlMesh);
      // this.mesh.material = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } );
      //new THREE.MeshNormalMaterial();
      that.controls.update();
      that.Redraw();
    });
  }

  RemoveMesh(){
    this.scene.remove(this.mesh);
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
    this.Redraw();
  }

  GetCenter(mesh)
  {
    //Real Center Position of Mesh
    mesh.geometry.computeBoundingBox();
    var boundingBox = mesh.geometry.boundingBox;
    var position = new THREE.Vector3();
    position.subVectors( boundingBox.max, boundingBox.min );
    position.multiplyScalar( 0.5 );
    position.add( boundingBox.min );
    position.applyMatrix4( mesh.matrixWorld );

    return position;
=======
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
  }
}

export default E_Manager;
