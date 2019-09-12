export default {
    methods: {
        AddProduct(pObjData) {
            this.$store.dispatch('AddProduct', pObjData);
            this.AddProductToDatabse(pObjData);
        },
        AddProductToDatabse(pObjData) {
            return localforage.getItem('AppData').then(function(pAppData) {
                pAppData.Products.push(pObjData);
                return localforage.setItem('AppData', pAppData);
              })
              .then(function() {

              });
        }
    }
};