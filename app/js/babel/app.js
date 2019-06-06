/* requires:
babel/data.js
*/
(function (global) {
  global.vm = new Vue({
    el: '#app',
    data: {
      title: data.title
    },
    components: {
      app: {
        template: "<h1>\n\t\t\t\t\tHello World!\n\t\t\t\t</h1>"
      }
    }
  });
})(this);