'use client'
import React, { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { Button } from '@nextui-org/react';
import { deletePlayer } from '@/lib/actions/delete-player';
import { useRouter } from 'next/navigation';

const DeleteButton = ({ playerId }) => {
  const [deleting, setDeleting] = useState(false); // State for deleting status
  const router = useRouter();

  // Function to handle player deletion
  const handleDelete = async () => {
    try {
      setDeleting(true); // Set deleting status to true when deletion is in progress
      await deletePlayer({ id: playerId }); // Call the deletePlayer action
      // You can handle any additional logic after successful deletion here
      router.push('/');
    
    } catch (error) {
      console.error('Error deleting player:', error);
    } finally {
      setDeleting(false); // Reset deleting status to false
    }
  };

  return (
    <Button variant='light' onClick={handleDelete} disabled={deleting}>
      {deleting ? 'Deleting...' : <FiTrash className='h-4 w-4' />}
    </Button>
  );
};

export default DeleteButton;
