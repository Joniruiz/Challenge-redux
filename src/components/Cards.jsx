import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import CheckboxFavorite from './CheckboxFavorite'

//imports de redux
import { useDispatch, useSelector } from "react-redux";
import {obtenerPlanetasAccion} from "../redux/planetsDucks";

const Container = styled.div`
    align-items:flex-start;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid black;
    border-radius:4px;
    color:white;
    display:flex;
    flex-direction:column;
    margin:5px 10px 15px 10px;
    max-height:500px;
    padding-bottom:20px;
    padding-left: 15px;
    width: 230px;

&:hover{
    box-shadow: 5px 5px 5px 0px rgba(255,255,255,0.2);
}
`
const PClassname = styled.div`
    display:flex;
    justify-content: space-between;
    width:248px;
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


const Cards = () => {
    
    const dispatch = useDispatch();

    const [favorito, setFavorito] = useState([])

    const planetas = useSelector((store) => store.planetas.array);
    
    useEffect(() => {
        dispatch(obtenerPlanetasAccion())
      }, []) 
      
    
    return (
        <>
        { 
            planetas.map((item) => (

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
            
        </>
    )
}
export default Cards
