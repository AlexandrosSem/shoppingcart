import Product from './Product';
export default {
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