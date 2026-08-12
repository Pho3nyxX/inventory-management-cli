import { input } from "@inquirer/prompts";
import showMenu from "./menu.js";
import { addItem, removeItem, viewInventory } from "./inventory.js";

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

            const item = addItem(name, type);

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
                console.log("\nYour inventory is empty.");
            } else {
                console.log("\n=== Inventory ===");

                items.forEach((item, index) => {
                    console.log(`${index + 1}. ${item.getInfo()}`);
                });

                console.log();
            }
        }

        if (choice === "exit") {
            running = false;
        }
    }

    console.log("\n👋 Until next time!");
}

main();