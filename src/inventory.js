import ITEM_TYPES from "./data/itemTypes.js";

const inventory = [];
const MAX_CARRY_WEIGHT = 20;
const equipment = {
    weapon: null,
    armor: null,
    shield: null
};

function addItem(name, type, weight, quantity, defense = 0, block = 0) {
    const existingItem = inventory.find(item =>
        item.name === name &&
        item.type === type
    );

    if (existingItem) {
        const additionalWeight = weight * quantity;
        const newTotalWeight = getCurrentWeight() + additionalWeight;

        if (newTotalWeight > MAX_CARRY_WEIGHT) {
            return null;
        }

        existingItem.quantity += quantity;
        return existingItem;
    }

    const itemWeight = weight * quantity;
    const newTotalWeight = getCurrentWeight() + itemWeight;

    if (newTotalWeight > MAX_CARRY_WEIGHT) {
        return null;
    }

    const item = {
        name,
        type,
        quantity,
        weight,
        defense,
        block,

        getInfo() {
            return `${this.name} (${this.type}) x${this.quantity} - ${this.weight}kg each`;
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
        return item.name === name && item.type === ITEM_TYPES.WEAPON;
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

function getMaxCarryWeight() {
    return MAX_CARRY_WEIGHT;
}

function getCurrentWeight() {
    let totalWeight = 0;

    inventory.forEach(item => {
        totalWeight += item.weight * item.quantity;
    })

    return totalWeight;
}

function getRemainingCapacity() {
    return MAX_CARRY_WEIGHT - getCurrentWeight();
}

function searchInventory(searchTerm) {
    return inventory.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

function equipItem(name) {
    const item = inventory.find(item => item.name === name);

    if (!item) {
        return false;
    }

    if (item.type !== ITEM_TYPES.WEAPON && item.type !== ITEM_TYPES.ARMOR &&
        item.type !== ITEM_TYPES.SHIELD
    ) {
        return false;
    }

    if (item.type === ITEM_TYPES.WEAPON) {
        equipment.weapon = item;
    }

    if (item.type === ITEM_TYPES.ARMOR) {
        equipment.armor = item;
    }

    if (item.type === ITEM_TYPES.SHIELD) {
        equipment.shield = item;
    }

    return true;
}

function viewEquipment() {
    return equipment;
}

function unequipItem(name) {
    if (equipment.weapon?.name === name ) {
        equipment.weapon = null;
        return true;
    }

    if (equipment.armor?.name === name ) {
        equipment.armor = null;
        return true;
    }

    if (equipment.shield?.name === name ) {
        equipment.shield = null;
        return true;
    }

    return false;
}

export {
    inventory,
    addItem,
    removeItem,
    viewInventory,
    viewItemDetails,
    selectWeapon,
    viewCurrentWeapon,
    unequipWeapon,
    getMaxCarryWeight,
    getCurrentWeight,
    getRemainingCapacity,
    searchInventory,
    equipItem,
    viewEquipment,
    unequipItem
};