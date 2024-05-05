'use client'
import React, { useState } from 'react';
import { updatePlayer } from '@/lib/actions/update-player';
import { useRouter } from 'next/navigation';
import JerseyNumberInput from '@/components/forms/jersey-number-input';
import PlaysInput from '@/components/forms/plays-input';
import SportSelection from '@/components/forms/sport-selection';

const UpdatePlayerForm = ({ player }) => {
  const [name, setName] = useState(player.name);
  const [jerseyNumber, setJerseyNumber] = useState(player.jersey);
  const [plays, setPlays] = useState(player.plays);
  const [selectedSport, setSelectedSport] = useState(player.sport);
  const [updating, setUpdating] = useState(false); // State for updating status
  const router = useRouter();

  // Function to handle name change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Function to handle jersey number change
  const handleJerseyNumberChange = (value) => {
    setJerseyNumber(value);
  };

  // Function to handle plays change
  const handlePlaysChange = (value) => {
    setPlays(value);
  };

  // Function to handle sport selection
  const handleSportSelect = (sport) => {
    setSelectedSport(sport);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setUpdating(true); // Set updating status to true when form is being submitted
      // Pass the name, jerseyNumber, plays, and selectedSport to updatePlayer function or perform any other action
      await updatePlayer({ id: player.id, name, jersey: parseInt(jerseyNumber), plays, sport: selectedSport });
      // Redirect to the homepage
      router.push('/');
    } catch (error) {
      console.error('Failed to update player', error);
    } finally {
      setUpdating(false); // Reset updating status to false
    }
  };

  // Prevent form submission on Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit} onKeyPress={handleKeyPress} className='mt-4 flex flex-col gap-6 cursor-pointer'>
      <div className='flex flex-col'>
        <span className='text-primary'>Enter the player's name</span>
        <input type='text' placeholder='Name' value={name} onChange={handleNameChange} className='border border-gray-300 rounded-md px-3 py-2 mb-4' />
      </div>
      <div>
        <span className='text-primary'>Enter the player's jersey number</span>
        <JerseyNumberInput value={jerseyNumber} onChange={handleJerseyNumberChange} />
      </div>
      <div className='flex flex-col w-full justify-center items-center'>
        <span className='text-primary'>Enter total plays played by the player</span>
        <PlaysInput value={plays} onChange={handlePlaysChange} />
      </div>
      <div className='flex flex-col w-full justify-center items-center'>
        <span className='text-primary'>Select the sport played</span>
        <SportSelection onSelect={handleSportSelect} />
      </div>
      <button type="submit" className='pt-4' disabled={updating}>
        {updating ? 'Updating...' : 'Update'}
      </button>
    </form>
  );
};

export default UpdatePlayerForm;
