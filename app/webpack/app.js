import Header from './Header';
import Products from './dataProducts'; 

window.OBJ = new Vue({
	el: '#app',
	data: {
		Local:{
			PageDisplay: 'cart'
		},
		Products: Products
	},
	components: {
		'Header': Header
	}
});
