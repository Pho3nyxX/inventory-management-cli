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

export {
    inventory,
    addItem
};