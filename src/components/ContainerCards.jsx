import React from 'react'
import Cards from './Cards'
import styled from 'styled-components'

const ContainerCard = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin:0 auto;
    justify-content:center;
    
`

const ContainerCards = () => {
    return (
        <ContainerCard>
            <Cards/>
        </ContainerCard>
    )
}

export default ContainerCards
