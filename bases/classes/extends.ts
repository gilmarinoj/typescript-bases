(() => {

    class Avenger { 
        constructor(
            public name: string,
            public realName: string
        ){
            // console.log('Constructor Avenger Llamado');
            
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super( name, realName );
            // console.log('Constructor Xmen Llamado');
        }

        get fullName() {
            return `${this.name} - ${this.realName}`;
        }

        set fullName( name: string ) {
            if( name.length < 3){
                throw new Error('El nombre tiene que ser mayor a 3 letras')
            }
            this.name = name;
        }

        getFullNameDesdeXmen() {
            console.log( super.getFullName() );
            
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    // wolverine.fullName = 'Fernando';

    // console.log(wolverine.fullName);
    // wolverine.getFullNameDesdeXmen();
    

})()