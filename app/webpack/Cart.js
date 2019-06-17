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
                            <a class="button is-danger" v-on:click="deleteFromCart(product.id)">Delete from cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>`,
    data () {
        return {
            products: []
        };
    },
    methods: {
        deleteFromCart(pProductId) {
            const tProductsInfoOnCart = this.$root.generalState.productsInfoOnCart;
            const tProducts = this.$root.appData.products;
            const tTargetProduct = tProducts.find(function(pElement) {
                return pElement.id === pProductId;
            });
            tTargetProduct.quantity += tProductsInfoOnCart[pProductId].quantity;
            delete tProductsInfoOnCart[pProductId];
            this.products = this.products.filter(function(pElement) {
                return pElement.id !== pProductId;
            });
        }
    },
    created() {
        const tProductsInfoOnCart = this.$root.generalState.productsInfoOnCart;
        const tProducts = this.$root.appData.products;
        const tProductIds = Object.keys(tProductsInfoOnCart);
        this.products = tProducts.filter(function(pElement) {
            return (tProductIds.indexOf(pElement.id.toString()) > -1);
        });
    }
};