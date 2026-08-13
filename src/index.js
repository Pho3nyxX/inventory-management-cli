import { input } from "@inquirer/prompts";
import showMenu from "./menu.js";
import { addItem, removeItem, viewInventory, viewItemDetails, selectWeapon, viewCurrentWeapon, unequipWeapon } from "./inventory.js";

async function main() {
    let running = true;

    while (running) {
        const choice = await showMenu();

        if (choice === "add") {
            const name = await input({
                message: "Enter item name:"
            });

            const type = await input({
                message: "Enter item type:"
            });

            const weight = await input({
                message: "Enter item weight:"
            });

            const item = addItem(name, type, Number(weight));

            console.log(`\nAdded: ${item.getInfo()}\n`);
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

            if (items.length === 0) {
                console.log("\nYour inventory is empty.\n");
            } else {
                console.log("\n=== Inventory ===");

                items.forEach((item, index) => {
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
                console.log(`Weight: ${item.weight}`);
                console.log();
            }
        }

        if (choice === "select") {
            const name = await input({
                message: "Enter the name of the weapon:"
            });

            const selected = selectWeapon(name);

            if (selected) {
                console.log(`\n${name} selected.\n`);
            } else {
                console.log(`\n${name} is not a weapon in your inventory.\n`);
            }
        }

        if (choice === "current") {
            const weapon = viewCurrentWeapon();

            if (!weapon) {
                console.log("\nNo weapon is currently selected.\n");
            } else {
                console.log("\n=== Current Weapon ===");
                console.log(`Name: ${weapon.name}`);
                console.log(`Type: ${weapon.type}`);
                console.log(`Quantity: ${weapon.quantity}`);
            }

            console.log();
        }

        if (choice === "unequip") {
            const unequipped = unequipWeapon();

            if (unequipped) {
                console.log("\nWeapon unequipped.\n");
            } else {
                console.log("\nNo weapon is currently equipped.\n");
            }
        }

        if (choice === "exit") {
            running = false;
        }
    }

    console.log("\n👋 Until next time!");
}

main();