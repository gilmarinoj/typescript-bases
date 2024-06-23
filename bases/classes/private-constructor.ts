(() => {

    class Apocalipsis {

        static instance: Apocalipsis;

        private constructor(public name: string) { }

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el unico.');
            }
            return Apocalipsis.instance;
        }

        changeName(newName: string): void {
            this.name = newName;
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName('Xavier');

    // const apocalipsis = new Apocalipsis('Soy Apocalipsis... el unico');
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el unico');
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el unico');

    // console.log(apocalipsis);
    // console.log(apocalipsis2);
    // console.log(apocalipsis3);

    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);





})()