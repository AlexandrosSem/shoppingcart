export default {
    props: ['params'],
    template: `<div>
        <template v-for="(product, index) in products">
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
                            <input id="productQuantity" type="number" name="quantity" v-model="productsQuantity[index]" step="1" min="1" v-bind:max="product.quantity" required />
                            <a class="button is-success" v-on:click="addToCart(product.id, productsQuantity[index])">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>`,
    data () {
        return {
            products: this.params.products,
            productsQuantity: this.params.products.map(function(pElement) {
                return 1;
            })
        };
    },
    methods: {
        addToCart (pProductId, pProductQuantity) {
            const tProductsInfoOnCart = this.$root.generalState.productsInfoOnCart;
            const tProducts = this.$root.appData.products;
            tProductsInfoOnCart[pProductId] = tProductsInfoOnCart[pProductId] || {quantity: 0};
            tProductsInfoOnCart[pProductId].quantity += (+pProductQuantity);
            const tTargetProduct = tProducts.find(function(pElement) {
                return pElement.id === pProductId;
            });
            tTargetProduct.quantity -= (+pProductQuantity);
        }
    }
};