import Header from './Header';
import Products from './Products';
import Cart from './Cart';
import appData from './dataProducts';
window.vueInstance = new Vue({
	el: '#rootContainer',
	data: {
		generalState: {
			userId: 1,
			productsInfoOnCart: [],
			productsIndex: {}
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
		productsIndex() {
			const that = this;
			this.products.forEach(function(pEl, pIndex) {
				that.generalState.productsIndex[pEl.id] = pIndex;
			});
			return this.generalState.productsIndex;
		},
		params() {
			if (this.local.pageDisplay == 'Products') {
				return {
					products: this.products,
					productsInfoOnCart: this.productsInfoOnCart,
					productsIndex: this.productsIndex
				}
			} else if (this.local.pageDisplay == 'Cart') {
				return {
					products: this.products,
					productsInfoOnCart: this.productsInfoOnCart,
					productsIndex: this.productsIndex
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