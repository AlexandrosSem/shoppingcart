export default {
    props: ['value', 'params'], // value is set by v-model
    data: function() {
        return {
            PageNow: this.value, // Make a "copy" of the parent variable
            ProductsInfoOnCart: this.params.ProductsInfoOnCart
        };
    },
    template: `<nav class="navbar is-light">
        <a class="navbar-item" v-bind:class="{ 'is-active':(PageNow === 'Products') }" href="#" v-on:click="SetPage('Products')">Products</a>
        <a class="navbar-item" v-bind:class="{ 'is-active':(PageNow === 'Cart') }" href="#" v-on:click="SetPage('Cart');">({{CountAllProductsOnCard}}) Cart</a>
    </nav>`,
    computed: {
        CountAllProductsOnCard() {
			let tTotalCount = 0;
			this.ProductsInfoOnCart.forEach(function(pEl) {
				tTotalCount += pEl.QuantityOnCart;
			});
			return tTotalCount;
		},
    },
    methods: {
        SetPage: function(pPage) {
            this.PageNow = pPage;
        }
    },
    watch:{
        PageNow: function() {
            this.$emit('input', this.PageNow); // send an input event back
        }
    }
};