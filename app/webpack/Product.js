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
                    <p>Unit Price: {{ Product.Price }}</p>
                    <p>Stock Quantity: {{ Product.StockQuantity }}</p>
                    <button class="button is-success" v-bind:disabled="Product.StockQuantity < 1" v-on:click="AddToCart(Product.Id)">Add to cart</button>
                </div>
            </div>
        </div>
    </div>`,
    data () {
        return {
            Product: this.params.Product,
            Products: this.params.Products,
            ProductsInfoOnCart: this.params.ProductsInfoOnCart,
            ProductsIndex: this.params.ProductsIndex
        };
    },
    methods: {
        AddToCart (pProductId) {
            let tProducts = this.Products;
            let tProductsInfoOnCart = this.ProductsInfoOnCart;
            const tProductsIndex = this.ProductsIndex;
            tProducts[tProductsIndex[pProductId]].StockQuantity -= 1;
            const tTargetIndex = tProductsInfoOnCart.findIndex(function(pEl) {
                return pProductId === pEl.Id;
            });
            if (tTargetIndex > -1) {
                tProductsInfoOnCart[tTargetIndex].QuantityOnCart += 1;
            } else {
                const tCurrentProduct = tProducts[tProductsIndex[pProductId]];
                const tObjProductOnCart = {
                    Id: tCurrentProduct.Id,
                    Title: tCurrentProduct.Title,
                    SubTitle: tCurrentProduct.SubTitle,
                    ImageURL: tCurrentProduct.ImageURL,
                    Price: tCurrentProduct.Price,
                    Description: tCurrentProduct.Description,
                    StockQuantity: tCurrentProduct.StockQuantity,
                    QuantityOnCart: 1
                };
                tProductsInfoOnCart.push(tObjProductOnCart);
            }
        }
    }
};