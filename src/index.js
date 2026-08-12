import { input } from "@inquirer/prompts";
import showMenu from "./menu.js";
import { addItem } from "./inventory.js";

async function main() {
    const choice = await showMenu();
    
    if (choice === "add") {
        const name = await input({
            message: "Enter item name:"
        });

        const type = await input({
            message: "Enter item type:"
        });

        const item = addItem(name, type);

        console.log(`\nAdded: ${item.getInfo()}`);
    } else {
        console.log("\n👋 Until next time!")
    }
}

main();