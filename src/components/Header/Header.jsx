import React, { useState } from 'react'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'
import './Header.css'

export default () => {
    const [showMenu, setShowMenu] = useState(false)
    let responsiveMenu
    
   
    
    if(showMenu){
        responsiveMenu = 
                <ul className="itens-responsive">
                    <li><a href="/"><Icon.Home></Icon.Home>&nbsp;Home</a></li>
                    <li><a href="/Projects"><Icon.Activity></Icon.Activity>&nbsp;Projects</a></li>
                    <li><a href="/About"><Icon.List></Icon.List>&nbsp;About-Us</a></li>
                   
                    
                </ul>
       
        }      
    return(
        <React.Fragment>
        <nav className="header">
            
            <div className="logo">
                <h1><a>Matheus Ferraz<br/>
                    Front-End Developer</a>
                </h1>
                
            </div>
           
            
            <input type="checkbox" id="checkbox-menu" onClick={() => setShowMenu(!showMenu)}/>
            <label htmlFor="checkbox-menu">
               <span></span>
               <span></span>
               <span></span>
            </label>
            
            
            <ul className="itens">
                <li><a href="/"><Icon.Home spacing={10}></Icon.Home>&nbsp; Home</a></li>
                <li><a href="/Projects"><Icon.Activity></Icon.Activity>&nbsp; Projects</a></li>
                <li><a href="/About"><Icon.List></Icon.List>&nbsp; About-Us</a></li>
                
             </ul>
             
        </nav>
        {responsiveMenu}
        
        </React.Fragment>
    )
}