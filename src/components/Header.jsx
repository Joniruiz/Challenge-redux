import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo-SW.png'
import Search from './Search'

const Contenedor = styled.div `
    align-items: center;
    background:black;
    display : flex;
    justify-content:space-around;
    padding:30px;
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

