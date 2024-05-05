'use server'
import prisma from "@/lib/prisma"

export async function updatePlayer(eventData) {
    const {name, jersey, plays, sport, id } = eventData;
    try {

      const updatedPlayer = await prisma.player.update({
        where: { id: id },
        data: {
            name,
            jersey,
            plays,
            sport              

        },
      });
  
      console.log("Ride Makde updated:", updatedPlayer);
      return updatedPlayer

    } catch (error) {
           console.error("Error updating Ride Make:", error);
    throw new Error('Error: ' + error.message);
    }
}