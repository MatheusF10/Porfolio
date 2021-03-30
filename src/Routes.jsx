import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import About from './components/About/About'
import Main from './components/Main/Main'
import Projects from './components/Projects/Projects'

export default function Routes(){
    return(
    
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/Projects" component={Projects}/>
            <Route exact path="/About" component={About} />
        </Switch>
    
    )
}