"use client";
import React, { useState } from 'react';
import Grid from "@/components/Grid"; 
import Hero from "@/components/Hero";
import Robot from "@/components/Robot";
import Footer from "@/components/Footer";

import Controls from "@/components/Controls";

const Home: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState<'N' | 'E' | 'S' | 'W'>('N');

  const moveForward = () => {
    console.log('Move Forward button clicked');

    setPosition((prev) => {
      console.log('Previous Position:', prev, prev.y, prev.x);
      console.log('Direction:', direction);

      const newPos = { ...prev };
      if (direction === 'N' && prev.y > 0) newPos.y--;
      if (direction === 'E' && prev.x < 4) newPos.x++;
      if (direction === 'S' && prev.y < 4) newPos.y++;
      if (direction === 'W' && prev.x > 0) newPos.x--;
      console.log('New Position:', newPos);

      return newPos;
    });
  };

  const rotateLeft = () => {
    setDirection((prev) => {
      const directions = ['N', 'W', 'S', 'E'];
      const currentIndex = directions.indexOf(prev);
      return directions[(currentIndex + 1) % 4] as 'N' | 'E' | 'S' | 'W';
    });
  };

  const rotateRight = () => {
    setDirection((prev) => {
      const directions = ['N', 'E', 'S', 'W'];
      const currentIndex = directions.indexOf(prev);
      return directions[(currentIndex + 1) % 4] as 'N' | 'E' | 'S' | 'W';
    });
  }; 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <div className="px-20 pb-8">
        <h2>Let&apos;s Go!</h2>
        <p className='text-center'>Use the rotate buttons to determine the direction of the Robot by its antenna. Then press move forward to move him across a square</p>
      </div>
      <div className="relative p-10 bg-white br_shadow-button">
        <Grid />
        <Robot x={position.x} y={position.y} direction={direction} />
      </div>
      <Controls onMove={moveForward} onRotateLeft={rotateLeft} onRotateRight={rotateRight}/>

      <Footer></Footer>
    </main>
  );
};

export default Home;
