import React from 'react';
import { connect } from 'react-redux';
import E_RenderWindow from '../containers/RenderWindow'; // 기본 루트에서 못 불러옴. -> why? , 시간 날 때 해결
import E_Manager from '../Managers/E_Manager';
import "./CollaboChat.css";

class CollaboChat extends React.Component {
    constructor(props){
      super(props);
      this.Manager = new E_Manager();

      this.state={
        ChatContent:'',
        ChatRender:'none'
      }
      this.handleSignal();
    }

    handleSignal(){
      let that = this;

      this.props.socket.on('SIGNAL_JOIN', function(data){
        console.log(data);
      });

       this.props.socket.on('SIGNAL_CHAT', function(data){
        console.log(data);
        let nextState = {};

        let renderData = "\n" + data;
        nextState.ChatRender = that.state.ChatRender += renderData;
        that.setState(nextState);
      });

    }

    onButtonClick(){
      let Log = document.getElementById('chatlog');

      this.props.socket.emit('SIGNAL_CHAT',this.state.ChatContent);

      let nextState = {};
      nextState.ChatContent = '';
      this.setState(nextState);
    }

    handleChange(e) {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
    }

    render() {
        return (
            <div>
              <div className="row">
                    <div className="col s12 m6 l9">
                      <button onClick={this.Manager.OnClickCube.bind(this.Manager)}> Cube </button>

                      <button onClick={this.Manager.OnClickSphere.bind(this.Manager)}> Sphere </button>

                      <button onClick={this.Manager.OnClickTorus.bind(this.Manager)}> Torus </button>

                      <button onClick={this.Manager.DoAnimate.bind(this.Manager)}> Animate </button>

                      <button onClick={this.Manager.CancelAnimate.bind(this.Manager)}>Stop </button>

                      <E_RenderWindow Manager={this.Manager} value = {10}/>
                    </div>

                  <div className="col s12 m6 l3">
                    <div className="col">
                      <div className="row s12 m6 l3">
                        <h3> Online Users </h3>
                          <table>
                            <thead>
                              <tr>
                                  <th>ID</th>
                                  <th>Entrance time</th>
                              </tr>
                            </thead>
                              <tbody>
                                <tr>
                                  <td>CJ</td>
                                  <td>13:00</td>
                                </tr>
                                <tr>
                                  <td>EJ</td>
                                  <td>14:00</td>
                                </tr>
                                <tr>
                                  <td>Gerome</td>
                                  <td>13:00</td>
                                </tr>
                            </tbody>
                          </table>
                      </div>


                      <div className="row s12 m6 l6">
                        <pre>
                        <textarea id="chatlog" value={this.state.ChatRender} className="materialize-textarea">
                        </textarea>
                        </pre>
                      </div>

                      <div className="row s12 m6 l3">
                              <div className="row">
                                <div className="input-field col s12 m6 l10">
                                  <i className="material-icons prefix">textsms</i>

                                  <input name='ChatContent' type="text" id="autocomplete-input" className="autocomplete" value={this.state.ChatContent}  onChange={this.handleChange.bind(this)}/>

                                  <label for="autocomplete-input">Text</label>
                                    <button onClick={this.onButtonClick.bind(this)} className="btn waves-effect waves-light" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                    </button>
                                </div>
                              </div>
                      </div>
                    </div>
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



export default connect(mapStateToProps)(CollaboChat);
