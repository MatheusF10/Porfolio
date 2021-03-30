import React, { useEffect, useState } from 'react'
import * as Icon from 'react-feather'
import { BrowserRouter, Link } from 'react-router-dom'
import './Header.css'

export default () => {
              
    
    return(
        <React.Fragment>
        <nav className="header">
            
            <div className="logo">
                <h1><Link className="link" to="/">Matheus Ferraz<br/>
                    Front-End Developer</Link>
                </h1>
                
            </div>
           
            
            
            
            
                <ul className="itens">
                    <li><Link className="link" to="/"><Icon.Home className="icon" size={25}></Icon.Home>&nbsp; Home</Link></li>
                    <li><Link className="link" to="/Projects"><Icon.Activity className="icon" size={25}></Icon.Activity>&nbsp; Projects</Link></li>
                    <li><Link className="link" to="/About"><Icon.List className="icon" size={25}></Icon.List>&nbsp; About-Us</Link></li>
                
                </ul>
            
            
             
        </nav>
       
        
        </React.Fragment>
    )
}