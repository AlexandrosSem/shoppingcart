<template>
    <div class="jumbotron">
        <div class="card mb-3 col-3 d-inline-block" v-for="(product, index) in productList" v-bind:key="index">
            <div class="card-body">
                <h5 class="card-title text-success">{{product.title}}</h5>
                <h6 class="card-subtitle text-muted">{{product.subtitle}}</h6>
            </div>
            <img style="height: 200px; width: 100%; display: block;" v-bind:src="product.image.src" v-bind:alt="product.image.src">
            <div class="card-body">
                <p class="card-text text-info">{{product.content}}</p>
            </div>
            <ul class="list-group list-group-flush">
                <!-- <li class="list-group-item">Cras justo odio</li> -->
            </ul>
            <div class="card-body">
                <keep-alive>
                    <router-link class="card-link" v-bind:to="{path: product.links[0].href, params: {}}" exact>
                        <a>{{product.links[0].htmlText}}</a>
                    </router-link>
                </keep-alive>
                <a v-on:click.prevent="deleteProduct(product.id)" v-bind:href="product.links[1].href" class="card-link">{{product.links[1].htmlText}}</a>
            </div>
            <!-- 
            <div class="card-footer text-muted">
                2 days ago 
            </div>
            --> 
        </div>
    </div>
</template>

<script>
    import SharedArea from '../SharedArea'

    export default {
        props: [],
        components: {

        },
        data() {
            return {
                productList: SharedArea.productList
            }
        },
        computed: {
            deleteProduct() {
                return function(pId) {
                    for (let i = 0, l = this.productList.length; i < l; i++) {
                        if (this.productList[i].id == pId) {
                            this.productList.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        },
        methods: {
            
        },
        created() {
                    
        },
        destroyed() {

        }
    }
</script>

<style lang="scss">
</style>
