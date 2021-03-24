import React from 'react'
import './Footer.css'

export default function Footer(){

    const date = new Date
    const year = date.getFullYear()
    return(
        <footer>
            <div>
            <h1><a href="/">Matheus Ferraz</a></h1>
            <h3>Front-End Developer</h3>
            <p>{year} | Criado por Matheus Ferraz</p>
            </div>
            
        </footer>
    )
}