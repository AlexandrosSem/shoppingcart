export default {
    props: ['value'], // value is set by v-model
    data: function() {
        return {
            PageNow: this.value // Make a "copy" of the parent variable
        };
    },
    template: `<nav class="navbar is-light">
        <a class="navbar-item" v-bind:class="{ 'is-active':(PageNow === 'Products') }" href="#" v-on:click="SetPage('Products')">Products</a>
        <a class="navbar-item" v-bind:class="{ 'is-active':(PageNow === 'Cart') }" href="#" v-on:click="SetPage('Cart');">Cart</a>
    </nav>`,
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