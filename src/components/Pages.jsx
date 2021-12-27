import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {nextPage,prevPage } from "../redux/planetsDucks";
import styled from 'styled-components'

const Paged = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

const NumberPage = styled.span`
  color:white;
  font-size:22px;
  font-weight:999;
`

const ButtonPage = styled.button`
  margin:5px 20px 5px 20px;
  background-color: black;
  color: yellow;
  padding:15px;
  width:100px;
  border-radius:5px;
  border:none;
  font-weight:999;
  cursor:pointer;

  &:hover{
    background-color:yellow;
    color:black;
    transition: 0.5s ease-in-out;
    font-weight:999;
  }
`



const Pages = () => {

    const count = useSelector((store) => store.planetas.count);
    const dispatch = useDispatch();

    
    return (
        <Paged>
             {
          count <= 1 ? null : <ButtonPage onClick={() => dispatch(prevPage())}>
           <i class="fas fa-chevron-left"></i> BACK
        </ButtonPage>
          
      }
      <NumberPage>{count}</NumberPage>
      
      {count >= 6 ? null : <ButtonPage onClick={() => dispatch(nextPage())}>
        NEXT <i className="fas fa-chevron-right"></i>
      </ButtonPage>}
      
        </Paged>
    )
}

export default Pages
