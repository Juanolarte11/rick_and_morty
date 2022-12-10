import {DELE_PERSONAJE, ADD_PERSONAJE} from "../actions/type"

const inicialState = {
    myFavorites: []
}

export function rootReducer (state = inicialState, actions) {
    switch(actions.type){
        case ADD_PERSONAJE:
            return{
                ...state,
                myFavorites:[...state.myFavorites, actions.payload]
            }
        case DELE_PERSONAJE:
            const personajeId = state.myFavorites.filter((ele) => ele.id !== actions.payload);
            return{
                ...state,
                myFavorites: personajeId
            }
        default:
            return{...state}
    }
}