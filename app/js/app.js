import Vue from 'vue';
//import * as data from './data';

const vm = new Vue({
    el: '#app',
    data: {
        title: 'hi'
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