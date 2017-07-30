import React from 'react';
import E_RenderWindow from '../containers/RenderWindow'; // 기본 루트에서 못 불러옴. -> why? , 시간 날 때 해결
import E_Manager from '../Managers/E_Manager';

class BodyContent extends React.Component {
  constructor(props){
    super(props);
    this.Manager = new E_Manager();
  }

  render(){

    return(
      <div>
        <button onClick={this.Manager.OnClickCube.bind(this.Manager)}> Cube </button>

        <button onClick={this.Manager.OnClickSphere.bind(this.Manager)}> Sphere </button>

        <button onClick={this.Manager.OnClickTorus.bind(this.Manager)}> Torus </button>

        <button onClick={this.Manager.DoAnimate.bind(this.Manager)}> Animate </button>

        <button onClick={this.Manager.CancelAnimate.bind(this.Manager)}>Stop </button>

        <E_RenderWindow Manager={this.Manager} value = {10}/>

      </div>
    )
  }
}

export default BodyContent;
