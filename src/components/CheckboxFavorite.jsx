import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root:{
    '&.MuiButtonBase-root': {
      color: 'yellow',
      width: '99px',
    '&.Mui-checked':{
        color: 'yellow'
      }
      
    },
  }
}));
export default function IconCheckboxes({favorito,setFavorito,item}) {

  

  const handleFavorite  = (planet) =>{
    setFavorito([...favorito,planet])
    
}

  
   const styles = useStyles({color: "#whatevercoloryouwant"})
       

  return (
    <div>
      <Checkbox onClick={()=>handleFavorite(item)} className={styles.root} icon={<FavoriteBorder xs={{color:'white'}} />} checkedIcon={<Favorite />} />
      
    </div>
  );
}