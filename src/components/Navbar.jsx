import React from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom';

const Container = styled.div`
    background-color:black;
    border-top: 1px solid white;
    justify-content:space-around;
    display:flex
    
`
const Enlace = styled(Link)`
    font-size:24px;
    padding:8px;
    color: white;
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
