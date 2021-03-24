import React from 'react'
import * as Icon from 'react-feather'
import {Link } from 'react-router-dom'

export default function Contact(){
    return(
        <>
        <div id="background">
        <div className="content">
            <h1>Contact</h1>  
            <div className="apresentation"><Link to="/Projects"><Icon.ChevronRight color='black' size={25}></Icon.ChevronRight></Link></div>
        </div>
    </div>
    <div className="color-bar"><h1>Contact-me!</h1></div>
    </>
    )
}