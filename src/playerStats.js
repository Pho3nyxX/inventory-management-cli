import { viewEquipment } from "./inventory.js";

const playerStats = {
    health: 100,
    attack: 0,
    defense: 0,
    block: 0
};

function getPlayerStats() {
    const equipment = viewEquipment();

    playerStats.attack = equipment.weapon?.attack ?? 0;
    playerStats.defense = equipment.armor?.defense ?? 0;
    playerStats.block = equipment.shield?.block ?? 0;

    return playerStats;
}

export {
    getPlayerStats
};

export default playerStats;