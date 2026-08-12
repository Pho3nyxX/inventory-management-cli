import { select } from "@inquirer/prompts";

console.log("Welcome to Inventory Management CLI\n");

async function showMenu() {
    const answer = await select({
        message: "What would you like to do?",
        choices: [
            {
                name: "1. Add Item",
                value: "add"
            },
            {
                name: "2. Remove Item",
                value: "remove"
            },
            {
                name: "3. View Inventory",
                value: "view"
            },
            {
                name: "4. Exit",
                value: "exit"
            }
        ]
    });
    return answer;
}

export default showMenu;