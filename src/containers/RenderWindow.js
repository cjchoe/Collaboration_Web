import React from 'react';
import * as THREE from 'three'
import ReactResizeDetector from 'react-resize-detector';

class E_RenderWindow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.refs.viewport.appendChild(this.props.Manager.renderer.domElement)
  }

  render(){
    return(
      <div>
        <div ref="viewport">
          <ReactResizeDetector handleWidth handleHeight onResize={this.props.Manager.OnResize.bind(this.props.Manager)}/>
        </div>
      </div>
    );
  }
}

export default E_RenderWindow;
