import React from 'react';
import { GrRobot } from 'react-icons/gr';

type Props = {
  x: number;
  y: number;
  direction: 'N' | 'E' | 'S' | 'W';
};

const Robot: React.FC<Props> = ({ x, y, direction }) => {
  const directionStyles = {
    N: 'rotate-0',
    E: 'rotate-90',
    S: 'rotate-180',
    W: 'rotate-270',
  };

  const cellSize = 3; // Size of one grid cell in rem
  const gap = 0.25; // Grid gap in rem
  const padding = 0.3; // Padding in rem


  // Convert position to translate values
  const translateX = `${x * (cellSize + gap)}rem`; // Add gap to cell size
  const translateY = `${y * (cellSize + gap)}rem`; // Add gap to cell size

  // Debugging console logs
  console.log('Robot Position:', { x, y });
  console.log('Calculated translateX:', translateX);
  console.log('Calculated translateY:', translateY);
  console.log('Direction:', directionStyles[direction], direction);

  return (
    <div
      className={`w-12 h-12 absolute flex items-center justify-center`}
      style={{ 
        transform: `translate(${translateX}, ${translateY})`,
        // Ensure that the rotation is correctly applied to the icon
        transformOrigin: 'center center',
        top: '2.5rem', // Positioning the robot 1rem from the top
        padding: `${padding}rem`, // Adding padding to the container
      }}
    >
      <GrRobot 
        className={`w-full h-full ${directionStyles[direction]} transition-transform color-black`}
      />
    </div>
  );
};

export default Robot;
