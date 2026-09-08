import { select } from "@inquirer/prompts";

console.log("Welcome to Inventory Management CLI\n");

async function showMenu() {
    const answer = await select({
        message: "\nWhat would you like to do?",
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
                name: "4. Search Inventory",
                value: "search"
            },
            {
                name: "5. View Item Details",
                value: "details"
            },
            {
                name: "6. Equip Item",
                value: "equip-item"
            },
            {
                name: "7. View Equipment",
                value: "view-equipment"
            },
            {
                name: "8. Unequip Item",
                value: "unequip-item"
            },
            {
                name: "9. View Player Stats",
                value: "player-stats"
            },
            {
                name: "10. View Gold",
                value: "view-gold"
            },
            {
                name: "Exit",
                value: "exit"
            }
        ]
    });
    return answer;
}

export default showMenu;