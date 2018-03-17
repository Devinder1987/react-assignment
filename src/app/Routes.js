// route configuration


import React from "react";

import {
       BrowserRouter as Router,  
       Route, 
        Switch,
        } from "react-router-dom";

        
import {App} 
        from "./App";


import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
 
// functional component
export default function Routes(props) {
    return (
        <Router>
            <App color='white'>
               <Switch>
                    <Route path="/"  exact   component={Home} />

                    
                    <Route path="/about"   component={About} />

                    <Route path="/contact"   component={Contact} />
                    <Route path="*"   component={NotFound} />
                </Switch>
            </App>
        </Router>
    )
}
