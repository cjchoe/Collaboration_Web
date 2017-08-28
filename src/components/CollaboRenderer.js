import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { E_RenderWindow } from 'containers'; // 기본 루트에서 못 불러옴. -> why? , 시간 날 때 해결 ->> 해결함 -EJ-
import E_Manager from '../Managers/E_Manager';

import './CollaboRenderer.css';


class CollaboRenderer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const sideNav = (
      <ul className="side-nav" id="mobile-demo2">

        <li><a className="subheader">Choose a renderer!</a></li>
        <li><a onClick={this.props.manager.OnClickCube.bind(this.props.manager)}>Cube</a></li>
        <li><a onClick={this.props.manager.OnClickSphere.bind(this.props.manager)}>Sphere</a></li>
        <li><a onClick={this.props.manager.OnClickTorus.bind(this.props.manager)}>Torus</a></li>
        <li><a onClick={this.props.manager.OnClickRenderSTL.bind(this.props.manager)}>Mandible</a></li>
          <li>
            <a onClick={this.props.manager.DoAnimate.bind(this.props.manager)}>
                <i className="material-icons">3d_rotation</i>
            </a>
          </li>

          <li>
            <a onClick={this.props.manager.CancelAnimate.bind(this.props.manager)}>
              <i className="material-icons">clear</i>
            </a>
          </li>

      </ul>
    )

    return(
      <div>
        <nav>
          {sideNav}
          <div className="nav-wrapper blue darken-3">
            <Link to="##" data-activates="mobile-demo2" className="button-collapse"><i className="material-icons ">menu</i></Link>
            <ul className="top hide-on-med-and-down">
              <li><a onClick={this.props.manager.OnClickCube.bind(this.props.manager)}>Cube</a></li>
              <li><a onClick={this.props.manager.OnClickSphere.bind(this.props.manager)}>Sphere</a></li>
              <li><a onClick={this.props.manager.OnClickTorus.bind(this.props.manager)}>Torus</a></li>
              <li><a onClick={this.props.manager.OnClickRenderSTL.bind(this.props.manager)}>Mandible</a></li>
              <li>
                <a onClick={this.props.manager.DoAnimate.bind(this.props.manager)}>
                    <i className="material-icons">3d_rotation</i>
                </a>
              </li>

              <li>
                <a onClick={this.props.manager.CancelAnimate.bind(this.props.manager)}>
                  <i className="material-icons">clear</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <E_RenderWindow/>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
    return {
        manager: state.authentication.manager,
        socket: state.authentication.socket
    };
};


export default connect(mapStateToProps)(CollaboRenderer);
