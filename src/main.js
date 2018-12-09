import Vue from 'vue'
import './scss/vue-and-spectre-css.scss';

import SButton from './components/s-button.vue';


export default {
    install (vue) {
        vue.component('s-button', SButton);
    }
}

export {
    SButton
}
// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
