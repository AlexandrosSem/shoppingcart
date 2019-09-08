import ProductsData from './data/Products';
import UsersData from './data/Users';
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
		},
		SaveTheDataToLocalForage() {
			let tInitialData = {
				Products: ProductsData,
				Users: UsersData
			};
			return localforage.getItem('AppData').then(function(pAppData) {
				if (!pAppData) {
					localforage.setItem('AppData', tInitialData);
				} else {
					tInitialData = pAppData;
				}
				return tInitialData;
			}).catch(function() {

			});
		},
		PutInitialDataToCentralState(pAppData) {
			this.$store.dispatch('SetInitialProducts', pAppData.Products);
			this.$store.dispatch('SetInitialUsers', pAppData.Users);
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
		const that = this;
		this.SaveTheDataToLocalForage().then(function(pAppData) {
			that.PutInitialDataToCentralState(pAppData);
			that.BuildProductsIndexes();
		});
	}
});