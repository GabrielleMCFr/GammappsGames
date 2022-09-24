import React from 'react'
import '../../../app/MS.css'

export const MSCell = ({details,updateFlag, revealcell}) => {


    
    
    return (
        <div className='MScell' onClick={()=>{revealcell(details.x,details.y)}} onContextMenu={(e)=>updateFlag(e,details.x,details.y)}>
            { details.flagged ? '🚩' : details.revealed ? details.value : ""}
        </div>
    )
}