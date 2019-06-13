export default {
    props: ['page'],
    template: `<nav class="navbar is-light">
        <a class="navbar-item is-active" href="#" v-on:click="changePageDisplay('Products')">Products</a>
        <a class="navbar-item" href="#" v-on:click="changePageDisplay('Cart')">Cart</a>
    </nav>`,
    data() {
        return {
            propPageValue: ''
        };
    },
    methods: {
        changePageDisplay(pValue) {
            this.propPageValue = pValue;
            this.$emit('input', pValue);
        }
    },
    created() {
        this.propPageValue = this.page;
    }
};