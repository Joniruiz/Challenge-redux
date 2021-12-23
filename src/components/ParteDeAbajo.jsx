import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color:black;
    border-top: 1px solid white;
    justify-content:space-around;
    display:flex
    
`
const A = styled.a`
    font-size:24px;
    padding:8px;
    color: white;
    text-decoration:none;
` 



const ParteDeAbajo = () => {
    return (
        <Container>
            <A href="">Planetas</A>
            <A href="">Favoritos</A>
        </Container>
    )
}

export default ParteDeAbajo
