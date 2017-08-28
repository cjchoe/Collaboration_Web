import React from 'react';
import E_RenderWindow from '../containers/RenderWindow'; // 기본 루트에서 못 불러옴. -> why? , 시간 날 때 해결
import E_Manager from '../Managers/E_Manager';
import { connect } from 'react-redux';

class BodyContent extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){

    return(
      <div>
        <button onClick={this.props.manager.OnClickCube.bind(this.props.manager)}> Cube </button>
        <button onClick={this.props.manager.OnClickSphere.bind(this.props.manager)}> Sphere </button>
        <button onClick={this.props.manager.OnClickTorus.bind(this.props.manager)}> Torus </button>
        <button onClick={this.props.manager.DoAnimate.bind(this.props.manager)}> Animate </button>
        <button onClick={this.props.manager.CancelAnimate.bind(this.props.manager)}>Stop </button>

        <E_RenderWindow/>

      </div>
    )
  }
}



const mapStateToProps = (state) => {
    return {
        manager: state.authentication.manager,
        socket: state.authentication.socket
    };
};


export default connect(mapStateToProps)(BodyContent)
