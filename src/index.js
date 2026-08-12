import showMenu from "./menu.js";

const choice = await showMenu();

if (choice === "add") {
    console.log(`\nYou selected: ${choice}`);
    // add item
} else {
    console.log("\n👋 Until next time!")
}