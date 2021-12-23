import React, { useEffect, useState } from "react";

//imports de redux
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerPlanetasAccion,
  siguientesPlanetasAccion,
  previaPlanetasAccion,
  addToFavorite
  
} from "../redux/planetsDucks";

const Planetas = () => {
  
  const [favorito, setFavorito] = useState([])

  const dispatch = useDispatch();

  const planetas = useSelector((store) => store.planetas.array);
  const count = useSelector((store) => store.planetas.count);

 const handleFavorite  = (planet) =>{
     setFavorito([...favorito,planet])
 }
 useEffect(() => {
  dispatch(addToFavorite(favorito))
 }, [favorito])

 useEffect(() => {
    let datos = favorito
    console.log(datos)
 }, [favorito])

 console.log('aca el favorito', favorito)

  const [planets , setPlanets] = useState([])

  useEffect(() => {
    if(planetas){
      setPlanets(planetas)
    }
  }, [planetas])

  const [keywords, setKeywords] = useState('')
  const [searchResult, setSearchResult] = useState([])

  /* CONSUMIR API DE UNA */

  useEffect(() => {
    dispatch(obtenerPlanetasAccion())
  }, [])

const handleSearch = () =>{
  let result = planets.filter( element => element.name.toLowerCase().includes(keywords.toLowerCase()) )
  console.log(result)
  
  setSearchResult(result)
}



  return (
    <div>

      <div>
        <input type='text' onChange={(e) => setKeywords(e.target.value) }  />
        <button onClick={()=> handleSearch()}>buscar</button>
      </div>
      Lista de planetas
      
      <ul>
        {planetas.map((item) => (
            <>
            
          <li key={item.name}> <input onClick={() => handleFavorite(item)}  type ='checkbox'/>{item.name}</li>
          </>
        ))}
      </ul>
      {
          count <= 1 ? null : <button onClick={() => dispatch(previaPlanetasAccion())}>
          Anterior pagina
        </button>
          
      }
      
      
      <button onClick={() => dispatch(siguientesPlanetasAccion())}>
        Siguiente pagina
      </button>
    </div>
  );
};

export default Planetas;

//sudo /opt/lampp/lampp start
