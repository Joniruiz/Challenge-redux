import React,{useEffect} from 'react'
import styled from 'styled-components'
import background from '../assets/backgroundstars2.jpg'
import {deleteFavorite} from "../redux/planetsDucks";
import { useDispatch, useSelector } from "react-redux";


const Container = styled.div`
    align-items:flex-start;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid black;
    border-radius:4px;
    color:white;
    display:flex;
    flex-direction:column;
    margin:5px 10px 15px 10px;
    max-height:420px;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
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
    margin-bottom: 10px;
    padding-bottom: 80px;
    text-transform: uppercase;
`
const Fragment = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size:cover;
    height: 100%;
    margin-bottom:0px;
    padding: 25px 0;
`
const ContainerCard = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    justify-content:center;
    margin:0 auto;
    min-height: 100vh;

    `

const MessageNoFavorites = styled.p`
    color: white;
    font-size: 32px;
    height: 100vh;
`

const ButtonDeleteFavorite = styled.button`
 
    background-color: black;
    border-radius:5px;
    border:none;
    bottom: 10px;
    color: yellow;
    cursor:pointer;
    font-weight:999;
    margin:0 65px 0 65px;
    padding:15px;
    position: absolute;
    width:100px;
 

  &:hover{
    background-color:yellow;
    color:black;
    font-weight:999;
    transition: 0.5s ease-in-out;
  }
`

    const Favorite = () => {

    const dispatch = useDispatch();

    const favorites = useSelector((store) => store.planetas.favorite);

    useEffect(() => {
        
        console.log(favorites)
    }, [favorites])

    return (
        <Fragment>
            <ContainerCard>
       {
           favorites.length !== 0 ? favorites.map(item =>(
            <Container key={item.name}>
             <div>
                 <PClassname>
                 <Parrafos>Name</Parrafos>
                 
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
             <ButtonDeleteFavorite onClick={()=> dispatch(deleteFavorite(item))}>ELIMINAR</ButtonDeleteFavorite>
         </Container>
             ))
           :
           <MessageNoFavorites>No hay Favoritos</MessageNoFavorites>
           

        }
        </ContainerCard>
        </Fragment>
    )
}

export default Favorite
