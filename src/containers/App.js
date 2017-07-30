import React from 'react';
//import LoginWindow from './Login';
//import E_RenderWindow from './RenderWindow';
//import E_Manager from '../Managers/E_Manager';
import {Header, BodyContent, MainBackground } from 'components';
import { connect } from 'react-redux';
import { getStatusRequest, logoutRequest } from 'actions/authentication';
import Home from "./Home";


class App extends React.Component {
  constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    /* 생성자 처럼 실행 되는 구문 namespace 개념?*/
  componentDidMount() {
      // get cookie by name
      function getCookie(name) {
          var value = "; " + document.cookie;
          var parts = value.split("; " + name + "=");
          if (parts.length == 2) return parts.pop().split(";").shift();
      }

      // get loginData from cookie
      let loginData = getCookie('key');

      // if loginData is undefined, do nothing
      if(typeof loginData === "undefined") return;

      // decode base64 & parse json
      loginData = JSON.parse(atob(loginData));

      // if not logged in, do nothing
      if(!loginData.isLoggedIn) return;

      // page refreshed & has a session in cookie,
      // check whether this cookie is valid or not
      this.props.getStatusRequest().then(
          () => {
              console.log(this.props.status);
              // if session is not valid
              if(!this.props.status.valid) {
                  // logout the session
                  loginData = {
                      isLoggedIn: false,
                      username: ''
                  };

                  document.cookie='key=' + btoa(JSON.stringify(loginData));

                  // and notify
                  let $toastContent = $('<span style="color: #FFB4BA">Your session is expired, please log in again</span>');
                  Materialize.toast($toastContent, 4000);

              }
          }
      );
  }
  handleLogout() {
        this.props.logoutRequest().then(
            () => {
                Materialize.toast('Good Bye!', 2000);

                // EMPTIES THE SESSION
                let loginData = {
                    isLoggedIn: false,
                    username: ''
                };

                document.cookie = 'key=' + btoa(JSON.stringify(loginData));
            }
        );
    }

  render() {
      /* Check whether current route is login or register using regex */
      let re = /(login|register)/;
      let isAuth = re.test(this.props.location.pathname);

      return (
            <div>
                {isAuth ? undefined : <Header isLoggedIn={this.props.status.isLoggedIn}
                onLogout={this.handleLogout} />}
                <MainBackground/>
            </div>

        );
  }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.status,
        manager: state.authentication.manager
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStatusRequest: () => {
            return dispatch(getStatusRequest());
        },
        logoutRequest: () => {
            return dispatch(logoutRequest());
        }
    };
};

/*
class App extends React.Component{

  constructor(props){
    super(props);
    this.Manager = new E_Manager();
  }

  render(){
    return(
      <div>
        <h1> EJ Shim </h1>
        <LoginWindow/>

        <button onClick={this.Manager.OnClickCube.bind(this.Manager)}> Cube </button>

        <button onClick={this.Manager.OnClickSphere.bind(this.Manager)}> Sphere </button>

        <button onClick={this.Manager.OnClickTorus.bind(this.Manager)}> Torus </button>

        <button onClick={this.Manager.DoAnimate.bind(this.Manager)}> Animate </button>


        <button onClick={this.Manager.CancelAnimate.bind(this.Manager)}>Stop </button>

        <E_RenderWindow Manager={this.Manager} value = {10}/>
      </div>
    )
  }
}*/

export default connect(mapStateToProps, mapDispatchToProps)(App);
