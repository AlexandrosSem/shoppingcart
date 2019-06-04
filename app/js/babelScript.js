"use strict";

//import * as data from './data';
var vm = new Vue({
  el: '#app',
  data: {
    title: 'hi'
  },
  components: {
    app: {
      template: "<h1>\n                Hello World!     \n            </h1>"
    }
  }
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  products: [{
    id: 1,
    title: 'titleA',
    subTitle: 'subTitleA',
    imageURL: '',
    price: 0,
    description: ''
  }, {
    id: 2,
    title: 'titleB',
    subTitle: 'subTitleB',
    imageURL: '',
    price: 0,
    description: ''
  }, {
    id: 3,
    title: 'titleC',
    subTitle: 'subTitleC',
    imageURL: '',
    price: 0,
    description: ''
  }]
};
exports["default"] = _default;