import React from 'react';
import { MSBoard } from '../Board/Board';

export class MSGame extends React.Component {
    state = {
        height: 8,
        width: 8,
        mines: 10
    }

    render() {
        const { height, width, mines } = this.state;
        return (
            <div className='game'>
                <MSBoard height={height} width={width} mines={mines}/>
            </div>
        )
    }
}