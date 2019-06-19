export default {
    props: ['params'],
    template: `<div>
        <template v-for="objProduct in productsOnCart">
            <div class="box">
                <div class="media">
                    <div class="media-center">
                        <div class="image is-128x128">
                            <img v-bind:src="objProduct.product.imageURL" alt="Image">
                        </div>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>Title: {{ objProduct.product.title }}</p>
                            <p>Sub title: {{ objProduct.product.subTitle }}</p>
                            <p>Description: {{ objProduct.product.description }}</p>
                            <p>Total Price: {{ objProduct.product.price * objProduct.cart.quantityOnCart}}</p>
                            <p>Quantity On Cart: {{ objProduct.cart.quantityOnCart }}</p>
                            <button class="button is-danger" v-on:click="deleteFromCart(objProduct.product.id)">Delete from cart</button>
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
    computed: {
        productsOnCart: function() {
            var vm = this;
            return Object.keys(this.productsInfoOnCart).map(function(pIndex) {
                return {
                    product: (vm.products[pIndex] || {}),
                    cart: (vm.productsInfoOnCart[pIndex] || {})
                }
            })
        }
    },
    methods: {
        deleteFromCart(pProductId) {
            let tProducts = this.products;
            let tProductsInfoOnCart = this.productsInfoOnCart;
            console.log(tProductsInfoOnCart)

            tProducts[pProductId].stockQuantity += 1;
            tProductsInfoOnCart[pProductId].quantityOnCart -= 1;
            if (tProductsInfoOnCart[pProductId].quantityOnCart === 0) {
                delete tProductsInfoOnCart[pProductId];
            }
        }
    }
};