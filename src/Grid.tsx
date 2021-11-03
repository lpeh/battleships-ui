import React, { useState } from 'react';
import { createShip, ShipClass } from './BattleshipModel';
import { gameMap, gameRow, gameColumnHeader, gameRowHeader, gameSquare, gameSquareFilled, emptySquare } from './styles.css';

type CallBack = () => void

export function Cell(props: { row: number, col: number, parentOnClick: CallBack }) {
    const [count, setCount] = useState(0);

    function onClick() {
        count === 0 ? setCount(1) : setCount(0)
        props.parentOnClick()
    }

    const style = count === 0 ? gameSquare : gameSquareFilled;

    return (
        <td key={`R${props.row}C${props.col}`} className={style} onClick={onClick} />
    )
}

export function Ship(props: { shipType: ShipClass, state: boolean, onClick: (shipClass: ShipClass) => void})
{
    function onClick() {
        props.onClick(props.shipType)    
    }

    return (
        <label>
            <input type="radio" name="fleet" checked={props.state ? true : undefined} onChange={onClick} />
            {props.shipType}
        </label>
    )
}

export function Fleet() {
    const [selection, setSelection] = useState<ShipClass>()

    function onShipSelected(shipClass: ShipClass) {
        setSelection(shipClass)
    } 

    const fleet = [ 
        ShipClass.Carrier, 
        ShipClass.Battleship,
        ShipClass.Destroyer,
        ShipClass.Submarine,
        ShipClass.PatrolBoat
    ]

    function getSelection() : JSX.Element | undefined {
        if (selection) {
            return <p>{selection}</p>
        }
    }

    return (
        <div>
            {getSelection()}
            {fleet.map((shipType, i) => <Ship key={`${i}`} shipType={shipType} onClick={onShipSelected} state={selection === shipType} />)}
        </div>    
    )
}

export default function Grid() {
    const [count, setCount] = useState(0);
    const [ship, setShip] = useState(createShip(ShipClass.Carrier))

    function onClick() {
        setCount(count + 1)
        if (ship) {
            ship.overlapsWith(ship)
        }
    }

    const columnIds = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    const rowIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    const rows: JSX.Element[][] = [];
    const columnHeaders = [<th key="EH0" className={emptySquare}>{count}</th>];
    for (let col = 0; col < 10; col++) {
        columnHeaders.push(<th key={`CH${col}`} className={gameColumnHeader}>{columnIds[col]}</th>)
    }
    for (let row = 0; row < rowIds.length; row++) {
        const columns = [<th key={`RH${row}`} className={gameRowHeader}>{rowIds[row]}</th>];
        for (let col = 0; col < columnIds.length; col++) {
            columns.push(<Cell key={`R${row}C${col}`} row={row} col={col} parentOnClick={onClick} />)
        }
        rows.push(columns);
    }

    return (
        <div>
            <table className={gameMap}>
                <thead>
                    <tr key="H0" className={gameRow}>{columnHeaders}</tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => <tr key={`R${i}`} className={gameRow}>{row}</tr>)}
                </tbody>
            </table>
        </div>
    )
}