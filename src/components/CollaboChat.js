import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import CollaboRenderer from './CollaboRenderer';
import "./CollaboChat.css";

class CollaboChat extends React.Component {
    constructor(props){
      super(props);

      this.state={
        ChatContent:'',
        ChatRender:''
      }
      //Client ID, --> should be moved to state
      //this.client_id = new Date();
      if(this.props.LoginStatus === true){
        this.client_id = this.props.UserStatus;
      }
      else {
        this.client_id = 'Guest';
      }
    }

    componentDidMount()
    {
      this.props.manager.socketMgr.SetChatComponent(this);
    }

    componentWillUnmount(){
      this.props.manager.socketMgr.UnMountComponent();
    }

    onChatSignal(data){
      console.log(data);
      let nextState = {};

      let renderData = "\n" + data;
      nextState.ChatRender = this.state.ChatRender += renderData;
      this.setState(nextState);

      //Set Scroll to Bottom
      const textarea = ReactDOM.findDOMNode(this.chatRenderElemenent);
      textarea.scrollTop = textarea.scrollHeight;
    }

    //
    // handleSignal(){
    //   let that = this;
    //
    //   this.props.socket.on('SIGNAL_JOIN', function(data){
    //     that.client_id = data;
    //     console.log(data);
    //   });
    //
    //    this.props.socket.on('SIGNAL_CHAT', function(data){
    //     let nextState = {};
    //
    //     let renderData = "\n" + data;
    //     nextState.ChatRender = that.state.ChatRender += renderData;
    //     that.setState(nextState);
    //
    //     //Set Scroll to Bottom
    //     const textarea = ReactDOM.findDOMNode(that.chatRenderElemenent);
    //     textarea.scrollTop = textarea.scrollHeight;
    //   });
    //
    // }

    onButtonClick(){
      if(this.state.ChatContent.length === 0){
        return;
      }

      const data = this.client_id + " : " + this.state.ChatContent;
      this.props.manager.socketMgr.socket.emit('SIGNAL_CHAT',data);
      let nextState = {};
      nextState.ChatContent = '';
      this.setState(nextState);
    }

    handleChange(e) {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
    }

    handleKeyPress(e){

      switch(e.charCode){
        case 13:
          this.onButtonClick();
        break;

        default:
        break;
      }
    }

    render() {
        return (
          <div>
              <div className="row">
                <div className="col s12 m6 l9">
                  <CollaboRenderer />
                </div>

                <div className="col s12 m6 l3">
                  <div className="row s12 m6 l3">
                      <table className="responsive-table striped highlight centered">
                        <caption><strong><h3>Online Users</h3></strong></caption>
                        <thead>
                          <tr>
                              <th>ID</th>
                              <th>Entrance time</th>
                          </tr>
                        </thead>
                          <tbody>
                            <tr>
                              <td>CJ</td>
                              <td>13:07</td>
                            </tr>
                            <tr>
                              <td>EJ</td>
                              <td>13:11</td>
                            </tr>
                            <tr>
                              <td>Gerome</td>
                              <td>13:08</td>
                            </tr>
                        </tbody>
                      </table>
                  </div>


                  <div className="row s12 m6 l6">
                    <textarea
                      id="chatlog"
                      value={this.state.ChatRender}
                      className="materialize-textarea"
                      ref={(el) => { this.chatRenderElemenent = el; }}/>
                  </div>

                  <div className="row s12 m6 l3">
                    <div className="input-field col s12 m6 l10">

                      <i className="material-icons prefix">textsms</i>
                      <input
                      name='ChatContent'
                      type="text"
                      id="autocomplete-input"
                      className="autocomplete"
                      value={this.state.ChatContent}
                      onKeyPress={this.handleKeyPress.bind(this)}
                      onChange={this.handleChange.bind(this)}/>
                      <label htmlFor="autocomplete-input">Text</label>
                    </div>
                    <div className = "col">
                      <button
                      onClick={this.onButtonClick.bind(this)}
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action">
                        Submit
                        <i className="material-icons right">send</i>
                      </button>
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
        LoginStatus: state.authentication.status.isLoggedIn,
        UserStatus: state.authentication.status.currentUser
    };
};



export default connect(mapStateToProps)(CollaboChat);
