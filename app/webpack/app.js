import Header from './Header';
import Products from './Products';
import Cart from './Cart';
import appData from './dataProducts';
window.vueInstance = new Vue({
	el: '#rootContainer',
	data: {
		generalState: {
			userId: 1,
			productsInfoOnCart: {}
		},
		local: {
			pageDisplay: 'Products'
		},
		appData: appData
	},
	computed: {
		products() {
			return this.appData.products;
		},
		productsInfoOnCart() {
			return this.generalState.productsInfoOnCart;
		},
		params() {
			if (this.local.pageDisplay == 'Products') {
				return {
					products: this.products,
					productsInfoOnCart: this.productsInfoOnCart
				}
			} else if (this.local.pageDisplay == 'Cart') {
				return {
					products: this.products,
					productsInfoOnCart: this.productsInfoOnCart
				}
			}
		}
	},
	components: {
		Header,
		Products,
		Cart
	}
});