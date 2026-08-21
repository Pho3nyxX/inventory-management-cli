import ITEM_TYPES from "./data/itemTypes.js";

function Item(name, type, quantity, weight, attack = 0, defense = 0, block = 0) {
    this.name = name;
    this.type = type;
    this.quantity = quantity;
    this.weight = weight;
    this.attack = attack;
    this.defense = defense;
    this.block = block;

    this.getInfo = function () {
        return `${this.name} (${this.type}) x${this.quantity} - ${this.weight}kg each`;
    };

    this.getTotalWeight = function () {
        return this.weight * this.quantity;
    };

    this.isEquippable = function () {
        return (
            this.type === ITEM_TYPES.WEAPON ||
            this.type === ITEM_TYPES.ARMOR ||
            this.type === ITEM_TYPES.SHIELD
        );
    };

    this.getStats = function () {
        return {
            attack: this.attack,
            defense: this.defense,
            block: this.block
        };
    };
}

export default Item;