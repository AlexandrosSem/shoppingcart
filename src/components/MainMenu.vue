<template>
    <div>  
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary"> 
            <router-link class="navbar-brand" to="/" exact>
                <a>Shopping Cart</a>
            </router-link>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/" exact>
                            <a>Home</a> <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/addProduct" exact>
                            <a>Add Product</a>
                        </router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss">
</style>
