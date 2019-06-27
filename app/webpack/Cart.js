import ProductOnCart from './ProductOnCart';
export default {
    props: ['params'],
    template: `<div>
        <div v-if="ProductsInfoOnCart.length > 0">
            <span>Total amount to pay {{CalculateTotalAmountToPay}}$</span>
            <button class="button is-success">Checkout</button>
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
    components: {
        ProductOnCart
    }
};