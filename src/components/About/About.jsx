import React from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather'
import './About.css'
import pic from '../../img/Me.jpg'
import finance from '../../img/Projects/MyFinance.png'
import whatsapp from '../../img/Icons/whatsapp.png'
import linkedin from '../../img/Icons/linkedin.png'
import face from '../../img/Icons/face.png'

export default function About(){
    const date = new Date
    const year = date.getFullYear() - 2019
    return(
        <>
        <div id="background">
        <div className="content">
            <h1>About-Us</h1>  
            <div className="apresentation"><Link to="/Projects"><Icon.ChevronRight color='black' size={25}></Icon.ChevronRight></Link></div>
        </div>
    </div>
    <div className="color-bar"><h1>Look more about me!</h1></div>
        <div className="aboutContainer">
            <div className="informationContent">
                <div>
                <h1>Matheus Ferraz</h1> 
                <h2>Front-End Developer</h2>

                <p>Passionate about what I do,<br></br> in search of professional growth, ambitious, and with a lot of yearning for my
                    future, <br></br>looking for a job as a front-end to help the company for which I  my profession. 
                </p>
                </div>
                <div className="picContainer">
                    <img src={pic} alt=""/>
                </div>
                
            </div>
            <div className="experienceContainer">
               
                <h1>{year} Years of Experience</h1>
                <h2>Building Apps and Web-Sites</h2>

                <h1>Dut Construtora</h1>
                <p>Company Website Development, using HTML, CSS and Javascript, <br></br>developing a simple backend using PHP
                for send E-mails </p>
                <br/>
                <h1>ISS</h1>
                <p>Company Website Development, using Wordpress, HTML, CSS, Javascript and PHP.</p>
                <br/>
                <h1>Portfolio v1</h1>
                <p>Development of Portfolio Web-site, using HTML, CSS and JavaScript. </p>
                
                <br/>
                <div>
                    <h1>ACME</h1>
                    <p>Landing Page Development to Technical test to a company, using React.js, Javascript, HTML, CSS</p>
                    <br/>
                    <h1>Cotação da Moeda</h1>
                    <p>Development of web application to convert coins, using Javascript, Bootstrap, CSS, HTML, Axios.</p>
                    <br/>
                    <h1>My Finance!</h1>
                    <p>Development of Web Application, i developed whole project as Full-Stack using the MERN Stack <br></br> developing the Back-End, and Front-End using technologies like<br></br>React.js, Javascript, HTML, Sass, Node.js and Express. </p>
                </div>

            </div>
            <div className="socialMidia">
                <a href="https://www.linkedin.com/in/matheus-ferraz-a0171718b/" target="_blank" ><img src={linkedin} alt=""/></a>
                <a href="https://api.whatsapp.com/send?phone=351927608627" target="_blank"><img src={whatsapp} alt=""/></a>
                <a href="https://www.facebook.com/matheusferraz2001/" target="_blank"><img src={face} alt=""/></a>

            </div>
        </div>
        </>
    )
}