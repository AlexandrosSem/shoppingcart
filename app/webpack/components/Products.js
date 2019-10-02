import UserMixin from '../mixins/UserMixin';
import ProductMixin from '../mixins/ProductMixin';
import Product from './Product';
export default {
    mixins: [UserMixin, ProductMixin], // Mixins
    template: `<div>
        <div>
        <button class="button is-success" v-bind:disabled="CheckIfAnyProductStockLeft" v-on:click="AddAllProductsToCart()">Add all products to cart</button>
        </div>
        <div is="Product" v-for="Product in Products" v-bind:params="{Product}" v-bind:key="Product.Id"></div>
    </div>`,
    data () {
        return {
            Products: this.$store.getters.GetProducts,
			ProductsInfoOnCart: this.$store.getters.GetProductsInfoOnCart,
			ProductsIndex: this.$store.getters.GetProductsIndex
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
            const that = this;
            (async function() {
                let tProducts = that.Products;
                let tProductsInfoOnCart = that.ProductsInfoOnCart;
                const tCurrentUserId = that.$store.getters.GetUserLoginDetails.UserId;
                const tCurrentUserIndex = that.GetCurrentUserIndex(tCurrentUserId);
                for (let i = 0, l = tProducts.length; i < l; i++) {
                    const tCurrentId = tProducts[i].Id;
                    const tProductOnCartIndex = that.GetProductOnCartIndex(tCurrentUserId, tCurrentId);
                    const tTargetIndex = tProductsInfoOnCart.findIndex(function(pEl) {
                        return tCurrentId === pEl.Id;
                    });
                    const tObjProductOnCartUser = {
                        Id: tCurrentId
                    };
                    if (tTargetIndex > -1) {
                        tProductsInfoOnCart[tTargetIndex].QuantityOnCart += tProducts[i].StockQuantity;
                        tObjProductOnCartUser.Quantity = tProductsInfoOnCart[tTargetIndex].QuantityOnCart;
                    } else {               
                        const tObjProductOnCart = {
                            Id: tProducts[i].Id,
                            Title: tProducts[i].Title,
                            SubTitle: tProducts[i].SubTitle,
                            ImageURL: tProducts[i].ImageURL,
                            Price: tProducts[i].Price,
                            Description: tProducts[i].Description,
                            StockQuantity: 0,
                            QuantityOnCart: tProducts[i].StockQuantity
                        };
                        tProductsInfoOnCart.push(tObjProductOnCart);
                        tObjProductOnCartUser.Quantity = tObjProductOnCart.QuantityOnCart;
                    }
                    tProducts[i].StockQuantity = 0;
                    await that.AddCartProductUser(tCurrentUserIndex, tProductOnCartIndex, tObjProductOnCartUser);
                }
            }());
        },
        BuildProductsIndexes() {
			const that = this;
			this.$store.getters.GetProducts.forEach(function(pEl, pIndex) {
				that.$store.dispatch('AddPropertyProductsIndex', {
					Property: pEl.Id,
					Value: pIndex
				});
			});
		}
    },
    created() {
        this.BuildProductsIndexes();
    },
    components: {
        Product
    }
};