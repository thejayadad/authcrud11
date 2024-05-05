'use client'
import React from 'react';

const PlaysInput = ({ value, onChange }) => {
  // Function to handle incrementing the number of plays
  const incrementPlays = () => {
    onChange(value + 1);
  };

  // Function to handle decrementing the number of plays
  const decrementPlays = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <div className="flex items-center pt-4 w-full">
      {/* Minus button */}
      <button
        type="button"
        onClick={decrementPlays}
        className="px-3 py-1 rounded-l-md bg-gray-200 hover:bg-gray-300 "
      >
        -
      </button>
      {/* Input field for the number of plays */}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value) || 0)}
        className="border border-gray-300 rounded-none px-3 py-1 text-center w-full"
      />
      {/* Plus button */}
      <button
        type="button"
        onClick={incrementPlays}
        className="px-3 py-1 rounded-r-md bg-gray-200 hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
};

export default PlaysInput;
