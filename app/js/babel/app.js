/* requires:
babel\data.js
babel\vuejs\Main.js
babel\vuejs\Header.js
*/
(function (global) {
  global.vm = new Vue({
    el: '#app',
    data: {
      title: data.title
    }
  });
})(this);