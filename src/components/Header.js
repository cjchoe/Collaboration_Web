import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {

  // get loginData from cookie
  constructor(props) {
        super(props);
  }

  componentDidMount(){
    $(".button-collapse").sideNav({closeOnClick: true});
  }



  render() {
    const loginButton = (

                <Link to="/login">
                    <i className="material-icons">person_add</i>
                </Link>

        );
    const logoutButton = (

            <Link to ='/'>
              <a onClick={this.props.onLogout}>
                  <i className="material-icons">lock_open</i>
              </a>
            </Link>

      );

      const sideNav = (
        <ul className="side-nav" id="mobile-demo">
          <li><a className="subheader">Collabo-App Templates</a></li>
          <li>
              <Link to ="/" className="btn waves-effect waves-light teal lighten-1">Home<i className="material-icons right">home</i></Link>
          </li>
          <li>
              <Link to ="/home2" className="btn waves-effect waves-light teal lighten-1">Home2<i className="material-icons right">home</i></Link>
          </li>

          <li><a className="subheader">Collabo-App Templates</a></li>
          <li>
              <Link to ="/render" className="btn waves-effect waves-light teal lighten-1">shapes<i className="material-icons right">palette</i></Link>
          </li>
          <li>
            {this.props.isLoggedIn == true?
              <Link to ="/collabo" className="btn waves-effect waves-light teal lighten-1">Collabo<i className="material-icons right">people_outline</i></Link>
              : <Link to ="/" className="btn waves-effect waves-light teal lighten-1">Login First<i className="material-icons right">notifications</i></Link>
            }
          </li>
          <li>
              <Link to ="/collabo_temp" className="btn waves-effect waves-light teal lighten-1">Collabo_temp<i className="material-icons right">people_outline</i></Link>
          </li>

          <li>
              <Link to ="/native_temp" className="btn waves-effect waves-light teal lighten-1">ReactNativeEJ<i className="material-icons right">people_outline</i></Link>
          </li>
        </ul>
      )
      return (
          <nav>
              {sideNav}
              <div className="nav-wrapper black darken-1">
                  <Link to="/" className="brand-logo center">Collaboration</Link>
                  <Link to="#" data-activates="mobile-demo" className="button-collapse show-on-large"><i className="material-icons ">menu</i></Link>

                  <div className="left">
                      <ul className="hide-on-med-and-down">
                        <li>
                            <Link to ="/render" className="btn waves-effect waves-light teal lighten-1">shapes<i className="material-icons right">palette</i></Link>
                        </li>
                        <li>
                          <ul>{this.props.isLoggedIn == true?
                            <Link to ="/collabo" className="btn waves-effect waves-light teal lighten-1">Collabo<i className="material-icons right">people_outline</i></Link>
                            : <Link to ="/" className="btn waves-effect waves-light teal lighten-1">Login First<i className="material-icons right">notifications</i></Link>}
                          </ul>
                        </li>
                      </ul>
                  </div>


                  <div className="right">
                      <ul>
                        {this.props.isLoggedIn == true? logoutButton : loginButton}
                      </ul>
                  </div>

              </div>
          </nav>
      );
  }
}

/*<ul>
    <li><a><i className="material-icons">search</i></a></li>
</ul>*/
Header.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    onLogout: React.PropTypes.func
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");}
};

export default Header;
