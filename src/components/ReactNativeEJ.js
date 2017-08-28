import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './ReactNativeEJ.css'
// import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native'

class ReactNativeEJ extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container-flex flex-row">

        <div className="box box5"> <h2>3D Renderer</h2></div>

        <div className="chat container-flex flex-col box box6">
          <div className="box box7"> <h2>Chat Ren</h2></div>
          <div className="box box8"> <h2>Chat input</h2></div>
        </div>


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


export default connect(mapStateToProps)(ReactNativeEJ);
