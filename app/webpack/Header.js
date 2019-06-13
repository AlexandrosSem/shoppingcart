export default {
    props: ['Page'],
    template: `<nav class="navbar is-light" v-bind:Page="this.Value">
        <a class="navbar-item is-active" href="#" v-on:click="this.Value = 'Products'">Products</a>
        <a class="navbar-item" href="#" v-on:click="this.Value = 'Cart'">Cart</a>
    </nav>`,
    data() {
        return {
            Value: 'products'
        };
    },
    watch: {
        Value: function(pValue) {
            this.$emit('input', pValue);
        }
    }
};