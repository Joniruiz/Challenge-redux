import React from 'react'
import { useDispatch, useSelector } from "react-redux";


const Favorite = () => {

    const favorites = useSelector((store) => store.planetas.favorite);

    return (
        <div>
            Lista Favoritos
            <ul>
                
                {favorites.map(item => (
                    <li key={item.name}>{item.name}, {item.terrain}</li>
                    
                ))}
            </ul>
        </div>
    )
}

export default Favorite
