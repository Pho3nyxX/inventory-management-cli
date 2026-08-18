import ITEM_TYPES from "./data/itemTypes.js";

const inventory = [];
const MAX_CARRY_WEIGHT = 20;
let currentWeapon = null;

function addItem(name, type, weight, quantity, defense = 0) {
    const existingItem = inventory.find(item => item.name === name);
    const itemWeight = weight * quantity;
    const newTotalWeight = getCurrentWeight() + itemWeight;

    if (existingItem) {
        existingItem.quantity++;
        return existingItem;
    }

    if (newTotalWeight > MAX_CARRY_WEIGHT) {
        return null;
    }

    const item = {
        name,
        type,
        quantity,
        weight,
        defense,

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

function getCurrentWeight(){
    let totalWeight = 0;

    inventory.forEach(item => {
        totalWeight += item.weight * item.quantity;
    })

    return totalWeight;
}

function getRemainingCapacity(){
    return MAX_CARRY_WEIGHT - getCurrentWeight();
}

function searchInventory(searchTerm) {
    return inventory.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
    searchInventory
};