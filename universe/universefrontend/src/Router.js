import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Products from './components/products/Products';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/" exact component={Home} />
                    <Route path="/Home" exact component={Home} />
                    <Route path="/profile" component={Profile} />
          <Route path="/messenger" component={Messenger} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/createpost" component={CreatePost} />

                </Switch>
            </Router>
        )
    }
}

            