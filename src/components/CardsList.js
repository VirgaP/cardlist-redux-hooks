
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCards} from '../store/actions/cardActions'
import {Card} from './Card'

const CardsList = () => {
    const dispatch = useDispatch()
    const cardsListData = useSelector(state => state.cardsList)    
    const {loading, error, cards} = cardsListData
    
    useEffect(() => {
        dispatch(getCards()) 
      }, [dispatch])

    return (
        <div className="list-container">
            {loading ? "Loading..." : error ? error.message : cards.map(c => <Card name={c.name} status={c.statusKey} src={c.studyThumbnail}/>)}
        </div>
    )
}

export default CardsList
