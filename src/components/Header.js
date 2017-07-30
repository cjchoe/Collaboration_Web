import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  // get loginData from cookie
  constructor(props) {
        super(props);
  }

  componentDidMount(){
    $(".button-collapse").sideNav();
  }



  render() {
    const loginButton = (

                <Link to="/login">
                    <i className="material-icons">person_add</i>
                </Link>

        );
        const logoutButton = (

                  <a onClick={this.props.onLogout}>
                      <i className="material-icons">lock_open</i>
                  </a>

          );
      return (
          <nav>
              <div className="nav-wrapper black darken-1">
                  <Link to="/" className="brand-logo center">Collaboration</Link>
                  <Link to="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></Link>

                  <div className="left">

                      <ul className="left hide-on-med-and-down">
                        <li>
                            <Link to ="/render" className="btn waves-effect waves-light teal lighten-1">shapes<i className="material-icons right">palette</i></Link>
                        </li>
                        <li>
                            <Link to ="/collabo" className="btn waves-effect waves-light teal lighten-1">Collabo<i className="material-icons right">people_outline</i></Link>
                        </li>
                      </ul>

                      <ul className="side-nav" id="mobile-demo">
                        <li>
                            <Link to ="/render" className="btn waves-effect waves-light teal lighten-1">shapes<i className="material-icons right">palette</i></Link>
                        </li>
                        <li>
                            <Link to ="/collabo" className="btn waves-effect waves-light teal lighten-1">Collabo<i className="material-icons right">people_outline</i></Link>
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
