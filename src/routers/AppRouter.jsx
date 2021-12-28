
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContainerCards from '../components/ContainerCards'
import Favorite from '../components/Favorite'
import Navbar from '../components/Navbar'
import {Header} from '../components/Header'


import React from 'react'
import SearchResult from '../components/SearchResult';


const AppRouter = () => {
    
   
    return (
        
        <Router>
        <Header/>
        <Navbar/>
            <Routes>
                <Route path='/' element ={<ContainerCards /> }/>
                <Route path='/favorite' element ={<Favorite /> }/>
                <Route path='/resultados' element ={<SearchResult /> }/>
            </Routes>
        </Router>
        
    )
}

export default AppRouter

