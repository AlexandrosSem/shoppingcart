import UserMixin from '../mixins/UserMixin';
export default {
    mixins: [UserMixin], // Mixin
    data: function() {
        return {
            PageNow: this.$store.getters.GetPageDisplay,
            ProductsInfoOnCart: this.$store.getters.GetProductsInfoOnCart
        };
    },
    template: `<nav class="navbar is-light">
        <a v-if="CheckLoginDetails" class="navbar-item" v-bind:class="{ 'is-active':(PageNow === 'Products') }" href="#" v-on:click="SetPage('Products')">Products</a>
        <a v-if="CheckLoginDetails" class="navbar-item" v-bind:class="{ 'is-active':(PageNow === 'Cart') }" href="#" v-on:click="SetPage('Cart');">
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
        <a v-if="!CheckLoginDetails" class="navbar-item" v-bind:class="{ 'is-active':(PageNow === 'Login') }" href="#" v-on:click="SetPage('Login')">Login</a>
        <a class="navbar-item" v-bind:class="{ 'is-active':(PageNow === 'Signup') }" href="#" v-on:click="SetPage('Signup')">Signup</a>
        <a v-if="CheckLoginDetails" class="navbar-item" href="#" v-on:click="LogOut('Login')">Logout</a>
        <a class="navbar-item" href="#" v-on:click="DeleteDatabase()">Delete Database</a>
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
        },
        CheckLoginDetails() {
            return !!this.$store.getters.GetUserLoginDetails.UserId;
        }
    },
    methods: {
        SetPage(pPage) {
            this.$store.dispatch('SetPageDisplay', pPage);
        },
        LogOut(pPage) {
            const that = this;
            this.DeleteLoginDetails().then(function() {
                that.SetPage(pPage);
            });
        },
        DeleteDatabase() {
            this.DeleteAllData().then(function() {
                window.location.reload();
            });
        }
    }
};