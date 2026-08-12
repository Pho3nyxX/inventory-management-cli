const inventory = [];

function addItem(name, type) {
    const item = {
        name,
        type,
        quantity: 1,

        getInfo() {
            return `${this.name} (${this.type})`;
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

export {
    inventory,
    addItem,
    removeItem
};