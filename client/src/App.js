import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AddFriend from './container/AddFriend';
// import FriendList from './container/friend_list';
// import ListFiles  from './components/component_ListFiles';
import Login from './container/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Registration from './container/Registration';
import Header from './components/header';
import users_list from "./container/users_list";
import dashboard from "./container/dashboard";

class App extends Component {

  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <Header/>
                  <Switch>
                      <Route path="/app/registration" component={Registration}/>
                      <Route path="/app/users_list" component={users_list}/>
                      <Route path="/app/dashboard" component={dashboard}/>
                      <Route path="/" component={Login}/>
                  </Switch>
              </div>
          </BrowserRouter>

      </div>
    );
  }
}

function mapStateToProps(state){
    return state.App;
}

export default connect(mapStateToProps,null)(App);
