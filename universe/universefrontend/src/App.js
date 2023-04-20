import React, { Component } from "react";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Messenger from "./pages/Messenger/Messenger";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import CreatePost from "./pages/CreatePost/CreatePost";


import { BrowserRouter as Router, Switch, 
  Route, Redirect} from "react-router-dom";


function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={Home} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/profile" component={Profile} />
          <Route path="/messenger" component={Messenger} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
  
export default App;

