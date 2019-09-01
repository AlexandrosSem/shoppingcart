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
		AppData
	},
	computed: {

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