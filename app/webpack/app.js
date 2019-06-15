import Header from './Header';
import Product from './Product';
import products from './dataProducts';
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