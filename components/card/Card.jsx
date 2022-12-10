import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import {addPersonaje,delePersonaje} from "../../redux/actions/actions"
import { connect } from 'react-redux';
import { useState } from 'react';

 function Card(props) {

   const [isFav, setIsFav] = useState(false);

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         props.delePersonaje(props.id)
      }
      else{
         setIsFav(true)
         props.addPersonaje(props)
      }
   }

   return (
      <div className={styles.card}>
         <button onClick={props.onClose}>X</button>
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            )   :    (
            <button onClick={handleFavorite}>🤍</button>
            )
         }
         <img  src={props.image} alt=""   />
         <Link to={`/detail/${props.id}`} className={styles.Link}>
            <h2 className={styles.nombre}>{props.name}</h2>
         </Link>
         <h2 className={styles.species}>{props.species}</h2>
         <h2 className={styles.gender}>{props.gender}</h2>
      </div>
   );
}

export function mapStateToProps(state) {
   return{
      myFavorites: state.myFavorites
   }
} 

export function mapDispatchToProps (dispatch){
   return{
      addPersonaje:function(personaje){
         dispatch(addPersonaje(personaje))
      },
      delePersonaje:function(id){
         dispatch(delePersonaje(id));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)
