"use strict";
(() => {
    let avengers = 15;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas!');
    }
    else {
        console.log('Estamos a salvo!');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
