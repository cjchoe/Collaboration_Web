import * as THREE from 'three';


class E_Manager{
  constructor(){
    this.m_bAnimate = true;
    this.Initialize();
  }

  Initialize(){
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.z = 1000;

    let geometry = new THREE.BoxGeometry( 200, 200, 200 );
    let material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    this.mesh = new THREE.Mesh( geometry, material );
    this.scene.add( this.mesh );

    this.renderer = new THREE.WebGLRenderer();
    this.Animate();
  }

  Animate(){
    if(!this.m_bAnimate){
      return;
    }

    requestAnimationFrame( this.Animate.bind(this) );

    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;

    this.renderer.render( this.scene, this.camera );
  }

  OnResize(width, height){
    //Handle Resize
    width *= 0.99;
    height *= 0.99;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }

  DoAnimate(){
    this.m_bAnimate = true;
    this.Animate();

  }

  CancelAnimate(){
    this.m_bAnimate = false;
  }

  OnClickCube(){
    this.mesh.geometry = new THREE.BoxGeometry( 300, 300, 300 );
    this.mesh.material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
    // this.mesh = new THREE.Mesh( geometry, material );
  }

  OnClickSphere(){
    this.mesh.geometry = new THREE.SphereGeometry( 300, 32, 32 ) ;
    this.mesh.material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
  }

  OnClickTorus(){
    this.mesh.geometry = new THREE.TorusGeometry( 200, 100, 16, 100 );
    this.mesh.material = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } );
  }
}

export default E_Manager;
