import './App.css';
import React from "react"
import {adminRoutes} from "./routes/index"
import {Redirect, Route, Switch} from "react-router-dom";
import Frame from "./components/frame/index";
import {isLogin} from './utils/auth'

function App() {
    return (isLogin() ? (
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
                        <Redirect to={adminRoutes[0].path} from={"/admin"}/>
                        <Redirect to={"/404"}/>
                    </Switch>
                </Frame>
            </div>) :
        (<Redirect to={"/login"}/>));
}

export default App;
