export default {
    data: function() {
        return {
            PageNow: this.$store.getters.GetPageDisplay,
            ProductsInfoOnCart: this.$store.getters.GetProductsInfoOnCart
        };
    },
    template: `<nav class="navbar is-light">
        <a class="navbar-item" v-bind:class="{ 'is-active':(PageNow === 'Products') }" href="#" v-on:click="SetPage('Products')">Products</a>
        <a class="navbar-item" v-bind:class="{ 'is-active':(PageNow === 'Cart') }" href="#" v-on:click="SetPage('Cart');">
            <span v-if="ProductsInfoOnCart.length > 0">
                ({{TotalProductsOnCart.TotalCount}})
            </span>
            <span v-else>
                (Empty)
            </span>
            <img width="64px" height="64px" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/shopping-cart-1557464-1329241.png" />
            <span v-if="ProductsInfoOnCart.length > 0">
                ({{TotalProductsOnCart.TotalPrice}}£)
            </span>
        </a>
        <a class="navbar-item" v-bind:class="{ 'is-active':(PageNow === 'Signup') }" href="#" v-on:click="SetPage('Signup')">Signup</a>
    </nav>`,
    computed: {
        TotalProductsOnCart() {
            let tTotalCount = 0;
            let tTotalPrice = 0;
            this.ProductsInfoOnCart.forEach(function(pEl) {
                const tProductQuantity = pEl.QuantityOnCart;
                const tProductPrice = pEl.Price;
                tTotalCount += tProductQuantity;
                tTotalPrice += tProductQuantity * tProductPrice;
            });
            return {
                TotalCount: tTotalCount,
                TotalPrice: tTotalPrice
            };
        }
    },
    methods: {
        SetPage: function(pPage) {
            this.$store.dispatch('SetPageDisplay', pPage);
        }
    }
};