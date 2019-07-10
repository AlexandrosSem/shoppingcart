import ProductOnCart from './ProductOnCart';
export default {
    props: ['params'],
    template: `<div>
        <div v-if="ProductsInfoOnCart.length > 0">
            <div>
                <span>Total amount to pay {{CalculateTotalAmountToPay}}£</span>
                <button class="button is-success">Checkout</button>
            </div>
            <div>
            <button class="button is-danger" v-on:click="EmptyTheCart()">Empty the cart</button>
            </div>
        </div>
        <div is="ProductOnCart" v-for="ProductInfo in ProductsInfoOnCart" v-bind:params="{Products, ProductsInfoOnCart, ProductsIndex, ProductInfo}" v-bind:key="ProductInfo.Id"></div>
    </div>`,
    data () {
        return {
            Products: this.params.Products,
			ProductsInfoOnCart: this.params.ProductsInfoOnCart,
			ProductsIndex: this.params.ProductsIndex
        };
    },
    computed: {
        CalculateTotalAmountToPay() {
            let tTotalAmountToPay = 0;
            this.ProductsInfoOnCart.forEach(function(pEl) {
                tTotalAmountToPay += (pEl.Price * pEl.QuantityOnCart);
            });
            return tTotalAmountToPay;
        }
    },
    methods: {
        EmptyTheCart() {
            let tProducts = this.Products;
            let tProductsInfoOnCart = this.ProductsInfoOnCart;
            const tProductsIndex = this.ProductsIndex;
            tProductsInfoOnCart.forEach(function(pEl, pIndex) {
                const tCurrentId = pEl.Id;
                let tCurrentProduct = tProducts[tProductsIndex[tCurrentId]];
                tCurrentProduct.StockQuantity += tProductsInfoOnCart[pIndex].QuantityOnCart;
            });
            tProductsInfoOnCart.splice(0, tProductsInfoOnCart.length);
        }
    },
    components: {
        ProductOnCart
    }
};