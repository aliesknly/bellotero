import React from 'react'
import {Switch, Route} from 'react-router-dom';
//Components
import Page1 from './pages/Page1';
import Configurator from './pages/Configurator';


const Routes = () =>{
    return(
        <Switch>
            <Route path="/page-1" component={Page1}/>
            <Route path="/page-2" component={Configurator}/>
        </Switch>
    )
}

export default Routes