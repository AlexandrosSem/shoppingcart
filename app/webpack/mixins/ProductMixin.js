export default {
    methods: {
        AddProduct(pObjData) {
            const that = this;
            this.AddProductToDatabse(pObjData).then(function() {
                that.$store.dispatch('AddProduct', pObjData);
            });
        },
        AddProductToDatabse(pObjData) {
            return localforage.getItem('AppData').then(function(pAppData) {
                pAppData.Products.push(pObjData);
                return localforage.setItem('AppData', pAppData);
              });
        }
    }
};