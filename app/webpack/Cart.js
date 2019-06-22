export default {
    props: ['params'],
    template: `<div>
        <template v-for="ProductInfo in ProductsInfoOnCart">
            <div class="box">
                <div class="media">
                    <div class="media-center">
                        <div class="image is-128x128">
                            <img v-bind:src="ProductInfo.ImageURL" alt="Image">
                        </div>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>Title: {{ ProductInfo.Title }}</p>
                            <p>Sub title: {{ ProductInfo.SubTitle }}</p>
                            <p>Description: {{ ProductInfo.Description }}</p>
                            <p>Total Price: {{ ProductInfo.Price * ProductInfo.QuantityOnCart}}</p>
                            <p>Quantity On Cart: {{ ProductInfo.QuantityOnCart }}</p>
                            <button class="button is-danger" v-on:click="DeleteFromCart(ProductInfo.Id)">Delete from cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>`,
    data () {
        return {
            Products: this.params.Products,
            ProductsInfoOnCart: this.params.ProductsInfoOnCart,
            ProductsIndex: this.params.ProductsIndex
        };
    },
    computed: {

    },
    methods: {
        DeleteFromCart(pProductId) {
            let tProducts = this.Products;
            let tProductsInfoOnCart = this.ProductsInfoOnCart;
            const tProductsIndex = this.ProductsIndex;
            tProducts[tProductsIndex[pProductId]].StockQuantity += 1;
            const tTargetIndex = tProductsInfoOnCart.findIndex(function(pEl) {
                return pProductId === pEl.Id;
            });
            if (tTargetIndex > -1) {
                tProductsInfoOnCart[tTargetIndex].QuantityOnCart -= 1;
                if (tProductsInfoOnCart[tTargetIndex].QuantityOnCart === 0) {
                    tProductsInfoOnCart.splice(tTargetIndex, 1);
                }
            } else {
                alert(`Product with ID = '${pProductId}' not found!`);
            }
        }
    }
};