import Header from './Header';
import Products from './Products';
import Cart from './Cart';
import AppData from './DataProducts';
import UsersData from './Users';
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
		AppData,
		UsersData
	},
	computed: {
		Users() {
			return this.UsersData.Users;
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
				}
			} else if (this.Local.PageDisplay === 'Cart') {
				return {
					Products: this.Products,
					ProductsInfoOnCart: this.ProductsInfoOnCart,
					ProductsIndex: this.ProductsIndex
				}
			} else if (this.Local.PageDisplay === 'Signup') {
				return {
					Users: this.Users
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