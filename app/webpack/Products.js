export default {
    props: ['params'],
    template: `<div>
        <template v-for="product in products">
            <div class="box">
                <div class="media">
                    <div class="media-center">
                        <div class="image is-128x128">
                            <img v-bind:src="product.imageURL" alt="Image">
                        </div>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>title: {{ product.title }}</p>
                            <p>sub title: {{ product.subTitle }}</p>
                            <p>description: {{ product.description }}</p>
                            <p>price: {{ product.price }}</p>
                            <a class="button is-success" v-on:click="addToCart(product)">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>`,
    data () {
        return {
            products: this.params.products
        };
    },
    methods: {
        addToCart (pProduct) {
            var tArrFiltered = this.$root.generalState.productsInCart.filter(function(pCurrProduct) {
                return pCurrProduct.id === pProduct.id;
            });
            if (!tArrFiltered.length) {
                this.$root.generalState.productsInCart.push(pProduct);
            } else {
                alert(`The product with title '${pProduct.title}' is already in the cart. For the moment only quantity one allowed!`);
            }
        }
    }
};