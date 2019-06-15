import Header from './Header';
import Products from './Products';
import Cart from './Cart';
import appData from './dataProducts'; 

window.OBJ = new Vue({
	el: '#rootContainer',
	data: {
		local: {
			pageDisplay: 'Products'
		},
		appData: appData
	},
	computed: {
		products() { return this.appData.products; }
	},
	components: {
		Header,
		Products,
		Cart
	}
});