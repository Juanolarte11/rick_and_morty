import { ADD_PERSONAJE,DELE_PERSONAJE } from "./type"

export function addPersonaje(personaje) {
    return{
        type:ADD_PERSONAJE,
        payload:personaje
    }
}


export function delePersonaje(id){
    return{
        type:DELE_PERSONAJE,
        payload:id
    }
}