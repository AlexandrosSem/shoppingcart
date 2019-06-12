import {productData} from './data';
import Header from './Header';

(function(global) {
	global.vm = new Vue({
		el: '#app',
		data: {
			
		},
		components: {
			'Header': Header
		}
	});
})(window || this);
