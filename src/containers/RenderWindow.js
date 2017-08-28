import React from 'react';
import * as THREE from 'three'
<<<<<<< HEAD
import { connect } from 'react-redux';


import "./RenderWindow.css";
=======
import ReactResizeDetector from 'react-resize-detector';
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57

class E_RenderWindow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
<<<<<<< HEAD
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

=======
    this.refs.viewport.appendChild(this.props.Manager.renderer.domElement)
  }

  render(){
    return(
      <div>
        <div ref="viewport">
          <ReactResizeDetector handleWidth handleHeight onResize={this.props.Manager.OnResize.bind(this.props.Manager)}/>
        </div>
      </div>
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
    );
  }
}

<<<<<<< HEAD

const mapStateToProps = (state) => {
    return {
        manager: state.authentication.manager,
        socket: state.authentication.socket
    };
};


export default connect(mapStateToProps)(E_RenderWindow);
=======
export default E_RenderWindow;
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
