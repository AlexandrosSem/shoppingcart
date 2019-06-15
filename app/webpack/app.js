import Header from './Header';
import products from './dataProducts';
import Product from './Product';
window.vueInstance = new Vue({
	el: '#rootContainer',
	data: {
		local: {
			pageDisplay: 'Products'
		},
		products: products.products
	},
	components: {
		Header,
		Product
	}
});