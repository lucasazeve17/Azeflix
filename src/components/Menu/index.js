import React from 'react'
import logo from '../../assets/img/logo.png'
import './menu.css'
import ButtonLink from './components/ButtonLink'
import {Link} from 'react-router-dom'

function Menu() {
    return (
        <nav className="menu">
           <Link to="/">
                <img className="logo" src={logo} alt="Azeflix logo" />
           </Link>
            

            <ButtonLink to={"/cadastro/video"} className={"buttonLink"}>
                Novo video
            </ButtonLink>
        </nav>


    )
}

export default Menu