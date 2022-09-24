import { MSCell } from '../Cell/Cell';
import React,{useState,useEffect} from "react";
import CreateBoard from '../utils/CreateBoard';
import { revealed } from '../utils/Reveal';
import Button from 'react-bootstrap/Button';
import '../../../app/MS.css'

export const MSBoard = () => {
    const [grid, setGrid] = useState([]);
    const [mineLocation,setMineLocation]=useState([]);
    const [nonMinecount, setNonMinecount] = useState(80);
    const [isOver, setIsOver] = useState(false)


    useEffect(() => {
        const freshBoard = () => {
            const newBoard = CreateBoard(10, 10, 20)
            setGrid(newBoard.board)
            setMineLocation(newBoard.mines)
        }
        freshBoard()
    }, [])

    const updateFlag=(e,x,y)=>{
        e.preventDefault();
        // deep copy of the object
        let newGrid=JSON.parse(JSON.stringify(grid));
        if (newGrid[x][y].flagged === false) {
            newGrid[x][y].flagged = true;
        }
        else {
            newGrid[x][y].flagged = false;
        }
        
        setGrid(newGrid);
    }

    //revealing all cells and the minelocation with all mines when clicked on mines
    const revealcell=(x,y)=>{
        let newGrid=JSON.parse(JSON.stringify(grid));
        if (newGrid[x][y].flagged) return
        if (isOver) return
        if(newGrid[x][y].value==="💣"){
            for(let i=0;i<mineLocation.length;i++){
                newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed=true;
            }
            setGrid(newGrid);
            setIsOver(true)
        }
        else{
            if (!isOver) {
                let revealedboard=revealed(newGrid,x,y,nonMinecount);
                setGrid(revealedboard.arr);
                setNonMinecount(revealedboard.newNonMines);
            }
            else return
        }
        
    }

    const restart = () => {
        const newBoard2 = CreateBoard(10, 10, 20)
        setGrid(newBoard2.board)
        setMineLocation(newBoard2.mines)
        setIsOver(false)
        setNonMinecount(80)

    }

    return (
        <div className="parent">
            {isOver ? <div><div className='MScases'> You lost !</div><Button variant="primary" onClick={restart} className="MSbutton">Try again</Button></div> : ''}
            {nonMinecount === 0 && <div className='MScases'> You win !</div>}
           {!isOver && <div className='MScases'>Cases left : {nonMinecount}</div>}
            <div>
                
                {grid.map((singlerow,index1)=>{
                    return (
                        <div className='MSgame' key={index1}>
                            {singlerow.map((singlecol,index2)=>{
                            return  <MSCell details={singlecol} key={index2} updateFlag={updateFlag} revealcell={revealcell}/>
                            })}
                        </div>
                    )
                })}
            </div>
          
        </div>
    )
}
