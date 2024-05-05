import Box from '@/components/box'
import CreateButton from '@/components/buttons/buttons'
import PlayerCard from '@/components/player-card/player-card'
import Search from '@/components/search'
import Site from '@/components/site'
import prisma from '@/lib/prisma'
import { Skeleton } from '@nextui-org/react'
import Link from 'next/link'
import React, { Suspense } from 'react'

const HomePage = async () => {
  return (
    <section className='p-6'>
      <Box>
        <Site />
        <div className='flex items-center gap-2'>
        <Search />
        <CreateButton />
        </div>
       <div className='grid grid-cols-2 md:grid-cols-2   mt-4 gap-4'>
       <Suspense fallback={<PlayerListFallback />}>
       <PlayerList />
       </Suspense>
       </div>
      </Box>
    </section> 
  )
}

async function PlayerList(){
  const collections = await prisma.player.findMany({});
  if(collections.length === 0){ // Check the length of the collections array
    return (
      <div className='text-center col-span-4 mt-4'>
        <div className='flex flex-col space-y-1'>
          <h2 className='font-bold'>No Players Added</h2>
          <p className='font-light'>Start tracking today!</p>
        </div>
      </div>
    );
  }
  return (
    <>
    {collections.map(collection => (
      <PlayerCard
        key={collection.id}
        collection={collection}
      />
    ))}
    </>
  );
}

function PlayerListFallback(){
  return (
    <div className='p-4'>
        <Skeleton className="rounded-lg">
        <div className="p-4 h-full rounded-lg bg-default-300"></div>
      </Skeleton>
    </div>
  )
}

export default HomePage