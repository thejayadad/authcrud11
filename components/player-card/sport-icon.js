import React from 'react';

const SportIcon = ({ sport }) => {
  let backgroundColor;
  switch (sport.toLowerCase()) {
    case "football":
      backgroundColor = "bg-green-500";
      break;
    case "basketball":
      backgroundColor = "bg-orange-500";
      break;
    case "baseball":
      backgroundColor = "bg-blue-500";
      break;
    case "soccer":
      backgroundColor = "bg-yellow-500";
      break;
    case "track & field":
      backgroundColor = "bg-red-500";
      break;
    default:
      backgroundColor = "bg-gray-500";
  }

  return (
    <div className={`inline-block p-1 rounded-lg ${backgroundColor} text-white text-xs`}>
      {sport}
    </div>
  );
};

export default SportIcon;
