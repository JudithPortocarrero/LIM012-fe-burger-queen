import React from 'react'
import './styles/cabeceraMesero.css'
import logo from '../images/logoBG.png'
import { Link } from "react-router-dom";

const Cabecera = () => {
    return (
        <header>
            <div className='contenedorSaludo'>
                <p className='saludo'>Hola,cocinero</p>
                <Link to="/" className='linkHome'><img className='logo' src ={logo} alt="Logo Burger"/></Link>
            </div>
        </header>
    )
 }

export default Cabecera;