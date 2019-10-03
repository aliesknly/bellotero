import React from 'react'
import {Switch, Route} from 'react-router-dom';
//Components
import Page1 from './pages/Page1';
import Configurator from './pages/Configurator';
import Home from "./Home";


const Routes = () =>{
    return(
        <Switch >
            <Route path="/" exact component={Home}/>
            <Route path="/page-1" exact component={Page1}/>
            <Route path="/page-2" exact component={Configurator}/>
        </Switch>
    )
};

export default Routes