import Product from './Product';
export default {
    props: ['params'],
    template: `<div>
        <div is="Product" v-for="Product in Products" v-bind:params="{Products, ProductsInfoOnCart, ProductsIndex, Product}" v-bind:key="Product.Id"></div>
    </div>`,
    data () {
        return {
            Products: this.params.Products,
            ProductsInfoOnCart: this.params.ProductsInfoOnCart,
            ProductsIndex: this.params.ProductsIndex
        };
    },
    components: {
        Product
    }
};