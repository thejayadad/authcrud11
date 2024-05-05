import React from 'react';
import Link from 'next/link';

const positionsData = [
  {
    id: 1,
    name: 'Goalkeeper',
    players: [
      { id: 1, name: 'Player 1' },
      { id: 2, name: 'Player 2' },
    ],
  },
  {
    id: 2,
    name: 'Defender',
    players: [
      { id: 3, name: 'Player 3' },
      { id: 4, name: 'Player 4' },
      { id: 5, name: 'Player 5' },
    ],
  },
  {
    id: 3,
    name: 'Midfielder',
    players: [
      { id: 6, name: 'Player 6' },
      { id: 7, name: 'Player 7' },
      { id: 8, name: 'Player 8' },
    ],
  },
  {
    id: 4,
    name: 'Forward',
    players: [
      { id: 9, name: 'Player 9' },
      { id: 10, name: 'Player 10' },
    ],
  },
];

const Tabs = () => {
  return (
    <div>
      <div className="flex justify-around">
        {positionsData.map((position) => (
          <Link
            key={position.id}
            href={`/positions/${position.id}`}
          
            className="cursor-pointer p-4 border border-gray-300 mt-5">
              {position.name}
        
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
