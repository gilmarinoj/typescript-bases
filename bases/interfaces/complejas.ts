(() => {

    interface Client {
        name: string,
        age?: number,
        address: Address
        getFullAddress( id: string ):string;
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client: Client = {
        name: 'Marino',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Berlin'
        },
        getFullAddress( id: string ) {
            return this.address.city
        },
    }
    
    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 25,
            zip: 'K25 U32',
            city: 'Toronto'
        },
        getFullAddress( id: string ) {
            return this.address.city
        },
    }

})()