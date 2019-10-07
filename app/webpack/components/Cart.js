import UserMixin from '../mixins/UserMixin';
import ProductMixin from '../mixins/ProductMixin';
import ProductOnCart from './ProductOnCart';
export default {
    mixins: [UserMixin, ProductMixin], // Mixins
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
        <div is="ProductOnCart" v-for="ProductInfo in ProductsInfoOnCart" v-bind:params="{ProductInfo}" v-bind:key="ProductInfo.Id"></div>
    </div>`,
    data () {
        return {
            Products: this.$store.getters.GetProducts,
			ProductsInfoOnCart: this.$store.getters.GetProductsInfoOnCart,
			ProductsIndex: this.$store.getters.GetProductsIndex
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
            const that = this;
            (async function() {
                let tProducts = that.Products;
                let tProductsInfoOnCart = that.ProductsInfoOnCart;
                const tProductsIndex = that.ProductsIndex;
                const tCurrentUserId = that.$store.getters.GetUserLoginDetails.UserId;
                const tCurrentUserIndex = that.GetCurrentUserIndex(tCurrentUserId);
                for (let i = 0, l = tProductsInfoOnCart.length; i < l; i++) {
                    const tCurrentId = tProductsInfoOnCart[i].Id;
                    const tQuantity = tProductsInfoOnCart[i].QuantityOnCart;
                    let tCurrentProduct = tProducts[tProductsIndex[tCurrentId]];
                    tCurrentProduct.StockQuantity += tQuantity;
                    await that.RemoveCartProductUser({
                        UserIndex: tCurrentUserIndex,
                        Id: tCurrentId,
                        Quantity: tQuantity
                    });
                }
                tProductsInfoOnCart.splice(0, tProductsInfoOnCart.length);
            }());
        }
    },
    components: {
        ProductOnCart
    }
};