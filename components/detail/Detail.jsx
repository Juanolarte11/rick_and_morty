import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react"
import style from "./Detail.module.css"

export default function Detail() {
    const { detailId } = useParams();

    const [character,setCharacter] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

    const handleClick = () => {
        navigate('/home')
    }


    return(
        <div>
            <div className={style.contenedor}>{character ? <div>
            <h1 className={style.nombre}>{character.name}</h1>
            <h5>{character.status}</h5>
            <h5>{character.species}</h5>
            <h5>{character.gender}</h5>
            <h5>{character.origin?.name}</h5>
            <img src={character.image} className={style.imagen}/>
            </div>: ''}</div>
            <button onClick={handleClick} className={style.boton}>go home</button>
        </div>
    )
}