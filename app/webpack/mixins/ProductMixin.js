export default {
    methods: {
        AddProduct(pObjData) {
            const that = this;
            return this.AddProductToDatabase(pObjData).then(function() {
                that.$store.dispatch('AddProduct', pObjData);
            });
        },
        AddProductToDatabase(pObjData) {
            return localforage.getItem('AppData').then(function(pAppData) {
                pAppData.Products.push(pObjData);
                return localforage.setItem('AppData', pAppData);
              });
        },
        AddCartProductUser(pUserIndex, pProductIndex, pObjData) {
            const that = this;
            return this.AddCartProductUserToDatabase(pUserIndex, pProductIndex, pObjData).then(function() {
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
        AddCartProductUserToDatabase(pUserIndex, pProductIndex, pObjData) {
            return localforage.getItem('AppData').then(function(pAppData) {
                if (pProductIndex > -1) {
                    pAppData.Users[pUserIndex].ProductsOnCart[pProductIndex] = pObjData;
                } else {
                    pAppData.Users[pUserIndex].ProductsOnCart.push(pObjData);
                }
                return localforage.setItem('AppData', pAppData);
              });
        },
        RemoveCartProductUser(pObjData) {
            const that = this;
            return this.RemoveCartProductUserFromDatabase(pObjData).then(function() {
                that.$store.dispatch('RemoveCartProductUser', pObjData);
            });
        },
        RemoveCartProductUserFromDatabase(pObjData) {
            return localforage.getItem('AppData').then(function(pAppData) {
                const tProductsOnCart = pAppData.Users[pObjData.UserIndex].ProductsOnCart;
                const tIndex = tProductsOnCart.findIndex(function(pEl) {
                    return pEl.Id === pObjData.Id;
                });
                if (tIndex > -1) {
                    tProductsOnCart[tIndex].Quantity -= pObjData.Quantity;
                    if (tProductsOnCart[tIndex].Quantity === 0) {
                        tProductsOnCart.splice(tIndex, 1);
                    }
                }
                return localforage.setItem('AppData', pAppData);
              });
        }
    }
};