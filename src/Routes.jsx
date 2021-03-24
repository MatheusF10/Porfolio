import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Projects from './components/Projects/Projects'

export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
             <Route exact path="/" component={Main}/>
            <Route exact path="/Projects" component={Projects}/>
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact}></Route>
        </Switch>
    </BrowserRouter>
    )
}