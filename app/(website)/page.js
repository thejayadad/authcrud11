import React from 'react';
import Box from '@/components/box';
import CreateButton from '@/components/buttons/buttons';
import PlayerCard from '@/components/player-card/player-card';
import Search from '@/components/search';
import Site from '@/components/site';
import prisma from '@/lib/prisma';
import { Skeleton } from '@nextui-org/react';

const HomePage = ({ searchParams }) => {
  const query = searchParams?.query || "";
  return (
    <section className="p-6">
      <Box>
        <Site />
        <div className="flex items-center gap-2">
          <Search />
          <CreateButton />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 mt-4 gap-4">
          <PlayerList query={query} />
        </div>
      </Box>
    </section>
  );
};

async function PlayerList({ query }) {
  let collections;
  if (query) {
    collections = await prisma.player.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive', // Case-insensitive search
        },
      },
    });
  } else {
    collections = await prisma.player.findMany({});
  }

  if (collections.length === 0) {
    return (
      <div className="text-center col-span-4 mt-4">
        <div className="flex flex-col space-y-1">
          <h2 className="font-bold">No Players Added</h2>
          <p className="font-light">Start tracking today!</p>
        </div>
      </div>
    );
  }

  return collections.map((collection) => (
    <PlayerCard key={collection.id} collection={collection} />
  ));
}

function PlayerListFallback() {
  return (
    <div className="p-4">
      <Skeleton className="rounded-lg">
        <div className="p-4 h-full rounded-lg bg-default-300"></div>
      </Skeleton>
    </div>
  );
}

export default HomePage;
