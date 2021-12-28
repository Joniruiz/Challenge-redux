import React from "react";
import styled from 'styled-components'
import {useDispatch } from "react-redux";
import {searchResultados} from '../redux/planetsDucks'
import useForm from '../hooks/useForm'
import {useNavigate} from 'react-router-dom';

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
    
   const navigate = useNavigate();
    const [{keywords}, handleInputChange, reset] = useForm({
        keywords: "",
    })
    
    const dispatch = useDispatch();
const handleSearch = (e) =>{
    e.preventDefault()
    if(keywords !== ''){
        dispatch(searchResultados(keywords));
        reset()
        
        
    }
    navigate("/resultados")
}
    return (
        <SearchBar>
            <form onSubmit={handleSearch}>
            <Input type='search' name="keywords" onChange={handleInputChange} value={keywords} /><Button type='submit' ><i className="fas fa-rocket"></i></Button>
            </form>
        </SearchBar>
    )
}

export default Search
