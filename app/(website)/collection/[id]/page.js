import Box from '@/components/box'
import HeadingText from '@/components/heading-text'
import prisma from '@/lib/prisma'
import React from 'react'
import { updatePlayer } from '@/lib/actions/update-player'
import Link from 'next/link'
import { FiArrowLeft, FiTrash } from 'react-icons/fi'
import UpdatePlayerForm from '../_components/update-player-form'
import { Button } from '@nextui-org/react'
import { deletePlayer } from '@/lib/actions/delete-player'
import DeleteButton from '../_components/delete-button'

const CollectionPage = async ({params}) => {
    const {id} = params
    const player = await prisma.player.findUnique({
        where: {
            id: id,
        }
    });
  return (
    <section className='p-6'>
        <Box>
            <div className='flex items-center justify-between mb-6'>
            <Link
            className='flex items-center gap-1'
            href={'/'}>
                <FiArrowLeft />
                Back</Link>

            <div>
            <DeleteButton playerId={player.id} />
            </div> 
                
            </div>
            <HeadingText
                title={'Player Page'}
                description={'Update the players information'}
            />
            <div className='flex flex-col gap-8 mt-8'>
                <UpdatePlayerForm
                player={player}
                />
            </div>
        </Box>
    </section>
  )
}

export default CollectionPage