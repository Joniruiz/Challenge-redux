import React from 'react'
import Planetas from './components/Planetas'
import {Provider} from 'react-redux'
import generateStore from './redux/store';
import Favorite from './components/Favorite'
import { Header } from './components/Header';
import ContainerCards from './components/ContainerCards';
import ParteDeAbajo from './components/ParteDeAbajo';
import Pages from './components/Pages';
import styled from 'styled-components'
import background from './assets/fondo-stars2.jpeg'

const ProviderBack = styled.div`
  background-image:url(${background});
  background-size:cover;
  
`

function App() {

  const store = generateStore()

  return (
    
    <Provider store = {store}>
      <ProviderBack>
      <Header/>
      <ParteDeAbajo/>
      

      <ContainerCards/>
      <Pages/>
      </ProviderBack>
    </Provider>
    
  );
}

export default App;
