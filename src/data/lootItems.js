import RARITIES from "./rarities.js";

const lootItems = [
    {
        name: "Iron Sword",
        type: "weapon",
        weight: 5,
        attack: 20,
        rarity: RARITIES.COMMON
    },
    {
        name: "Iron Armor",
        type: "armor",
        weight: 8,
        defense: 15,
        rarity: RARITIES.UNCOMMON
    },
    {
        name: "Iron Shield",
        type: "shield",
        weight: 6,
        block: 10,
        rarity: RARITIES.RARE
    },
    {
        name: "Health Potion",
        type: "consumable",
        weight: 1,
        rarity: RARITIES.COMMON
    }
];

export default lootItems;