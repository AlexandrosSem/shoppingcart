import {productData} from './data';
import Container from './Container';
import Header from './Header';

(function(global) {
	global.vm = new Vue({
		el: '#app',
		data: {
			
		},
		components: {
			'Container': Container,
			'Header': Header
		}
	});
})(window);
