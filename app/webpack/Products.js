export default {
    props: ['params'],
    template: `<div>
        <template v-for="productId in Object.keys(products)">
            <div class="box">
                <div class="media">
                    <div class="media-center">
                        <div class="image is-128x128">
                            <img v-bind:src="products[productId].imageURL" alt="Image">
                        </div>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>Title: {{ products[productId].title }}</p>
                            <p>Sub title: {{ products[productId].subTitle }}</p>
                            <p>Description: {{ products[productId].description }}</p>
                            <p>Unit Price: {{ products[productId].price }}</p>
                            <p>Stock Quantity: {{ products[productId].stockQuantity }}</p>
                            <button class="button is-success" v-bind:disabled="products[productId].stockQuantity < 1" v-on:click="addToCart(productId)">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>`,
    data () {
        return {
            products: this.params.products,
            productsInfoOnCart: this.params.productsInfoOnCart
        };
    },
    methods: {
        addToCart (pProductId) {
            let tProducts = this.products;
            let tProductsInfoOnCart = this.productsInfoOnCart;
            tProducts[pProductId].stockQuantity -= 1;
            tProductsInfoOnCart[pProductId] = (tProductsInfoOnCart[pProductId] || {});
            tProductsInfoOnCart[pProductId].quantityOnCart = (tProductsInfoOnCart[pProductId].quantityOnCart || 0) + 1;
        }
    }
};