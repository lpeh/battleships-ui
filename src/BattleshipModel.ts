export enum ShipClass {
    Carrier = "Carrier",
    Battleship = "Battleship",
    Destroyer = "Destroyer",
    Submarine = "Submarine",
    PatrolBoat = "Patrol boat"
}

export type Coord = {
    row: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J'
    col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}

export type Coords = {
    start: Coord,
    end: Coord
}

export interface Ship {
    readonly shipClass: ShipClass
    size: 2 | 3 | 4 | 5
    location: Coords
    overlapsWith(other: Ship): boolean
}

export function isCarrier(ship: Ship): boolean {
    if (ship.shipClass === ShipClass.Carrier && ship.size === 5) {
        return true
    } else {
        return false
    }
}

export function isValidLocation(ship: Ship): boolean {
    if (isCarrier(ship)) {
        return isHorizontal(ship.location) || isVertical(ship.location);
    } else {
        return false;
    }
}

export function isHorizontal(location: Coords): boolean {
    return location.start.row === location.end.row
}

export function isVertical(location: Coords): boolean {
    return location.start.col === location.end.col;
}

export function createShip(shipClass: ShipClass): Ship | undefined {
    if (shipClass === ShipClass.Carrier) {
        return {
            shipClass: shipClass,
            size: 5,
            location: {
                start: { row: 'A', col: 1 },
                end: { row: 'A', col: 5 }
            },
            overlapsWith: (other: Ship): boolean => {
                return false
            }
        }
    }
    return undefined;
}