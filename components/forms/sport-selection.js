'use client'
// SportSelection.jsx
import React, { useState } from 'react';

const SportSelection = ({ onSelect }) => {
  // Array of sports
  const sports = ['Football', 'Baseball', 'Basketball', 'Soccer', 'Track & Field'];
  const [selectedSport, setSelectedSport] = useState('');

  // Function to handle sport selection
  const handleSportSelect = (sport) => {
    setSelectedSport(sport);
    onSelect(sport);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full pt-2">
      {sports.map((sport, index) => (
        <button
          key={index}
          type="button" // Set type to button to prevent form submission
          onClick={() => handleSportSelect(sport)}
          className={`border border-gray-300 rounded-md p-3 hover:bg-gray-100 ${selectedSport === sport ? 'bg-blue-200' : ''}`}
        >
          {sport}
        </button>
      ))}
    </div>
  );
};

export default SportSelection;
