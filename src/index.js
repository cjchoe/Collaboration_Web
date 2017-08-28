import React from 'react';
import ReactDOM from 'react-dom';
//import App from './containers/App';
import { BrowserRouter, Route, IndexRoute, Switch, Link } from 'react-router-dom';
import { App, Home, Home2, Login, Register } from 'containers';
import {BodyContent, CollaboChat, Footer, FullHeightUI, ReactNativeEJ} from 'components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import E_Manager from './Managers/E_Manager';

const rootElement = document.getElementById('root');
const store = createStore(reducers, applyMiddleware(thunk)); // 뭔지 모름 리덕스 연결 개념일듯


ReactDOM.render(
  <Provider store={store}>
        <BrowserRouter>
        <div>
          <Route path = "/" component={App}/>
          <Route exact path= "/" component={Home}/>
          <Route path= "/home2" component={Home2}/>

          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/render" component={BodyContent}/>
          <Route path="/collabo" component={CollaboChat}/>
          <Route path="/collabo_temp" component={FullHeightUI}/>
          <Route path="/native_temp" component={ReactNativeEJ}/>

        </div>
        </BrowserRouter>
  </Provider>, rootElement
);

//ReactDOM.render(<App/>, rootElement);

// <div id="root">
//   <App></App>
// </div>
// <div id="root2">
//   <App></App>
// </div>
