import { useState } from 'react'
import { CharacterSides } from '../types/CharacterSides';

export const useCharacter = () => {

    const [pos, setPos] = useState({x: 3, y: 5});
    const [side, setSide] = useState<CharacterSides>('down');
    const speed = .2;

    const moveLeft = () => {
        setPos(pos => ({
            x: pos.x - speed,
            y: pos.y
        }));
        setSide('left');
    }

    const moveRight = () => {
        setPos(pos => ({
            x: pos.x + speed,
            y: pos.y
        }));
        setSide('right');
    }

    const moveDown = () => {
        setPos(pos => ({
            x: pos.x,
            y: pos.y + speed
        }));
        setSide('down');
    }

    const moveTop = () => {
        setPos(pos => ({
            x: pos.x,
            y: pos.y - speed
        }));
        setSide('up');
    }

    return {
        x: pos.x,
        y: pos.y,
        moveLeft,
        moveRight,
        moveDown,
        moveTop,
        side
    };

}