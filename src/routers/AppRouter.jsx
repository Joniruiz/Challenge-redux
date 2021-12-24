
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContainerCards from '../components/ContainerCards'
import Favorite from '../components/Favorite'
import ParteDeAbajo from '../components/ParteDeAbajo'

import React from 'react'


const AppRouter = () => {

   
    return (
        
        <BrowserRouter>
        <ParteDeAbajo/>
            <Routes>
                <Route path='/' element ={<ContainerCards/> }/>
                <Route path='/favorite' element ={<Favorite/> }/>
            </Routes>
        </BrowserRouter>
        
    )
}

export default AppRouter

