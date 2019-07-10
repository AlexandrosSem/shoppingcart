// Data
import AppData from './data/AppData';
// Components
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import Signup from './components/Signup';
import Login from './components/Login';
// 
window.VueInstance = new Vue({
	el: '#rootContainer',
	data: {
		GeneralState: {
			ProductsInfoOnCart: [],
			ProductsIndex: {}
		},
		Local: {
			PageDisplay: 'Products'
		},
		AppData
	},
	computed: {
		Users() {
			return this.AppData.Users;
		},
		Products() {
			return this.AppData.Products;
		},
		ProductsInfoOnCart() {
			return this.GeneralState.ProductsInfoOnCart;
		},
		ProductsIndex() {
			const that = this;
			this.Products.forEach(function(pEl, pIndex) {
				that.GeneralState.ProductsIndex[pEl.Id] = pIndex;
			});
			return this.GeneralState.ProductsIndex;
		},
		Params() {
			if (this.Local.PageDisplay === 'Products') {
				return {
					Products: this.Products,
					ProductsInfoOnCart: this.ProductsInfoOnCart,
					ProductsIndex: this.ProductsIndex
				};
			} else if (this.Local.PageDisplay === 'Cart') {
				return {
					Products: this.Products,
					ProductsInfoOnCart: this.ProductsInfoOnCart,
					ProductsIndex: this.ProductsIndex
				};
			} else if (this.Local.PageDisplay === 'Signup') {
				return {
					Users: this.Users
				};
			}
		}
	},
	methods: {},
	components: {
		Header,
		Products,
		Cart,
		Signup,
		Login
	}
});