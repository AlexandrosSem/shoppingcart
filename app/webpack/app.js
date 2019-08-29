// Data
import AppData from './data/AppData';
// Store
import CentralState from './state/CentralState';
// Components
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import Signup from './components/Signup';
import Login from './components/Login';

window.VueInstance = new Vue({
	el: '#rootContainer',
	store: CentralState,
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
		Params() {
			if (this.Local.PageDisplay === 'Products') {
				return {
					Products: this.$store.getters.GetProducts,
					ProductsInfoOnCart: this.$store.getters.GetProductsInfoOnCart,
					ProductsIndex: this.$store.getters.GetProductsIndex
				};
			} else if (this.Local.PageDisplay === 'Cart') {
				return {
					Products: this.$store.getters.GetProducts,
					ProductsInfoOnCart: this.$store.getters.GetProductsInfoOnCart,
					ProductsIndex: this.$store.getters.GetProductsIndex
				};
			} else if (this.Local.PageDisplay === 'Signup') {
				return {
					Users: this.$store.getters.GetUsers
				};
			}
		}
	},
	methods: {
		BuildProductsIndexes() {
			const that = this;
			this.$store.getters.GetProducts.forEach(function(pEl, pIndex) {
				that.$store.dispatch('AddPropertyProductsIndex', {
					Property: pEl.Id,
					Value: pIndex
				});
			});
		}
	},
	components: {
		Header,
		Products,
		Cart,
		Signup,
		Login
	},
	created() {
		this.BuildProductsIndexes();
	}
});