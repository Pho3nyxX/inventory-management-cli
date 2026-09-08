import { damageDurability, viewItemDetails } from "./inventory.js";

function damageItem(name, amount = 1) {
    const item = viewItemDetails(name);

    if (!item) {
        return {
            success: false,
            message: "Item not found."
        };
    }

    return damageDurability(name, amount);
}

export {
    damageItem
};