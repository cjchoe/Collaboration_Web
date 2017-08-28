import React from 'react';
import * as THREE from 'three'
import { connect } from 'react-redux';


import "./RenderWindow.css";

class E_RenderWindow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    //Append viewport
    let viewport = $("#viewport").get(0);
    viewport.appendChild(this.props.manager.renderer.domElement);


    this.handleResize();
    var that = this;
    $(window).resize(function() {
      that.handleResize();
    });
  }



  handleResize(){
    let viewport = $("#viewport").get(0);
    if(viewport == undefined) return;

    
    let height = $(window).height() - 128;

     $("#viewport").height(height);

    this.props.manager.OnResize(viewport.offsetWidth, viewport.offsetHeight);
  }



  render(){
    return(
        <div id="viewport"/>

    );
  }
}


const mapStateToProps = (state) => {
    return {
        manager: state.authentication.manager,
        socket: state.authentication.socket
    };
};


export default connect(mapStateToProps)(E_RenderWindow);
