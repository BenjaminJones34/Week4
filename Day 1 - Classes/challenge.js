class car {

    constructor(manufacturer, model, colour) {
        this._manufacturer = manufacturer;
        this._model = model;
        this._colour = colour;
        this._speed = 0;
        this._direction = 0; //degrees
        this._beeping = false;
    }

    accelerate() {
        this._speed += 10;
    }

    brake() {
        this._speed = 0;
    }

    turn() {
        this._direction += 45;
    }

    beep() {
        this._beeping = true;
    }
};

const car1 = new car("Skoda", "Fabia", "green");
const car2 = new car("Ford", "Mondeo", "blue");
const car3 = new car("Volkswagen", "Golf", "red");