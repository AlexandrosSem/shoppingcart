import {productData} from './data';
import MainComp from './vuejs/Main';
import HeaderComp from './vuejs/Header';

(function(global) {
	global.vm = new Vue({
		el: '#app',
		data: {
			
		},
		components: {
			MainComp,
			HeaderComp
		}
	});
})(window);
