import Product from './Product';
export default {
    props: ['params'],
    template: `<div>
        <div>
        <button class="button is-success" v-bind:disabled="CheckIfAnyProductStockLeft" v-on:click="AddAllProductsToCart()">Add all products to cart</button>
        </div>
        <div is="Product" v-for="Product in Products" v-bind:params="{Products, ProductsInfoOnCart, ProductsIndex, Product}" v-bind:key="Product.Id"></div>
    </div>`,
    data () {
        return {
            Products: this.params.Products,
            ProductsInfoOnCart: this.params.ProductsInfoOnCart,
            ProductsIndex: this.params.ProductsIndex
        };
    },
    computed: {
        CheckIfAnyProductStockLeft() {
            let tResult = true;
            const tProducts = this.Products;
            for (let i = 0, l = tProducts.length; i < l; i++) {
                if (tProducts[i].StockQuantity > 0) {
                    tResult = false;
                    break;
                }
            }
            return tResult;
        }
    },
    methods: {
        AddAllProductsToCart() {
            let tProducts = this.Products;
            let tProductsInfoOnCart = this.ProductsInfoOnCart;
            tProducts.forEach(function(pEl) {
                const tCurrentId = pEl.Id;
                const tTargetIndex = tProductsInfoOnCart.findIndex(function(pEl) {
                    return tCurrentId === pEl.Id;
                });
                if (tTargetIndex > -1) {
                    tProductsInfoOnCart[tTargetIndex].QuantityOnCart += pEl.StockQuantity;
                } else {               
                    const tObjProductOnCart = {
                        Id: pEl.Id,
                        Title: pEl.Title,
                        SubTitle: pEl.SubTitle,
                        ImageURL: pEl.ImageURL,
                        Price: pEl.Price,
                        Description: pEl.Description,
                        StockQuantity: 0,
                        QuantityOnCart: pEl.StockQuantity
                    };
                    tProductsInfoOnCart.push(tObjProductOnCart);
                }
                pEl.StockQuantity = 0;
            });
        }
    },
    components: {
        Product
    }
};