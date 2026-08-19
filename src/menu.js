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
                name: "6. Select Weapon",
                value: "select"
            },
            {
                name: "7. View Current Weapon",
                value: "current"
            },
            {
                name: "8. Unequip Weapon",
                value: "unequip"
            },
            {
                name: "9. Equipment",
                value: "equipment"
            },
            {
                name: "10. View Equipment",
                value: "view-equipment"
            },
            {
                name: "11. Unequip Item",
                value: "unequip-item"
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