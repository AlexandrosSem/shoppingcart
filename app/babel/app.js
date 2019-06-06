/* requires:
babel/data.js
*/
(function(global) {
	global.vm = new Vue({
		el: '#app',
		data: {
			title: data.title
		},
		components: {
			app: {
				template:
				`<h1>
					Hello World!
				</h1>`
			},
		}
	});
})(this);
