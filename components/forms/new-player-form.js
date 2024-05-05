'use client'
// NewPlayerForm.jsx
import React, { useState } from 'react';
import { createPlayer } from '@/lib/actions/new-player';
import JerseyNumberInput from './jersey-number-input';
import { Input } from '@nextui-org/react';
import PlaysInput from './plays-input';
import SportSelection from './sport-selection';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const NewPlayerForm = () => {
  const [name, setName] = useState('');
  const [jerseyNumber, setJerseyNumber] = useState('');
  const [plays, setPlays] = useState(0); // State for the number of plays
  const [selectedSport, setSelectedSport] = useState('');
  const [submitting, setSubmitting] = useState(false); // State for submitting status
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
      setSubmitting(true); // Set submitting status to true when form is being submitted
      // Pass the name, jerseyNumber, plays, and selectedSport to createPlayer function or perform any other action
      await createPlayer({ name, jersey: parseInt(jerseyNumber), plays, sport: selectedSport });
      toast.success('Player created successfully');
      // Redirect to the homepage
      router.push('/');
      // Reset form fields
      setName('');
      setJerseyNumber('');
      setPlays(0);
      setSelectedSport('');
    } catch (error) {
      toast.error('Failed to create player');
    } finally {
      setSubmitting(false); // Reset submitting status to false
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
      <div>
        <span className='text-primary'>Enter the player's name</span>
        <Input placeholder='Name' value={name} onChange={handleNameChange} />
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
      <button type="submit" className='pt-4' disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
      <Toaster position="bottom-right" />
    </form>
  );
};

export default NewPlayerForm;
