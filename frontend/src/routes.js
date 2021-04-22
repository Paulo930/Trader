import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./auth";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RegisterTrades from "./pages/RegisterTrades";
import Trader from "./pages/Trader";
import Graphic from "./pages/Graphic";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";

const PrivateRoute = ({ component: Component, ...rest  }) => (
    <Route { ...rest } render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
    )} />
)
const PublicRoute = ({ component: Component, ...rest  }) => (
    <Route { ...rest } render={props => (
        isAuthenticated() ? (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            ) : (
                <Component {...props} />
        )
    )} />
)

export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <PublicRoute exact path="/register" component={Register} />
                <PublicRoute exact path="/login" component={Login} />
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <PrivateRoute exact path="/registertrades" component={RegisterTrades} />
                <PrivateRoute exact path="/trader" component={Trader} />
                <PrivateRoute exact path="/graphic" component={Graphic} />
                <Route path="*" component={PageNotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
