(() => {


    // Never casi siempre sera una funcion que termine con un error.
    const error = (message: string):( never | number) => {

        if( false ) {
            throw new Error(message);
        }
        return 1;
    }

    error('Auxilio!');
    console.log('Testing');
    

})()