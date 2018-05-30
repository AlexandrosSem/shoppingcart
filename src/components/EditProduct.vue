<template>
    <form>
        <fieldset>
            <legend>Edit Product</legend>
                <div class="form-group">
                    <input type="text" class="form-control" id="productTitle" v-model="productList[currentProductIndex].title" placeholder="Product Title">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="productSubtitle" v-model="productList[currentProductIndex].subtitle" placeholder="Product Subtitle">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="productImageLink" v-model="productList[currentProductIndex].image.src" placeholder="Product Image Link">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="productMainText" v-model="productList[currentProductIndex].content" placeholder="Product Main Text">
                </div>
                <div class="form-group">
                    <router-link class="btn btn-primary btn-lg" to="/" exact>
                        <a role="button">Save Changes</a>
                    </router-link>    
                    
                </div>
        </fieldset>
    </form>
</template>

<script>
    import SharedArea from '../SharedArea'

    export default {
        props: [],
        components: {

        },
        data() { 
            return {
                productList: SharedArea.productList,
                currentProductIndex: -1
            }
        },
        computed: {
           
        },
        methods: {

        },
        created() {
            for (let i = 0, l = this.productList.length; i < l; i++) {
                if (this.$route.params.id == this.productList[i].id) {
                    this.currentProductIndex = i;
                    break;
                }
            }
        },
        destroyed() {

        }
    }
</script>

<style lang="scss">
</style>
