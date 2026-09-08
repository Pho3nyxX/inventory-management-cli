import { findLoot } from "./loot.js";

let chestOpened = false;

function openChest() {
    if (chestOpened) {
        return {
            success: false,
            message: "The loot chest has already been opened."
        };
    }

    const result = findLoot();

    if (!result.success) {
        return result;
    }

    chestOpened = true;

    return {
        success: true,
        message: `You opened the chest and found ${result.item.name}!`,
        item: result.item
    };
}

function isChestOpened() {
    return chestOpened;
}

export {
    openChest,
    isChestOpened
};