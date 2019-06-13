import Header from './Header';
import products from './dataProducts'; 

window.OBJ = new Vue({
	el: '#app',
	data: {
		local: {
			pageDisplay: 'Products'
		},
		products
	},
	methods: {
		a (pEventValue) {
			console.log(pEventValue);
		}
	},
	components: {
		Header
	}
});