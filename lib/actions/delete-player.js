'use server'
import prisma from "@/lib/prisma"

export async function deletePlayer(eventData) {
    const {name, jersey, plays, sport, id } = eventData;
    try {

      const deletedPlayer = await prisma.player.delete({
        where: { id: id },
      });
  
      console.log("Ride Makde updated:", deletedPlayer);
      return deletedPlayer

    } catch (error) {
           console.error("Error deleting player :", error);
    throw new Error('Error: ' + error.message);
    }
}