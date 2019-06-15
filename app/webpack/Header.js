export default {
    props: ['value'], // value is set by v-model
    data() {
        return {
            pageNow: this.value // Make a "copy" of the parent variable
        };
    },
    template: `<nav class="navbar is-light">
        <a class="navbar-item" v-bind:class="{ 'is-active':(this.pageNow == 'Products') }" href="#" v-on:click="setPage('Products')">Products</a>
        <a class="navbar-item" v-bind:class="{ 'is-active':(this.pageNow == 'Cart') }" href="#" v-on:click="setPage('Cart');">Cart</a>
    </nav>`,
    methods: {
        setPage(pPage) { this.pageNow = pPage; }
    },
    watch:{
        pageNow() {
            this.$emit('input', this.pageNow); // send an input event back
        }
    }
};