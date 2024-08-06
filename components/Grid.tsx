import React from 'react';

const Grid: React.FC = () => {
  return (
    <div className="grid grid-cols-5 gap-1">
      {Array.from({ length: 25 }).map((_, i) => (
        <div key={i} className="w-12 h-12 border border-orange">

        </div>
      ))}
    </div>
  );
};

export default Grid;