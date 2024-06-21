"use strict";
(() => {
    // Never casi siempre sera una funcion que termine con un error.
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio!');
    console.log('Testing');
})();
