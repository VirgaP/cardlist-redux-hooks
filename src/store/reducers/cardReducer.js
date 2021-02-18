import {GET_CARDS, CARDS_ERROR} from '../types'

const initialState = {
    cards:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_CARDS:
        return {
            ...state,
            cards: action.payload,
            loading:false
        }
        case CARDS_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}
