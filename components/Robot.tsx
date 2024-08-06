import React from 'react'
import { GrRobot } from "react-icons/gr";


type Props = {
    x: number;
    y: number;
    direction: 'N' | 'E' | 'S' | 'W';
  };

const Robot: React.FC<Props> = ({x, y, direction}) => {
    const directionStyles = {
        N: 'rotate-0',
        E: 'rotate-90',
        S: 'rotate-180',
        W: 'rotate-270',
    };

  return (
    <div
    className={`w-12 h-12 marker:absolute ${directionStyles[direction]}`}
    style={{ 
        transform: "translate(${x * 3rem}, ${y * 3rem})" 
    }}
    >
    <GrRobot />

    </div>
  )
}

export default Robot