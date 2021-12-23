import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
    siguientesPlanetasAccion,
    previaPlanetasAccion, 
  } from "../redux/planetsDucks";

const Pages = () => {

    const count = useSelector((store) => store.planetas.count);
    const dispatch = useDispatch();


    return (
        <div>
             {
          count <= 1 ? null : <button onClick={() => dispatch(previaPlanetasAccion())}>
          Anterior pagina
        </button>
          
      }
      <p>{count}</p>
      
      
      <button onClick={() => dispatch(siguientesPlanetasAccion())}>
        Siguiente pagina
      </button>
        </div>
    )
}

export default Pages
