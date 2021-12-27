import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo-SW.png'
import Search from './Search'

const Contenedor = styled.div `
background:black;
display : flex;
padding:30px;
justify-content:space-around;
align-items: center;
`





export const Header = () => {
    return (
        <Contenedor>
            <a href="/">
            <img src={Logo} alt="" />
            </a>
            <Search/>
        </Contenedor>
    )
}
