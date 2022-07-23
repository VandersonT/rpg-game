import { useState } from 'react'

export const useCharacter = () => {

    const [pos, setPos] = useState({x: 3, y: 5});
    const speed = .2;

    const moveLeft = () => {
        setPos(pos => ({
            x: pos.x - speed,
            y: pos.y
        }));
    }

    const moveRight = () => {
        setPos(pos => ({
            x: pos.x + speed,
            y: pos.y
        }));
    }

    const moveDown = () => {
        setPos(pos => ({
            x: pos.x,
            y: pos.y + speed
        }));
    }

    const moveTop = () => {
        setPos(pos => ({
            x: pos.x,
            y: pos.y - speed
        }));
    }

    return {
        x: pos.x,
        y: pos.y,
        moveLeft,
        moveRight,
        moveDown,
        moveTop
    };

}