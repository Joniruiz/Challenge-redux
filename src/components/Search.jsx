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
    background-color: rgba(238,236,159,0.3);
    border-radius: 10px;
    color:yellow;
    margin-right:25px;
    outline:none;
    padding:8px;
    width:100%;

`
const Button = styled.button`
    background-color:transparent;
    border:none;
    color:yellow;
    cursor:pointer;
    height:35px;
    position:absolute;
    right: 46px;
    transition: 0.5s ease-in-out;
    top:0px;
    &:hover{
        transform:scale(1.3);    
    }
`

const Search = () => {
    
    const [{keywords}, handleInputChange, reset] = useForm({
        keywords: "",
    })
    
    const navigate = useNavigate();
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
