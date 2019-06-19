export default {
    props: ['params'],
    template: `<div>
        <template v-for="productInfo in productsInfoOnCart">
            <div class="box">
                <div class="media">
                    <div class="media-center">
                        <div class="image is-128x128">
                            <img v-bind:src="productInfo.imageURL" alt="Image">
                        </div>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>Title: {{ productInfo.title }}</p>
                            <p>Sub title: {{ productInfo.subTitle }}</p>
                            <p>Description: {{ productInfo.description }}</p>
                            <p>Total Price: {{ productInfo.price * productInfo.quantityOnCart}}</p>
                            <p>Quantity On Cart: {{ productInfo.quantityOnCart }}</p>
                            <button class="button is-danger" v-on:click="deleteFromCart(productInfo.id)">Delete from cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>`,
    data () {
        return {
            products: this.params.products,
            productsInfoOnCart: this.params.productsInfoOnCart,
            productsIndex: this.params.productsIndex
        };
    },
    computed: {

    },
    methods: {
        deleteFromCart(pProductId) {
            let tProducts = this.products;
            let tProductsInfoOnCart = this.productsInfoOnCart;
            const tProductsIndex = this.productsIndex;
            tProducts[tProductsIndex[pProductId]].stockQuantity += 1;
            const tTargetIndex = tProductsInfoOnCart.findIndex(function(pEl) {
                return pProductId === pEl.id;
            });
            if (tTargetIndex > -1) {
                tProductsInfoOnCart[tTargetIndex].quantityOnCart -= 1;
                if (tProductsInfoOnCart[tTargetIndex].quantityOnCart === 0) {
                    tProductsInfoOnCart.splice(tTargetIndex, 1);
                }
            } else {
                alert(`Product with ID = '${pProductId}' not found!`);
            }
        }
    }
};