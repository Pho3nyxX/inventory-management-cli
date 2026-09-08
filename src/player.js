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

function loadGold(savedGold) {
    gold = savedGold;
}

export {
    getGold,
    addGold,
    removeGold,
    loadGold
};