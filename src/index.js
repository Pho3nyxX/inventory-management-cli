import { input, select } from "@inquirer/prompts";
import showMenu from "./menu.js";
import { addItem, removeItem, viewInventory, viewItemDetails, getMaxCarryWeight, getCurrentWeight, getRemainingCapacity, searchInventory, equipItem, viewEquipment, unequipItem } from "./inventory.js";
import ITEM_TYPES from "./data/itemTypes.js";
import { getPlayerStats } from "./playerStats.js";

async function main() {
    let running = true;

    while (running) {
        const choice = await showMenu();

        if (choice === "add") {
            const name = await input({
                message: "Enter item name:"
            });

            const type = await select({
                message: "Select item type:",
                choices: [
                    {
                        name: "Weapon",
                        value: ITEM_TYPES.WEAPON
                    },
                    {
                        name: "Armor",
                        value: ITEM_TYPES.ARMOR
                    },
                    {
                        name: "Shield",
                        value: ITEM_TYPES.SHIELD
                    },
                    {
                        name: "Consumable",
                        value: ITEM_TYPES.CONSUMABLE
                    },
                    {
                        name: "Quest Item",
                        value: ITEM_TYPES.QUEST
                    },
                    {
                        name: "Miscellaneous",
                        value: ITEM_TYPES.MISCELLANEOUS
                    }
                ]
            });

            let defense = 0;
            let block = 0;
            let attack = 0;

            if (type === ITEM_TYPES.WEAPON) {
                attack = Number(await input({
                    message: "Enter weapon attack:"
                }));
            }

            if (type === ITEM_TYPES.ARMOR) {
                defense = Number(await input({
                    message: "Enter armor defense:"
                }));
            }

            if (type === ITEM_TYPES.SHIELD) {
                block = Number(await input({
                    message: "Enter shield block:"
                }));
            }

            const weight = await input({
                message: "Enter item weight:"
            });

            const quantity = await input({
                message: "Enter item quantity:"
            });

            const item = addItem(
                name,
                type,
                Number(weight),
                Number(quantity),
                attack,
                defense,
                block
            );

            if (!item) {
                console.log("\nCannot add item. Weight limit exceeded.\n");
            } else {
                console.log(`\nAdded: ${item.getInfo()}`);
            }
        }

        if (choice === "remove") {
            const name = await input({
                message: "Enter the name of the item to remove:"
            });

            const removed = removeItem(name);

            if (removed) {
                console.log(`\nRemoved: ${name}\n`);
            } else {
                console.log(`\n${name} was not found in your inventory.`);
            }
        }

        if (choice === "view") {
            const items = viewInventory();

            console.log("\n=== Inventory ===");

            if (items.length === 0) {
                console.log("Your inventory is empty.\n");
            } else {
                items.forEach((item, index) => {
                    console.log(`${index + 1}. ${item.getInfo()}`);
                });
            }

            console.log("--------------------------------");
            console.log(`Current Weight: ${getCurrentWeight()}kg`);
            console.log(`Maximum Carry Weight: ${getMaxCarryWeight()}kg`)
            console.log(`Remaining Capacity: ${getRemainingCapacity()}kg`);
            console.log("--------------------------------\n");
        }

        if (choice === "search") {
            const searchTerm = await input({
                message: "Enter item name to search:"
            });

            const results = searchInventory(searchTerm);

            if (results.length === 0) {
                console.log(`\nNo items found matching "${searchTerm}".\n`);
            } else {
                console.log(`\n=== Search Results ===`);

                results.forEach((item, index) => {
                    console.log(`${index + 1}. ${item.getInfo()}`);
                });
                console.log();
            }
        }

        if (choice === "details") {
            const name = await input({
                message: "Enter the name of the item:"
            });

            const item = viewItemDetails(name);

            if (!item) {
                console.log(`\n${name} was not found in your inventory.`);
            } else {
                console.log("\n=== Item Details ===");
                console.log(`Name: ${item.name}`);
                console.log(`Type: ${item.type}`);
                console.log(`Quantity: ${item.quantity}`);
                console.log(`Weight: ${item.weight}kg`);
            }

            if (item.type === ITEM_TYPES.ARMOR) {
                console.log(`Defense: ${item.defense}`);
            }

            if (item.type === ITEM_TYPES.SHIELD) {
                console.log(`Block: ${item.block}`);
            }

            console.log();
        }

        if (choice === "equip-item") {
            const name = await input({
                message: "Enter item name to equip:"
            });

            const equipped = equipItem(name);

            if (!equipped) {
                console.log("\nItem cannot be equipped.");
            } else {
                console.log(`\n${name} equipped.`);
            }
        }

        if (choice === "view-equipment") {
            const currentEquipment = viewEquipment();

            console.log("\n=== Equipment ===");

            console.log(
                `Weapon: ${currentEquipment.weapon?.name ?? "None"}`
            );

            console.log(
                `Armor: ${currentEquipment.armor?.name ?? "None"}`
            );

            console.log(
                `Shield: ${currentEquipment.shield?.name ?? "None"}`
            );
        }

        if (choice === "unequip-item") {
            const name = await input({
                message: "Enter item name to unequip:"
            });

            const unequipped = unequipItem(name);

            if (!unequipped) {
                console.log("\nItem is not currently equipped.");
            } else {
                console.log(`\n${name} unequipped.`);
            }
        }

        if (choice === "player-stats") {
            const stats = getPlayerStats();

            console.log("\n=== Player Stats ===");

            console.log(`Health: ${stats.health}`);
            console.log(`Attack: ${stats.attack}`);
            console.log(`Defense: ${stats.defense}`);
            console.log(`Block: ${stats.block}`);
        }

        if (choice === "exit") {
            running = false;
        }
    }

    console.log("\n👋 Until next time!");
}

main();