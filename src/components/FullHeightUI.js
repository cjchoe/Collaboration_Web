
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './FullHeightUI.css';
import CollaboRenderer from './CollaboRenderer';


class FullHeightUI extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.handleResize();


    let that = this;
    $(window).resize(function() {
      that.handleResize();
    });
  }

  handleResize(){
    let window_size = $(window).height() - 64;
    $('.main').height(window_size);
  }


  render(){
    return(

        <div className="row">
            <div className="main col s3 red">
              <h1> Chat Render </h1>
            </div>
            <div className="main col s9 indigo">
              <CollaboRenderer/>
            </div>


            <div className="row blue darken-3">
              <div className ="col s9">
                <div className="nav-wrapper">
                  <i className="material-icons prefix">textsms</i>
                  <input
                  name='ChatContent'
                  type="text"
                  id="autocomplete-input"
                  className="autocomplete"/>
                </div>
              </div>
              <div className ="col s3">
                <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action">
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
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


export default connect(mapStateToProps)(FullHeightUI);
