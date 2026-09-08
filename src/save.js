import fs from "node:fs";

import { inventory, viewEquipment,loadInventory, loadEquipment } from "./inventory.js";

import { getGold, loadGold } from "./player.js";

const SAVE_FILE = "./save.json";

function saveGame() {
    const gameState = {
        inventory,
        equipment: viewEquipment(),
        gold: getGold()
    };

    fs.writeFileSync(
        SAVE_FILE,
        JSON.stringify(gameState, null, 2)
    );

    return {
        success: true,
        message: "Game saved successfully."
    };
}

function loadGame() {
    if (!fs.existsSync(SAVE_FILE)) {
        return {
            success: false,
            message: "No save file found."
        };
    }

    const saveData = JSON.parse(
        fs.readFileSync(SAVE_FILE, "utf-8")
    );

    loadInventory(saveData.inventory);
    loadEquipment(saveData.equipment);
    loadGold(saveData.gold);

    return {
        success: true,
        message: "Game loaded successfully."
    };
}

export {
    saveGame,
    loadGame
};