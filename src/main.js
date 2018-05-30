import Vue from 'vue'
import App from './App.vue'
import ProductList from './components/ProductList.vue'
import EditProduct from './components/EditProduct.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: ProductList},
  { path: '/editProduct/:id', component: EditProduct}
];
const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
