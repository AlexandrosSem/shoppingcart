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
        ProductsOnCart: [{
            Id: '1',
            Quantity: 5
        }, {
            Id: '2',
            Quantity: 2
        }],
        MyProducts: []
    }, {
        Id: '2',
        Type: 'Seller',
        Email: 'b@gmail.com',
        Gender: 'Male',
        FirstName: 'Aaliyah',
        LastName: 'Jackson',
        Address: '4886 fitzherbert avenue',
        Password: 'b',
        ProductsOnCart: [{
            Id: '1',
            Quantity: 3
        }, {
            Id: '3',
            Quantity: 2
        }],
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
        ProductsOnCart: [{
            Id: '2',
            Quantity: 4
        }, {
            Id: '3',
            Quantity: 1
        }],
        MyProducts: []
    }];