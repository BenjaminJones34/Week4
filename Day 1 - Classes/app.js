class Animal {
    constructor(name) {
        this._name = name;
        this._hunger = 0;
        this._sleep = 100;
        this._thirst = 0;
    }

    get name() {
        return this._name;
    }

    get stats() {
        return {
            hunger: this._hunger,
            thirst: this._thirst,
            sleep: this._sleep,
        };
    }
};

class Bunny extends Animal {
    
    constructor(name) {
        super(name);
        this._hops = 0;
    }

    get hops () {
        return this._hops;
    }

    increaseHops () {
        this._hops ++;
    }
};

class Cat extends Animal {
    constructor(name) {
        super(name);
        this._mouseCaught = 0;
    }

    hunting() {
        this._mouseCaught++;
    }
}

const Sherlock = new Bunny("Sherlock");
const Tom = new Cat("Tom")

console.log(Sherlock);
console.log(Sherlock.name);
Sherlock.increaseHops();
console.log(Sherlock.hops);

console.log(Tom);