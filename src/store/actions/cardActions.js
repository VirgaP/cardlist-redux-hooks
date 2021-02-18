import {GET_CARDS, CARDS_ERROR} from '../types'
import http from '../../api/http'

export const getCards = () => async dispatch => {
    return http.axiosInstance
    .get('/data')
    .then((response) => {
        if(response.status === 200){
        dispatch( {
        type: GET_CARDS,
        payload: response.data
        })
    } 
        return response
    })
    .catch((error) => {
        console.log(error)
        dispatch( {
        type: CARDS_ERROR,
        payload: error,
        })
    })
}
