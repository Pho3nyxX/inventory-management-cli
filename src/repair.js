import { getGold, removeGold } from "./player.js";
import { viewItemDetails } from "./inventory.js";

function repairItem(name) {
    const item = viewItemDetails(name);

    if (!item) {
        return {
            success: false,
            message: "Item not found."
        };
    }

    if (item.durability >= item.maxDurability) {
        return {
            success: false,
            message: `${item.name} is already at full durability.`
        };
    }

    const durabilityNeeded = item.maxDurability - item.durability;
    const repairCost = durabilityNeeded;

    if (getGold() < repairCost) {
        return {
            success: false,
            message: `Not enough gold. Repairing ${item.name} costs ${repairCost} gold.`
        };
    }

    removeGold(repairCost);

    item.durability = item.maxDurability;

    return {
        success: true,
        item,
        repairCost,
        message: `Repaired ${item.name} for ${repairCost} gold.`
    };
}

export {
    repairItem
};