import React from 'react';

type Props = {
  onMove: () => void;
  onRotate: () => void;
};

const Controls: React.FC<Props> = ({ onMove, onRotate }) => {
  return (
    <div className="mt-4 space-x-2 flex justify-center">
      <button
        onClick={onMove}
        className=" bg-orange text-white "
      >
        Move Forward
      </button>
      <button
        onClick={onRotate}
        className=" bg-black text-white "
      >
        Rotate
      </button>
    </div>
  );
};

export default Controls;
