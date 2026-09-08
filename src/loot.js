import lootItems from "./data/lootItems.js";
import { addItem } from "./inventory.js";

function getRandomLoot() {
    const randomIndex = Math.floor(Math.random() * lootItems.length);

    return lootItems[randomIndex];
}

function findLoot() {
    const loot = getRandomLoot();

    const item = addItem(
        loot.name,
        loot.type,
        loot.weight,
        1,
        loot.attack,
        loot.defense,
        loot.block,
        loot.price
    );

    if (!item) {
        return {
            success: false,
            message: `You found ${loot.name}, but you cannot carry it.`
        };
    }

    return {
        success: true,
        item,
        message: `You found ${loot.name}!`
    };
}

export {
    getRandomLoot,
    findLoot
};