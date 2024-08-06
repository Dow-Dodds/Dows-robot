"use client";
import React, { useState } from 'react';
import Grid from "@/components/Grid"; 
import Hero from "@/components/Hero";
import Robot from "@/components/Robot";

const Home: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState<'N' | 'E' | 'S' | 'W'>('N');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Hero></Hero>
      <Grid></Grid>
      <Robot
        x={position.x}
        y={position.y}
        direction={direction}
      ></Robot>
      

   
    </main>
  );
}

export default Home;

