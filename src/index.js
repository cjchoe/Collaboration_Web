import React from 'react';
import ReactDOM from 'react-dom';
//import App from './containers/App';
import { BrowserRouter, Route, IndexRoute, Switch, Link } from 'react-router-dom';
import { App, Home, Login, Register } from 'containers';
import {BodyContent, CollaboChat, Footer} from 'components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import E_Manager from './Managers/E_Manager';

const rootElement = document.getElementById('root');
const store = createStore(reducers, applyMiddleware(thunk)); // 뭔지 모름 리덕스 연결 개념일듯
//let root2Element = document.getElementById('root2');
/*
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
            <Route path="login" component={Login}/>
            <Route path="register" component={Register}/>
        </Route>
    </Router>, rootElement
);*/

/*
ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      </Route>
    </Switch>
  </BrowserRouter>
  ), rootElement
);*/

ReactDOM.render(
  <Provider store={store}>
        <BrowserRouter>
        <div>
          <Route exact path = "/" component={App}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/render" component={BodyContent}/>
          <Route path="/collabo" component={CollaboChat}/>


          <Footer/>
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
