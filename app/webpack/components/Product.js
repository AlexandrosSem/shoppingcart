export default {
    props: ['params'],
    template: `<div class="box">
        <div class="media">
            <div class="media-center">
                <div class="image is-128x128">
                    <img v-bind:src="Product.ImageURL" alt="Image">
                </div>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>Title: {{ Product.Title }}</p>
                    <p>Sub title: {{ Product.SubTitle }}</p>
                    <p>Description: {{ Product.Description }}</p>
                    <p>Unit Price: {{ Product.Price }}£</p>
                    <p>Stock Quantity: {{ Product.StockQuantity }}</p>
                    <input type="number" class="input is-rounded productQuantity" v-model="InputQuantity" min="1" step="1" v-bind:max="Product.StockQuantity" v-bind:disabled="Product.StockQuantity < 1" />
                    <button class="button is-success" v-bind:disabled="(!Number.isInteger(+InputQuantity)) || (+InputQuantity < 1) || (+InputQuantity > Product.StockQuantity) || (Product.StockQuantity < 1)" v-on:click="AddToCart(Product.Id, +InputQuantity)">Add {{InputQuantity}} to cart</button>               
                    <button class="button is-success" v-bind:disabled="Product.StockQuantity < 1" v-on:click="AddAllToCart(Product.Id)">Add all to cart</button>
                </div>
            </div>
        </div>
    </div>`,
    data () {
        return {
            InputQuantity: 1,
            Product: this.params.Product,
            Products: this.$store.getters.GetProducts,
            ProductsInfoOnCart: this.$store.getters.GetProductsInfoOnCart,
            ProductsIndex: this.$store.getters.GetProductsIndex
        };
    },
    methods: {
        AddToCart (pProductId, pQuantity) {
            let tProducts = this.Products;
            let tProductsInfoOnCart = this.ProductsInfoOnCart;
            const tProductsIndex = this.ProductsIndex;
            let tCurrentProduct = tProducts[tProductsIndex[pProductId]];
            tCurrentProduct.StockQuantity -= pQuantity;
            const tTargetIndex = tProductsInfoOnCart.findIndex(function(pEl) {
                return pProductId === pEl.Id;
            });
            if (tTargetIndex > -1) {
                tProductsInfoOnCart[tTargetIndex].QuantityOnCart += pQuantity;
            } else {
                const tObjProductOnCart = {
                    Id: tCurrentProduct.Id,
                    Title: tCurrentProduct.Title,
                    SubTitle: tCurrentProduct.SubTitle,
                    ImageURL: tCurrentProduct.ImageURL,
                    Price: tCurrentProduct.Price,
                    Description: tCurrentProduct.Description,
                    StockQuantity: tCurrentProduct.StockQuantity,
                    QuantityOnCart: pQuantity
                };
                tProductsInfoOnCart.push(tObjProductOnCart);
            }
        },
        AddAllToCart(pProductId) {
            let tProducts = this.Products;
            let tProductsInfoOnCart = this.ProductsInfoOnCart;
            const tProductsIndex = this.ProductsIndex;
            let tCurrentProduct = tProducts[tProductsIndex[pProductId]];
            const tTargetIndex = tProductsInfoOnCart.findIndex(function(pEl) {
                return pProductId === pEl.Id;
            });
            if (tTargetIndex > -1) {
                tProductsInfoOnCart[tTargetIndex].QuantityOnCart += tCurrentProduct.StockQuantity;
            } else {               
                const tObjProductOnCart = {
                    Id: tCurrentProduct.Id,
                    Title: tCurrentProduct.Title,
                    SubTitle: tCurrentProduct.SubTitle,
                    ImageURL: tCurrentProduct.ImageURL,
                    Price: tCurrentProduct.Price,
                    Description: tCurrentProduct.Description,
                    StockQuantity: 0,
                    QuantityOnCart: tCurrentProduct.StockQuantity
                };
                tProductsInfoOnCart.push(tObjProductOnCart);
            }
            tCurrentProduct.StockQuantity = 0;
        }
    }
};