import React from 'react'
import Cards from './Cards'
import styled from 'styled-components'
import background from '../assets/backgroundstars2.jpg'
import Pages from './Pages'

import 'animate.css'

const Fragment = styled.div`
background-image: url(${background});
background-repeat: no-repeat;
background-size:cover;
background-attachment: fixed;
padding: 25px 0;
margin-bottom:0px;
min-height:100vh;
`

const ContainerCard = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin:0 auto;
    justify-content:center;
   

    
`

const ContainerCards = () => {
    return (
        <Fragment>
        <ContainerCard className='animate__animated animate__zoomIn' >
            <Cards />     
       </ContainerCard>
        <Pages/>
        
        </Fragment>
    )
}

export default ContainerCards
