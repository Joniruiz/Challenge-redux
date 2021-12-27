import React, {useEffect,useState } from "react";
import styled from 'styled-components'
import {useSelector,useDispatch } from "react-redux";
import {allPlanets,searchResultados} from '../redux/planetsDucks'

const SearchBar = styled.div`
    position:relative;
    display:flex;
    width: 250px;
`
const Input = styled.input`
border-radius: 10px;
width:100%;
margin-right:25px;
background-color: rgba(238,236,159,0.3);
padding:8px;
color:yellow;

outline:none;
`
const Button = styled.button`
    position:absolute;
    top:0px;
    right: 46px;
    height:35px;
    background-color:transparent;
    border:none;
    color:yellow;
    cursor:pointer;
    transition: 0.5s ease-in-out;
    &:hover{
        transform:scale(1.3);    
    }
`

const Search = () => {

    const planetas = useSelector((store) => store.planetas.array);  // En casco de que quiera buscar por pagina , cambiar este dato del objeto por .array y tambien ejecutar la funcion obtenerPlanetasAccion()

    const [planets , setPlanets] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        allPlanets()
    }, []) 
    
    useEffect(() => {
      if(planetas){
        setPlanets(planetas)
      }
    }, [planetas])

    const [keywords, setKeywords] = useState('')
    const [searchResult, setSearchResult] = useState([])
    
    const handleSearch = (e) =>{
       e.preventDefault()
            let result = planets.filter( element => element.name.toLowerCase().includes(keywords.toLowerCase()) )
           
            return setSearchResult(result)
            
        }
    
    

    useEffect(() => {
        dispatch(searchResultados(searchResult))
    }, [searchResult])


    return (
        <SearchBar>
            <form>
            <Input type='search' onChange={(e) => setKeywords(e.target.value) } /><Button type='submit' onClick={(e)=> handleSearch(e)}><i class="fas fa-rocket"></i></Button>
            </form>
        </SearchBar>
    )
}

export default Search
