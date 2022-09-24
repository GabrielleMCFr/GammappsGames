import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setNewGame } from "../TTTSlice";
import './End.css'

export const EndScreen = ({winner}) => {
    const dispatch = useDispatch()
    
    const isWinner = () => {
        if (winner === 'win') {
            return <p>You won!</p>
        }
        else if (winner === 'tie') {
            return <p>Tie!</p>
        }
        else {
            return <p>You lost!</p>
        }
    }

    const handleEnd = () => {
        dispatch(setNewGame())
    }

  
    return (
            <div className="end">
            {isWinner()}
            <br></br>
            <button onClick={handleEnd}>Go again</button>
        </div>
    )
         
}