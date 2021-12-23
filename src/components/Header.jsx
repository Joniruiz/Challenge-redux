import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo-SW.png'
import Search from './Search'

const Contenedor = styled.div `
background:black;
display : flex;
padding:30px;
justify-content:space-between;
align-items: center;
`





export const Header = () => {
    return (
        <Contenedor>
            <img src={Logo} alt="" />
            <Search/>
        </Contenedor>
    )
}
