import React from 'react';
import { Link } from 'react-router-dom';

class MainBackground extends React.Component{
  render()
  {
    return(
      <div>
              <div id="img_container"><img src="bionics.jpg" alt="Unsplashed background img 1" /></div>

                <div className="container">
                    <div className="section">
                      <div className="row">
                        <div className="col s12 m4">
                          <div className="icon-block">
                            <h2 className="center black-text"><i className="large material-icons">local_airport</i></h2>
                            <h3 className="center">Goal</h3>
                            <h5 className="center">innovative medical service.</h5>

                            </div>

                        </div>

                        <div className="col s12 m4">
                          <div className="icon-block">
                            <h2 className="center black-text"><i className="large material-icons">group</i></h2>
                            <h3 className="center">How</h3>
                            <h5 className="center">Medical team & Modeling expert</h5>

                          </div>
                        </div>

                        <div className="col s12 m4">
                          <div className="icon-block">
                            <h2 className="center black-text"><i className="large material-icons">settings</i></h2>
                            <h3 className="center">System</h3>
                            <h5 className="center">Real-time application</h5>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>


      </div>

    )
  }
}


export default MainBackground;
