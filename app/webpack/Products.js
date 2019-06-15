export default {
    props: ['params'],
    template: `<div>
        <template v-for="product in products" v-bind:key="product.id" >
            <div class="box">
                <div class="media">
                    <div class="media-center">
                        <div class="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                        </div>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>title: {{ product.title }}</p>
                            <p>sub title: {{ product.subTitle }}</p>
                            <p>description: {{ product.description }}</p>
                            <p>price: {{ product.price }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>`,
    data () {
        return {
            products: this.params.products
        };
    }
};