import React from 'react';

type Props = {
  onMove: () => void;
  onRotateLeft: () => void;
  onRotateRight: () => void;

};

const Controls: React.FC<Props> = ({ onMove, onRotateLeft, onRotateRight}) => {
  return (
    <div className="mt-4 space-x-2 flex justify-center">
      <button
        onClick={onMove}
        className=" bg-orange text-white "
      >
        Move Forward
      </button>
      <button
        onClick={onRotateLeft}
        className=" bg-black text-white "
      >
        Rotate Left
      </button>

      <button
        onClick={onRotateRight}
        className=" bg-black text-white "
      >
        Rotate Right
      </button>
      
    </div>
  );
};

export default Controls;
