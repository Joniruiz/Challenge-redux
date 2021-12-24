import React from 'react'
import {Provider} from 'react-redux'
import generateStore from './redux/store';

import { Header } from './components/Header';

import ParteDeAbajo from './components/ParteDeAbajo';
import AppRouter from './routers/AppRouter';


function App() {

  const store = generateStore()

  return (
    
    <Provider store = {store}>
      
      <Header/>
      
      

      <AppRouter/>
      
    </Provider>
    
  );
}

export default App;
