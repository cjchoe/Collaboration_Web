import React from 'react';
import ReactDOM from 'react-dom';
//import App from './containers/App';
import { BrowserRouter, Route, IndexRoute, Switch, Link } from 'react-router-dom';
<<<<<<< HEAD
import { App, Home, Home2, Login, Register } from 'containers';
import {BodyContent, CollaboChat, Footer, FullHeightUI, ReactNativeEJ} from 'components';
=======
import { App, Home, Login, Register } from 'containers';
import {BodyContent, CollaboChat, Footer} from 'components';
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import E_Manager from './Managers/E_Manager';

const rootElement = document.getElementById('root');
const store = createStore(reducers, applyMiddleware(thunk)); // 뭔지 모름 리덕스 연결 개념일듯
<<<<<<< HEAD

=======
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
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57

ReactDOM.render(
  <Provider store={store}>
        <BrowserRouter>
        <div>
<<<<<<< HEAD
          <Route path = "/" component={App}/>
          <Route exact path= "/" component={Home}/>
          <Route path= "/home2" component={Home2}/>

=======
          <Route exact path = "/" component={App}/>
          <Route path="/home" component={Home}/>
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/render" component={BodyContent}/>
          <Route path="/collabo" component={CollaboChat}/>
<<<<<<< HEAD
          <Route path="/collabo_temp" component={FullHeightUI}/>
          <Route path="/native_temp" component={ReactNativeEJ}/>

=======


          <Footer/>
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
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
