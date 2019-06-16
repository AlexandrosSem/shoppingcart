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
                            <a class="button is-danger" v-on:click="deleteFromCart(product)">Delete from cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>`,
    data () {
        return {
            products: this.$root.generalState.productsInCart
        };
    },
    methods: {
        deleteFromCart(pProduct) {
            const tIndex = this.$root.generalState.productsInCart.findIndex(function(pCurrProduct) {
                return pCurrProduct.id === pProduct.id;
            });
            if (tIndex > -1) {
                this.$root.generalState.productsInCart.splice(tIndex, 1);
            }
        }
    }
};