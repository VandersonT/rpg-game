import { useState } from 'react'
import { CharacterSides } from '../types/CharacterSides';
import { mapSpots } from '../data/mapSpots'

export const useCharacter = () => {

    const [pos, setPos] = useState({x: 3, y: 5});
    const [side, setSide] = useState<CharacterSides>('down');
    const speed = .1;

    const moveLeft = () => {
        setPos(pos => ({
            x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
            y: pos.y
        }));

            setSide('left');
    }

    const moveRight = () => {
        setPos(pos => ({
            x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
            y: pos.y
        }));

        setSide('right');
    }

    const moveDown = () => {
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y
        }));

        setSide('down');
    }

    const moveUp = () => {
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y
        }));

        setSide('up');
    }

    const canMove = (x: number, y: number) => {

        if(x < 0 || y < 0 || x > 14 || y > 13) return false;

        if(mapSpots[y][x] === 0) return false;

        return true;
    }

    return {
        x: pos.x,
        y: pos.y,
        moveLeft,
        moveRight,
        moveDown,
        moveUp,
        side
    };

}