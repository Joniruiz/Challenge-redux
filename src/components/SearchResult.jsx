import React,{useState} from 'react'
import styled from 'styled-components'
import CheckboxFavorite from './CheckboxFavorite'
import {useSelector } from "react-redux";
import background from '../assets/backgroundstars2.jpg'

const Container = styled.div`
border: 1px solid black;
width: 230px;
display:flex;
flex-direction:column;
background: rgba(0, 0, 0, 0.7);
color:white;
border-radius:4px;
margin:5px 10px 15px 10px;
align-items:flex-start;
padding-left: 15px;
max-height:500px;
padding-bottom:20px;

&:hover{
    box-shadow: 5px 5px 5px 0px rgba(255,255,255,0.2);
}
`
const PClassname = styled.div`
display:flex;
width:248px;
justify-content: space-between;
`
const PValues = styled.p`
font-size:16px;
margin: 3px 0 5px 0;
text-transform: uppercase;
`
const Parrafos = styled.p`
color:grey
`
const ValuesTerrain = styled.p`
font-size:16px;
margin: 5px 0 10px 0;
text-transform: uppercase;
`
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

const MessageNoPlanet = styled.p`
font-size: 32px;
color: white;
`

const SearchResult = () => {
    const [favorito, setFavorito] = useState([])
    const resultados = useSelector((store) =>store.planetas.searchResult)



    return (

        <Fragment>
        <ContainerCard>
        {resultados.length === 0 ? <MessageNoPlanet>No tenemos un planeta con ese nombre</MessageNoPlanet> :
        resultados.map(item =>(
        <Container key={item.name}>
        <div>
            <PClassname>
            <Parrafos>Name</Parrafos>
            <CheckboxFavorite setFavorito={setFavorito} favorito={favorito} item={item} />
            </PClassname>
            <PValues>{item.name}</PValues>
        </div>
        <div className='diameter'>
            <Parrafos>Diameter</Parrafos>
            <PValues>{item.diameter}</PValues>
        </div>
        <div className='climate'>
            <Parrafos>Climate</Parrafos>
            <PValues>{item.climate}</PValues>
        </div>
        <div className='terrain'>
            <Parrafos>Terrain</Parrafos>
            <ValuesTerrain>{item.terrain}</ValuesTerrain>
        </div>
   
    </Container>

        ))
        
            
    }
   </ContainerCard>
   </Fragment>
    

    )
}

export default SearchResult