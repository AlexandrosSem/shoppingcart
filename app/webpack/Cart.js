export default {
    props: ['params'],
    template: `<div>
        <template v-for="productId in Object.keys(productsInfoOnCart)">
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
                            <p>Total Price: {{ products[productId].price * productsInfoOnCart[productId].quantityOnCart}}</p>
                            <p>Quantity On Cart: {{ productsInfoOnCart[productId].quantityOnCart }}</p>
                            <button class="button is-danger" v-on:click="deleteFromCart(productId)">Delete from cart</button>
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
        deleteFromCart(pProductId) {
            let tProducts = this.products;
            let tProductsInfoOnCart = this.productsInfoOnCart;
            tProducts[pProductId].stockQuantity += 1;
            tProductsInfoOnCart[pProductId].quantityOnCart -= 1;
            if (tProductsInfoOnCart[pProductId].quantityOnCart === 0) {
                delete tProductsInfoOnCart[pProductId];
            }
        }
    }
};