import lootItems from "./data/lootItems.js";
import { addItem } from "./inventory.js";
import rarityChances from "./data/rarityChances.js";

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
        loot.price,
        loot.rarity
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
        message: `You found ${loot.name} (${loot.rarity})!`
    };
}

function getRandomRarity() {
    const random = Math.random() * 100;
    let cumulativeChance = 0;

    for (const rarity of rarityChances) {
        cumulativeChance += rarity.chance;

        if (random < cumulativeChance) {
            return rarity.rarity;
        }
    }

    return rarityChances[0].rarity;
}

export {
    getRandomLoot,
    findLoot
};