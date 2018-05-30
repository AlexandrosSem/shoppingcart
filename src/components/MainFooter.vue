<template>
    <div>
        <footer class="jumbotron navbar-fixed-bottom"> 
            <p class="lead">{{currentYear}} vuejs shopping cart project</p>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            currentYear() {
                return new Date().getFullYear();
            }
       }
    }
</script>

<style lang="scss">
</style>
