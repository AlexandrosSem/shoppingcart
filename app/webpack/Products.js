import Product from './Product';
export default {
    props: ['params'],
    template: `<div>
        <div is="Product" v-for="product in products" v-bind:params="{products: products, productsInfoOnCart: productsInfoOnCart, productsIndex: productsIndex, product: product}" v-bind:key="product.id"></div>
    </div>`,
    data () {
        return {
            products: this.params.products,
            productsInfoOnCart: this.params.productsInfoOnCart,
            productsIndex: this.params.productsIndex
        };
    },
    components: {
        Product
    }
};