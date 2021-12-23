import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
border-radius: 10px;
width: 250px;
margin-right:25px;
background-color:gray;
padding:12px;

outline:none;

`

const Button = styled.button`
border-radius:50px;
background-color: #5E1158 ;
color: white;
padding:10px;
text-decoration:none;



`

const Search = () => {
    return (
        <div>
            <Input type='search'/>
            <Button type='submit'>Buscar</Button>
        </div>
    )
}

export default Search
