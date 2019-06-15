import Header from './Header';
import products from './dataProducts'; 

window.OBJ = new Vue({
	el: '#rootContainer',
	data: {
		local: {
			pageDisplay: 'Products'
		},
		products: products
	},
	components: {
		Header
	}
});