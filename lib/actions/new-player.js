'use server'
import prisma from "@/lib/prisma";


// name String
// position String
// jersey  Int
// plays Int
// sport String

export async function createPlayer(eventData) {
    // const user = await getServerUser();

    // if (!user) {
    //     throw new Error('User not found');
    // }
    try {
        const {name, jersey, plays, sport } = eventData;
        const newPlayer = await prisma.player.create({
            data: {
                name,
                jersey,
                plays,
                sport              

            },
        });
        return newPlayer
    } catch (error) {
        console.log("Create Player Error " + error)
        throw new Error('Failed to create player.');
    }


}