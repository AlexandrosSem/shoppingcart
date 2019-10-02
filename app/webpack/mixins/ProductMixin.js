export default {
    methods: {
        AddProduct(pObjData) {
            const that = this;
            return this.AddProductToDatabse(pObjData).then(function() {
                that.$store.dispatch('AddProduct', pObjData);
            });
        },
        AddProductToDatabse(pObjData) {
            return localforage.getItem('AppData').then(function(pAppData) {
                pAppData.Products.push(pObjData);
                return localforage.setItem('AppData', pAppData);
              });
        },
        AddCartProductUser(pUserIndex, pProductIndex, pObjData) {
            const that = this;
            return this.AddCartProductUserToDatabse(pUserIndex, pProductIndex, pObjData).then(function() {
                const tObjFinal = {
                    User: {
                        Index: pUserIndex,
                        ProductOnCartIndex: pProductIndex
                    },
                    Product: pObjData
                };
                that.$store.dispatch('AddCartProductUser', tObjFinal);
            });
        },
        AddCartProductUserToDatabse(pUserIndex, pProductIndex, pObjData) {
            return localforage.getItem('AppData').then(function(pAppData) {
                if (pProductIndex > -1) {
                    pAppData.Users[pUserIndex].ProductsOnCart[pProductIndex] = pObjData;
                } else {
                    pAppData.Users[pUserIndex].ProductsOnCart.push(pObjData);
                }
                return localforage.setItem('AppData', pAppData);
              });
        }
    }
};