import React from 'react';
// Add import statement below
import { useSelector } from 'react-redux'
import { selectMatchedIDs, selectBoard } from '../board/boardSlice.js'

export const Score = () => {
    const cardsMatched = useSelector(selectMatchedIDs)
    const currentBoard = useSelector(selectBoard)
    if (currentBoard.length === 0) {
        
    }
    if (cardsMatched.length === currentBoard.length && currentBoard.length > 0) {
        return (
            // implement selected data inside <div>
        <div className="score-container">You win !</div>
        ) 
    }

    return (
        // implement selected data inside <div>
    <div className="score-container">Matched: {cardsMatched.length}</div>
    )
}