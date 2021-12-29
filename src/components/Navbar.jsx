import React from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom';

const Container = styled.div`
    background-color:black;
    border-top: 1px solid white;
    display:flex;
    justify-content:space-around;
    
`
const Enlace = styled(Link)`
    color: white;
    font-size:24px;
    padding:8px;
    text-decoration:none;
` 

const ParteDeAbajo = () => {
    return (
        <Container>
            <Enlace to='/'>Planetas </Enlace>
            <Enlace to="/favorite">Favoritos</Enlace>
        </Container>
    )
}

export default ParteDeAbajo
