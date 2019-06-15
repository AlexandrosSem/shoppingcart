export default {
    props: ['product'],
    template: `<div class="box">
        <div class="media">
            <div class="media-center">
                <div class="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                </div>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>title: {{title}}</p>
                    <p>sub title: {{subTitle}}</p>
                    <p>description: {{description}}</p>
                    <p>price: {{price}}</p>
                </div>
            </div>
        </div>
    </div>`,
    data () {
        return {
            id: this.product.id,
            title: this.product.title,
            subTitle: this.product.subTitle,       
            imageURL: this.product.imageURL,
            price: this.product.price,
            description: this.product.description
        };
    }
};