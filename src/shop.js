import shopItems from "./data/shopItems.js";
import { getGold, removeGold, addGold } from "./player.js";
import { addItem, removeItem, getCurrentWeight, viewInventory, getMaxCarryWeight } from "./inventory.js";

function buyItem(itemName) {
    const item = shopItems.find(shopItem => shopItem.name === itemName);

    if (!item) {
        return {
            success: false,
            message: "Item is not available in the shop."
        };
    }

    if (getGold() < item.price) {
        return {
            success: false,
            message: `Not enough gold. ${item.name} costs ${item.price} gold.`
        };
    }

    const purchaseWeight = item.weight;

    if (getCurrentWeight() + item.weight > getMaxCarryWeight()) {
        return {
            success: false,
            message: "You cannot carry this item. Inventory is too heavy."
        };
    }

    const removed = removeGold(item.price);

    if (!removed) {
        return {
            success: false,
            message: "Purchase failed."
        };
    }

    addItem(
        item.name,
        item.type,
        item.weight,
        1,
        item.attack,
        item.defense,
        item.block,
        item.price
    );

    return {
        success: true,
        message: `Purchased ${item.name} for ${item.price} gold.`
    };
}

function sellItem(itemName) {
    const inventory = viewInventory();

    const item = inventory.find(
        inventoryItem => inventoryItem.name === itemName
    );

    if (!item) {
        return {
            success: false,
            message: "You do not have that item."
        };
    }

    const sellPrice = Math.floor(item.price / 2);

    const removed = removeItem(itemName);

    if (!removed) {
        return {
            success: false,
            message: "Could not sell item."
        };
    }

    addGold(sellPrice);

    return {
        success: true,
        message: `Sold ${item.name} for ${sellPrice} gold.`
    };
}

export {
    buyItem,
    sellItem
};