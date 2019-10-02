// We can save the hash of course in the future, for simplicity i just put password for now.
export default [{
        Id: '1',
        Type: 'Buyer',
        Email: 'a@gmail.com',
        Gender: 'Male',
        FirstName: 'Boris',
        LastName: 'Fournier',
        Address: '8211 avenue debrousse',
        Password: 'a',
        ProductsOnCart: [],
        MyProducts: []
    }, {
        Id: '2',
        Type: 'Buyer',
        Email: 'b@gmail.com',
        Gender: 'Male',
        FirstName: 'Aaliyah',
        LastName: 'Jackson',
        Address: '4886 fitzherbert avenue',
        Password: 'b',
        ProductsOnCart: [],
        MyProducts: []
    }, {
        Id: '3',
        Type: 'Seller',
        Email: 'c@gmail.com',
        Gender: 'Female',
        FirstName: 'Ernestine',
        LastName: 'Aschenbrenner',
        Address: 'kapellenweg 163',
        Password: 'c',
        ProductsOnCart: [],
        MyProducts: [{
            Id: '1'
        }, {
            Id: '2'
        }]
    }, {
        Id: '4',
        Type: 'Seller',
        Email: 'd@gmail.com',
        Gender: 'Male',
        FirstName: 'Ernestine',
        LastName: 'Aschenbrenner',
        Address: 'kapellenweg 163',
        Password: 'd',
        ProductsOnCart: [],
        MyProducts: [{
            Id: '3'
        }]
    }];