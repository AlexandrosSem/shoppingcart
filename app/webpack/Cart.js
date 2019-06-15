export default {
    props: ['product'],
    template: `<div class="box">
        CART HERE
    </div>`,
    data () {
        return { userId: this.$root.generalState.userId };
    }
};