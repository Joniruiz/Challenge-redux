import React, {useEffect,useState } from "react";
import styled from 'styled-components'
import {useSelector } from "react-redux";

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
    right: 33px;
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

    const planetas = useSelector((store) => store.planetas.array);

    const [planets , setPlanets] = useState([])


    useEffect(() => {
      if(planetas){
        setPlanets(planetas)
      }
    }, [planetas])

    const [keywords, setKeywords] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const handleSearch = () =>{
        let result = planets.filter( element => element.name.toLowerCase().includes(keywords.toLowerCase()) )
        console.log(result)
        
        setSearchResult(result)
      }

    return (
        <SearchBar>
            <Input type='search' onChange={(e) => setKeywords(e.target.value) } /><Button type='submit' onClick={()=> handleSearch()}><i class="fas fa-rocket"></i></Button>
            
        </SearchBar>
    )
}

export default Search
