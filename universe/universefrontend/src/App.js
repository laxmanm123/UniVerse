import React, { Component, useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Messenger from "./pages/Messenger/Messenger";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import CreatePost from "./pages/CreatePost/CreatePost";
import {getEvents} from "./api";
import { GoogleOAuthProvider } from '@react-oauth/google';

import { BrowserRouter as Router, Switch, 
  Route, Redirect} from "react-router-dom";

function App() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      setEvents(events)
      console.log(events);
    };
    fetchEvents();
  }, []);

  return (
    <>

    <h1> { events.map(event => <h2 key = {event.id}>{event.eventTitle}</h2>)} </h1>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <GoogleOAuthProvider clientId="805040466500-ive5e8oeebvngubg54v1gatfg10ch803.apps.googleusercontent.com">
      <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home}/>
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/profile" component={Profile} />
          <Route path="/messenger" component={Messenger} />

          
          <Redirect to="/profile" />
        </Switch>
      </Router>
      </GoogleOAuthProvider>
    </>
  );
}
  
export default App;

