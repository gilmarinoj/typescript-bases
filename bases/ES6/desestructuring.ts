(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        active: boolean;
        power: number;
    }

    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        active: true,
        power: 1500.145
    }

    // const { power, vision } = avengers;
    // console.log(power.toFixed(2), vision.toUpperCase());

    const printAvenger = ({ ironman, ...rest }: Avengers) => {
        console.log( ironman, rest );
    }

    // printAvenger( avengers );

    const avengersArr: [string, boolean, boolean] = ['Cap. America', true, false];

    const [ capitan, ironman, numero] = avengersArr;

    // console.log( {ironman, capitan} );
    

})()