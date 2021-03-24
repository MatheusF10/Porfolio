import React from 'react'
import * as Icon from 'react-feather'
import './Projects.css'
import montage from '../../img/Projects/MyFinance.png'
import projetoex from '../../img/Projects/ProjetoEx.png'
import portfolio1 from '../../img/Projects/Portfolio1.png'
import iss from '../../img/Projects/ISS.png'
import dut from '../../img/Projects/Dut-Construtora1.jpg'
import wp from '../../img/Projects/Sites-WP.jpg'
import conversor from '../../img/Projects/conversor.png'


export default function Projects(){
    return(
        <div>
            <div id="background">
            <div className="content">
                <h1>Projects</h1>  
                <div className="apresentation"><a href="/About"><Icon.ChevronRight color='black' size={25}></Icon.ChevronRight></a></div>
            </div>
            </div>
            <div className="color-bar"><h1>See the projects!</h1></div>
            <div className="card">
                <div className="projectContent">
                    <div>
                         <h1>My Finance!</h1>
                        <img src={montage} alt=""/> 
                        <p>Projeto feito utilizando a MERN Stack <br></br>MongoDB, Node.js, React e Express <br></br>utilizando Sass para a estilização</p>
                    
                    </div>
                        
                    
                    <div>
                        <h1>ACME</h1>
                        <img src={projetoex} alt=""/>
                        <p>Projeto feito com React, HTML, CSS e Javascript</p>
                    </div>
                   
                    <div>
                        <h1>Portfolio v1</h1>
                        <img src={portfolio1} alt=""/>
                        <p>Projeto construido com HTML, CSS e Javascript</p>
                    </div>
                    
                    <div> 
                        <h1>ISS</h1>
                        <img src={iss} alt=""/>
                        <p>Projeto construido com Wordpress e Elementor <br/>também utilizando HTML e CSS</p>
                    </div>

                    <div> 
                        <h1>DUT Construtora</h1>
                        <img src={dut} alt=""/>
                        <p>Projeto construido com HTML, CSS e JavaScript <br/>também utilizando PHP para um back-end de envio de e-mails</p>
                    </div>

                    <div> 
                        <h1>DUT Construtora v2 </h1>
                        <img src={wp} alt=""/>
                        <p>Projeto construido com Wordpress e Elementor <br/>também utilizando HTML e CSS</p>
                    </div>
                   
                   

                </div>
                    <div className="lastItem">
                        <h1>Cotaçaodamoeda.com</h1>
                        <img src={conversor} alt=""/>
                        <p>Projeto desenvolvido com HTML, CSS, Bootstrap, Javascript e Axios.</p>
                    </div>
            </div>
        </div>
    )
}