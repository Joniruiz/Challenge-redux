import axios from 'axios'

// Const
const dataInicial = {
    array:[],
    count : 1 ,
    favorite:[]

}
const OBTENER_PLANETAS_EXITO ='OBTENER_PLANETAS_EXITO'
const SIGUIENTE_PLANETA_EXITO ='SIGUIENTE_PLANETA_EXITO'
const PAGINA_PREVIA_EXITO = 'PAGINA_PREVIA_EXITO'
const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'

//Reducer
export default function planetReducer (state = dataInicial,action){
    switch (action.type) {
        case OBTENER_PLANETAS_EXITO:
            return{...state , array:action.payload}

        case SIGUIENTE_PLANETA_EXITO:
            return{...state,array:action.payload.array , count: action.payload.count}

        case PAGINA_PREVIA_EXITO:
            return{...state,array:action.payload.array , count: action.payload.count}
       
        case ADD_TO_FAVORITE:
            return{...state , favorite: action.payload}
        default:
            return state
    }
}

//Acciones
export const obtenerPlanetasAccion = () => async (dispatch, getState) =>{

    console.log('getstate', getState().planetas.count)

    const count = getState().planetas.count
    
    try {
        const res = await axios.get(`https://swapi.dev/api/planets/?page=${count}`)
        dispatch({
            type:'OBTENER_PLANETAS_EXITO',
            payload: res.data.results
        })
        
    }catch(error){
        console.log(error)
    }
}

export const siguientesPlanetasAccion = () => async (dispatch,getState) =>{

    const count = getState().planetas.count
    const siguiente = count + 1

    try {
        const res = await axios.get(`https://swapi.dev/api/planets/?page=${siguiente}`)
        dispatch({
            type: SIGUIENTE_PLANETA_EXITO,
            payload: {
                array : res.data.results,
                count: siguiente
            }
        })
    }catch(error){
        console.log(error)
    }
}

export const previaPlanetasAccion = () => async (dispatch,getState) =>{

    const count = getState().planetas.count
    const anterior = count - 1

    try {
        const res = await axios.get(`https://swapi.dev/api/planets/?page=${anterior}`)
        dispatch({
            type: PAGINA_PREVIA_EXITO,
            payload: {
                array : res.data.results,
                count: anterior
            }
        })
    }catch(error){
        console.log(error)
    }
}

export const addToFavorite =(favorito) => (dispatch,getState) =>{

    dispatch({
        type: ADD_TO_FAVORITE,
        payload: favorito
    })
}

