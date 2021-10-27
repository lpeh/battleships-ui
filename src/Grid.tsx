import React, { useState } from 'react';
import { gameMap, gameRow, gameColumnHeader, gameRowHeader, gameSquare, gameSquareFilled, emptySquare } from './styles.css';

type CallBack = () => void;

export function Cell(props: {row: number, col: number, parentOnClick: CallBack})
{
    const [count, setCount] = useState(0);

    function onClick()
    {
        count === 0 ? setCount(1) : setCount(0)
        props.parentOnClick()
    }

    let style = count === 0 ? gameSquare : gameSquareFilled;

    return (
        <td key={`R${props.row}C${props.col}`} className={style} onClick={onClick} />
    )
}

export default function Grid()
{
    const [count, setCount] = useState(0);

    function onClick()
    {
        setCount(count + 1)
    }

    let rowIds = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    let columnIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    let rows: Array<Array<JSX.Element>> = [];
    let columnHeaders: Array<JSX.Element> = [ <th key="EH0" className={emptySquare}>{count}</th> ];
    for (let col = 0; col < 10; col++) {
        columnHeaders.push(<th key={`CH${col}`} className={gameColumnHeader}>{columnIds.at(col)}</th>)
    }
    for (let row = 0; row < 10; row++) {
        let columns: Array<JSX.Element> = [ <th key={`RH${row}`} className={gameRowHeader}>{rowIds.at(row)}</th> ];
        for (let col = 0; col < 10; col++) {
            columns.push(<Cell key={`R${row}C${col}`} row={row} col={col} parentOnClick={onClick} />)
        }
        rows.push(columns);    
    }

    return (
        <div>
            <table className={gameMap}>
                <thead>
                    <tr key="H0" className={gameRow}>{columnHeaders.map((columnHeader, i) => columnHeader)}</tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => <tr key={`R${i}`} className={gameRow}>{row.map((column, i) => column)}</tr>)}
                </tbody>
            </table>
        </div>
    )
}