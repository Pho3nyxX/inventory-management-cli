let gold = 100;

function getGold() {
    return gold;
}

function addGold(amount) {
    gold += amount;
}

function removeGold(amount) {
    if (amount > gold) {
        return false;
    }

    gold -= amount;

    return true;
}

export {
    getGold,
    addGold,
    removeGold
};