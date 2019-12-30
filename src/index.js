//Basic React Elements
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import ReactDOM from 'react-dom'

//Custom React Elements
import NavBar from './js/navBar.js'
import Body from './js/body.js'

//CSS Imports
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

//Redux Imports
import {store} from './store/store.js'

const rootElement = document.getElementById("root");


function App(){
    return (
        <div>
            <Switch>
                <Route path="/Courses">
                    <NavBar topic="Courses"/>
                    <Body topic="Courses"/>
                </Route>
                <Route path="/About">
                    <NavBar topic="About" />
                    <Body topic="About" />
                </Route>
                <Route exact path="/Home">
                    <NavBar topic="Home"/>
                    <Body topic="Home"/>
                </Route>
                <Route exact path="/">
                    <NavBar topic="Home"/>
                    <Body topic="Home"/>
                </Route>
                <Route path="*">
                    <NavBar topic="404"/>
                    <Body topic="404"/>
                </Route>
            </Switch>
        </div>
    )
}
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    rootElement
);





// ReactDOM.render(NavBar,document.querySelector("#root"))
