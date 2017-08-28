import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component{
  render()
  {
    return(
      <footer className="page-footer teal">
        <div className="container">
          <div className="row">
<<<<<<< HEAD
            <div className="col l6 s12 m6">
              <h3 className ="white-text">Kist Bionics
              <Link to="/"><i className="medium material-icons">home</i></Link>
=======
            <div className="col l6 s12">
              <h3 className ="white-text">Kist Bionics
              <Link to="/"><i className="medium material-icons" href="/">home</i></Link>
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
             </h3>

              <p className="grey-text text-lighten-4">Virtual Surgery Collaboration System.</p>
            </div>

<<<<<<< HEAD
            <div className="col l3 s12 m6">
              <h5 className="white-text">Members</h5>
              <ul>
                <li><a className="white-text" href="http://bionics.kist.re.kr/" target="_blank">Bionics</a></li>
                <li><a className="white-text" href="#!">Mr.Choe</a></li>
                <li><a className="white-text" href="http://soulrommel.cafe24.com" target="_blank">Mr.Shim</a></li>
                <li><a className="white-text" href="#!">Link 4</a></li>
              </ul>
            </div>
            <div className="col l3 s12 m6">
=======
            <div className="col l3 s12">
              <h5 className="white-text">Member</h5>
              <ul>
                <li><a className="white-text" href="http://bionics.kist.re.kr/" target="_blank">Bionics</a></li>
                <li><a className="white-text" href="http://soulrommel.cafe24.com" target="_blank">Mr.Shim</a></li>
                <li><a className="white-text" href="#!">Link 3</a></li>
                <li><a className="white-text" href="#!">Link 4</a></li>
              </ul>
            </div>
            <div className="col l3 s12">
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
              <h5 className="white-text">Contact</h5>
              <ul>
                <li><a className="white-text" href="#!">Link 1</a></li>
                <li><a className="white-text" href="#!">Link 2</a></li>
                <li><a className="white-text" href="#!">Link 3</a></li>
                <li><a className="white-text" href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          Developed by <a className="brown-text text-lighten-3">CJ, EJ</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
