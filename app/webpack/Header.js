export default {
    props: ['value'], // value is set by v-model
    data: function() {
        return {
            pageNow: this.value // Make a "copy" of the parent variable
        };
    },
    template: `<nav class="navbar is-light">
        <a class="navbar-item" v-bind:class="{ 'is-active':(pageNow == 'Products') }" href="#" v-on:click="setPage('Products')">Products</a>
        <a class="navbar-item" v-bind:class="{ 'is-active':(pageNow == 'Cart') }" href="#" v-on:click="setPage('Cart');">Cart</a>
    </nav>`,
    methods: {
        setPage: function(pPage) {
            this.pageNow = pPage;
        }
    },
    watch:{
        pageNow: function() {
            this.$emit('input', this.pageNow); // send an input event back
        }
    }
};