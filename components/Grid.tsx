import React from 'react';

const Grid: React.FC = () => {
  return ( 

        <div className="relative grid grid-cols-5 gap-1 w-75 h-75 ">
        {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-12 h-12 border border-orange bg-bluegrey br_shadow-button"></div>
        ))}
        </div>
   
  );
};

export default Grid;
