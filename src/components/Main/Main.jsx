import React from 'react'
import * as Icon from 'react-feather'
import './Main.css'
import Note from '../../img/Note.jpg'
import Fotis from '../../img/fotis.jpg'
import react from '../../img/Icons/React.png'
import wordpress from '../../img/Icons/Wordpress.png'
import html from '../../img/Icons/HTML.png'
import css from '../../img/Icons/CSS3.png'
import mongodb from '../../img/Icons/MongoDB.png'
import sass from '../../img/Icons/Sass.png'
import node from '../../img/Icons/Node.png'
import js from '../../img/Icons/JS.png'
import code from '../../img/Montage.png'
import { Link } from 'react-router-dom'



export default function Main(){
    return(
        <>
        <div id="background">
            <div className="content">
                <h1>Home</h1>  
                <div className="apresentation"><Link to="/Projects"><Icon.ChevronRight color='black' size={25}></Icon.ChevronRight></Link></div>
            </div>
        </div>
        <div className="color-bar"><h1>Welcome!</h1></div>
        <div className="card">
            <div className='card-content'>
               
                <div className="text-content">
                <h1>Desenvolvimento De Aplicações Web e Websites.</h1>
                <p>Desenvolvo Sites, de Pequeno, médio e grande Porte Seguindo uma Infraestrutura e uma arquitetura Organizada de Códigos.

                A qualidade de um App ou web-site não é somente a Stack ou as linguagens usadas e sim o profissional que o constrói, sou um apaixonado por programação, que se dedica ao maximo e se empenha para a construção de web-sites e apps de qualidade focando agradar o cliente.

                Construções de site em Wordpress, em HTML, CSS, e javascript, e utilizando frameworks para criação de aplicações web.</p>
                </div>
                <div className="image-content">
                    <img src={Fotis} alt=""/>
                </div>
                
            </div>
            <div className='card-content-2'>
                <div className="text-content">
                <h1>Uso de Tecnologias Estáveis e atualizadas.</h1>
                <p>A segurança de um site não se dá apenas pelo seu protocolo, e sim por sua própria arquitetura, sites feitos com tecnologias desatualizadas e sem suporte, podem gerar problemas, de desempenho, segurança, e até dificultar na manutenção, por isso uso as tecnologias do momento.

                O mesmo com o Wordpress que pode ser muito vulnerável caso haja o uso de algum plugin desatualizado em sua estrutura, por isso mesmo usando o wordpress sigo muitas normas de segurança como updates, plugins confiaveis, senhas de banco de dados,
                e hospedagem de confiança.</p>
                </div>
                <div className="image-content">
                    <img src={Note} alt=""/>
                </div>
            </div>
        </div>
            <div className="iconsContainer">
                
               
                <div className="descriptionContainer">
                <h1>Tecnologias Usadas</h1>
                <div className="companyContainer">
                    <img src={react} alt=""/>
                    <img src={node} alt=""/>
                    <img src={sass} alt=""/>
                    <img src={css} alt=""/>
                    <img src={html} alt=""/>
                    <img src={wordpress} alt=""/>
                    <img src={mongodb} alt=""/>
                    <img src={js} alt=""/>
                    <br/>
                    
                    
                </div>
                    <h1>Projetos FullStack.</h1>
                    <h1>React, Javascript, Wordpress, Sass, <br></br>mongoDB, Node.js, HTML5, CSS3</h1>
                    <p>Uso de Frameworks da atualidade, Construções de site em Wordpress <br></br>HTML, CSS, e javascript utilizando <br></br>frameworks para criação de aplicações web e web-sites.</p>
                    <div className="projectContainer">
                        <h1>My Finance! Primeiro Projeto FullStack.</h1>
                        <img src={code} alt=""/>
                    </div>
                    
                    
                </div>
            </div>
            <div className='contactContainer'>
                <h1>Entre em contato comigo!</h1>
                <h3>Email: matdavykk@gmail.com</h3>
                <h3>Telefone: +351 927 608 627</h3>
            </div>
        </>
           
    )
   
}