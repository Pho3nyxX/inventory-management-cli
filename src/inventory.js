const inventory = [];
let currentWeapon = null;

function addItem(name, type, weight) {
    const existingItem = inventory.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
        return existingItem;
    }

    const item = {
        name,
        type,
        quantity: 1,
        weight,

        getInfo() {
            return `${this.name} (${this.type}) - ${this.weight}kg`;
        }
    };

    inventory.push(item);

    return item;
}

function removeItem(name) {
    const itemIndex = inventory.findIndex(item => item.name === name);

    if (itemIndex === -1) {
        return false;
    }

    inventory.splice(itemIndex, 1);

    return true;
}

function viewInventory() {
    return inventory;
}

function viewItemDetails(name) {
    const item = inventory.find(item => item.name === name);
    return item;
}

function selectWeapon(name) {
    const weapon = inventory.find(item => {
        return item.name === name && item.type === "weapon";
    });

    if (!weapon) {
        return false;
    }

    currentWeapon = weapon;

    return true;
}

function viewCurrentWeapon() {
    return currentWeapon;
}

function unequipWeapon() {
    if (!currentWeapon) {
        return false;
    }

    currentWeapon = null;

    return true;
}

export {
    inventory,
    addItem,
    removeItem,
    viewInventory,
    viewItemDetails,
    selectWeapon,
    viewCurrentWeapon,
    unequipWeapon
};