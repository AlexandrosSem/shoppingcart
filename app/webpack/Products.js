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
                            <p>Title: {{ product.title }}</p>
                            <p>Sub title: {{ product.subTitle }}</p>
                            <p>Description: {{ product.description }}</p>
                            <p>Unit Price: {{ product.price }}</p>
                            <p>Stock Quantity: {{ product.stockQuantity }}</p>
                            <button class="button is-success" v-bind:disabled="product.stockQuantity < 1" v-on:click="addToCart(product.id)">Add to cart</button>
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
    methods: {
        addToCart (pProductId) {
            let tProducts = this.products;
            let tProductsInfoOnCart = this.productsInfoOnCart;
            const tProductsIndex = this.productsIndex;
            tProducts[tProductsIndex[pProductId]].stockQuantity -= 1;
            const tTargetIndex = tProductsInfoOnCart.findIndex(function(pEl) {
                return pProductId === pEl.id;
            });
            if (tTargetIndex > -1) {
                tProductsInfoOnCart[tTargetIndex].quantityOnCart += 1;
            } else {
                const tCurrentProduct = tProducts[tProductsIndex[pProductId]];
                const tObjProductOnCart = {
                    id: tCurrentProduct.id,
                    title: tCurrentProduct.title,
                    subTitle: tCurrentProduct.subTitle,
                    imageURL: tCurrentProduct.imageURL,
                    price: tCurrentProduct.price,
                    description: tCurrentProduct.description,
                    stockQuantity: tCurrentProduct.stockQuantity,
                    quantityOnCart: 1
                };
                tProductsInfoOnCart.push(tObjProductOnCart);
            }
        }
    }
};