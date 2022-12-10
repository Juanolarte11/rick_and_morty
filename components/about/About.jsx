import React from "react";
import style from "./About.module.css"

export default function About() {
    return(
        <div className={style.about}>
            <h3 className={style.titulo}>Aplicacion de rick and morty</h3>
            <p className={style.parrafo}>Hola buenas, mi nombre es juan sebastian olarte, tengo 21 años, esta es mi primera aplicacion y trata de los siguiente.El usuario ingresa un numero, y lo que hace la app es que de acuerdo al numero ingresado lo toma como id y hace un llamado a una api de rick and morty entonces devuelve el personaje con el id ingresado, con una pequeña descripcion.</p>
        </div>
    )
}