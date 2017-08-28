import React from 'react';
import E_RenderWindow from '../containers/RenderWindow'; // 기본 루트에서 못 불러옴. -> why? , 시간 날 때 해결
import E_Manager from '../Managers/E_Manager';
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57

class BodyContent extends React.Component {
  constructor(props){
    super(props);
<<<<<<< HEAD
  }

  componentDidMount(){

=======
    this.Manager = new E_Manager();
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
  }

  render(){

    return(
      <div>
<<<<<<< HEAD
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
=======
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
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
