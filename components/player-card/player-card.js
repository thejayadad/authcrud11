import Link from 'next/link';
import React from 'react';
import { FiUser } from 'react-icons/fi'; // Importing the User icon from react-icons
import SportIcon from './sport-icon';
import JerseyNumber from './jersey-number';
import PlaysNumber from './plays-card';

const PlayerCard = ({ collection }) => {
  return (
    <div className="flex items-center flex-1 p-4 select-none border rounded-lg border-primary/10 hover:bg-primary/30 cursor-pointer">
      <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
        <Link
          className='relative block border border-primary/10 rounded-full p-1'
          href={`/collection/${collection.id}`}
        >
          <FiUser className="mx-auto object-cover rounded-full h-6 w-6 text-primary/80" />
        </Link>
      </div>
      <div className="flex-1 pl-1">
        <div className='font-medium flex justify-between mb-1'>
          {collection.name}
          <SportIcon sport={collection.sport} />
        </div>        
        <div className='text-xs text-gray-600 flex items-center justify-between w-full'>
          <JerseyNumber
            number={collection.jersey}
          />
          <PlaysNumber
          plays={collection.plays}
          />
        </div>
        
      </div>
    </div>
  );
};

export default PlayerCard;
