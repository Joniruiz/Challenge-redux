import React,{ useEffect } from 'react'
import styled from 'styled-components'

import Favorito from './Favorito'


//imports de redux
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerPlanetasAccion
  
  
} from "../redux/planetsDucks";


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
padding-left: 15px
`


const Cards = () => {

    const dispatch = useDispatch();

    const planetas = useSelector((store) => store.planetas.array);

    useEffect(() => {
        dispatch(obtenerPlanetasAccion())
      }, [])

    return (
        <>
        {
            planetas.map((item) => (

        <Container key={item.name}>
            <div className='name'>
                <p>name</p>
                <Favorito/>
                <p>{item.name}</p>
            </div>
            <div className='diameter'>
                <p>diameter</p>
                <p>{item.diameter}</p>
            </div>
            <div className='climate'>
                <p>Climate</p>
                <p>{item.climate}</p>
            </div>
            <div className='terrain'>
                <p>Terrain</p>
                <p>{item.terrain}</p>
            </div>
       
        </Container>
            ))
        }
        </>
    )
}

export default Cards
