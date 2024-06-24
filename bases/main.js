"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return `${this.name} ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Marino',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Berlin'
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 25,
            zip: 'K25 U32',
            city: 'Toronto'
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map