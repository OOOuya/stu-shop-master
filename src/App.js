import logo from './logo.svg';
import './App.css';
import React from "react"
import {adminRoutes} from "./routes/index"
import {Redirect, Route, Router, Switch} from "react-router-dom";
import Frame from "./components/frame/index";
import './App.css';
function App() {
    return (
        <div className="App">
            <Frame>
                <Switch>
                    {adminRoutes.map(route => {
                        return <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            render={routeProps => {
                                return <route.component {...routeProps}/>;
                            }}
                        />
                    })}
                    <Redirect to={"/404"}/>
                </Switch>
            </Frame>
        </div>
    );
}

export default App;
