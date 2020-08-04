import React from 'react'
import logo from '../../assets/img/logo.png'
import './menu.css'
import ButtonLink from './components/ButtonLink'

function Menu() {
    return (
        <nav className="menu">
            <a href="/">
                <img className="logo" src={logo} alt="Azeflix logo" />
            </a>

            <ButtonLink href={"/"} className={"buttonLink"}>
                Novo video
            </ButtonLink>
        </nav>


    )
}

export default Menu