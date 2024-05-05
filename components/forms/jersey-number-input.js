'use client'
import React from 'react';

const JerseyNumberInput = ({ value, onChange }) => {
  // Function to handle button clicks
  const handleButtonClick = (number) => {
    // Concatenate the clicked number to the existing jersey number
    onChange(value + number);
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };


  // Function to handle clearing the input
  const handleClear = () => {
    onChange('');
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Jersey Number'
        value={value}
        onChange={handleInputChange}
        className='border border-gray-300 rounded-md px-3 py-2 mb-4'
      />
      {/* Button grid for entering numbers */}
      <div className='grid grid-cols-3 gap-4'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleButtonClick(number)}
            className='border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100'
          >
            {number}
          </button>
        ))}
        {/* Clear button */}
        <button
          type="button"
          onClick={handleClear}
          className='border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100'
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default JerseyNumberInput;
