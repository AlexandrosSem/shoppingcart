export default {
    props: ['params'],
    template: `<div class="box">
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
                    <input type="number" class="input is-rounded productQuantity" v-model="InputQuantity" min="1" step="1" v-bind:max="ProductInfo.QuantityOnCart" />
                    <button class="button is-danger" v-bind:disabled="(!Number.isInteger(+InputQuantity)) || (+InputQuantity < 1) || (+InputQuantity > ProductInfo.QuantityOnCart)" v-on:click="DeleteFromCart(ProductInfo.Id, +InputQuantity)">Delete {{InputQuantity}} from cart</button>
                    <button class="button is-danger" v-on:click="DeleteAllFromCart(ProductInfo.Id)">Delete all from cart</button>
                </div>
            </div>
        </div>
    </div>`,
    data() {
        return {
            InputQuantity: 1,
            ProductInfo: this.params.ProductInfo,
            Products: this.params.Products,
            ProductsInfoOnCart: this.params.ProductsInfoOnCart,
            ProductsIndex: this.params.ProductsIndex
        }
    },
    methods: {
        DeleteFromCart(pProductId, pQuantity) {
            let tProducts = this.Products;
            let tProductsInfoOnCart = this.ProductsInfoOnCart;
            const tProductsIndex = this.ProductsIndex;
            let tCurrentProduct = tProducts[tProductsIndex[pProductId]];
            tCurrentProduct.StockQuantity += pQuantity;
            const tTargetIndex = tProductsInfoOnCart.findIndex(function(pEl) {
                return pProductId === pEl.Id;
            });
            if (tTargetIndex > -1) {
                tProductsInfoOnCart[tTargetIndex].QuantityOnCart -= pQuantity;
                if (tProductsInfoOnCart[tTargetIndex].QuantityOnCart === 0) {
                    tProductsInfoOnCart.splice(tTargetIndex, 1);
                }
            } else {
                alert(`Product with ID = '${pProductId}' not found!`);
            }
        },
        DeleteAllFromCart(pProductId) {
            let tProducts = this.Products;
            let tProductsInfoOnCart = this.ProductsInfoOnCart;
            const tProductsIndex = this.ProductsIndex;
            let tCurrentProduct = tProducts[tProductsIndex[pProductId]];        
            const tTargetIndex = tProductsInfoOnCart.findIndex(function(pEl) {
                return pProductId === pEl.Id;
            });
            if (tTargetIndex > -1) {
                tCurrentProduct.StockQuantity += tProductsInfoOnCart[tTargetIndex].QuantityOnCart;
                tProductsInfoOnCart[tTargetIndex].QuantityOnCart = 0;
                tProductsInfoOnCart.splice(tTargetIndex, 1);
            } else {
                alert(`Product with ID = '${pProductId}' not found!`);
            }
        }
    }
};