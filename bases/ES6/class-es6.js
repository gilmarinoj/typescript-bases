(() => {

    class Avenger{
        name;
        power;

        constructor( name = 'no name', power = 0 ){
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends Avenger {
        canFly;

        constructor( name, power ){
            super( name, power );
            this.canFly = true;
        }
    }

    const hulk = new Avenger('Hulk', 9001)
    const falcon = new FlyingAvenger('Falcon', 50)

    console.log( hulk );
    console.log( falcon );

})()