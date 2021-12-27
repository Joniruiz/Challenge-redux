import axios from 'axios'

// Const
const dataInicial = {
    allPlanets:[],
    array:[],
    count : 1 ,
    favorite:[],
    searchResult:[]

}
const OBTENER_PLANETAS_EXITO ='OBTENER_PLANETAS_EXITO'
const NEXT_PAGE ='NEXT_PAGE'
const PREV_PAGE = 'PREV_PAGE'
const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'
const ALL_PLANETS_EXITO =  'ALL_PLANETS_EXITO' 
const SEARCH_RESULT = 'SEARCH_RESULT'

//Reducer
export default function planetReducer (state = dataInicial,action){
    switch (action.type) {
        case OBTENER_PLANETAS_EXITO:
            return{...state , array:action.payload}

        case NEXT_PAGE:
            return{...state,array:action.payload.array , count: action.payload.count}

        case PREV_PAGE:
            return{...state,array:action.payload.array , count: action.payload.count}
       
        case ADD_TO_FAVORITE:
            return{...state , favorite: action.payload}
        case ALL_PLANETS_EXITO:
            return {...state,allPlanets:action.payload}
        case SEARCH_RESULT:
            return {...state,searchResult:action.payload}
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

export const nextPage = () => async (dispatch,getState) =>{

    const count = getState().planetas.count
    const siguiente = count + 1

    try {
        const res = await axios.get(`https://swapi.dev/api/planets/?page=${siguiente}`)
        dispatch({
            type: NEXT_PAGE,
            payload: {
                array : res.data.results,
                count: siguiente
            }
        })
    }catch(error){
        console.log(error)
    }
}

export const prevPage = () => async (dispatch,getState) =>{

    const count = getState().planetas.count
    const anterior = count - 1

    try {
        const res = await axios.get(`https://swapi.dev/api/planets/?page=${anterior}`)
        dispatch({
            type: PREV_PAGE,
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

export const allPlanets = () => async(dispatch,getState) =>{

    const promises = [
        axios.get(`https://swapi.dev/api/planets/?page=1`),
        axios.get(`https://swapi.dev/api/planets/?page=2`),
        axios.get(`https://swapi.dev/api/planets/?page=3`),
        axios.get(`https://swapi.dev/api/planets/?page=4`),
        axios.get(`https://swapi.dev/api/planets/?page=5`),
        axios.get(`https://swapi.dev/api/planets/?page=6`)
    ]
    const promise = await Promise.all(promises)
    let res = []

    promise.forEach(element =>{
        res= [...res,...element]
    })
    console.log('estamos en planeta ducks',res)
    dispatch({
        type:ALL_PLANETS_EXITO,
        payload: res.data.results
    })
}

export const searchResultados = (searchResult) => (dispatch,getState) =>{
    
    dispatch({
        type: SEARCH_RESULT,
        payload: searchResult
    })
}
