import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

// Bootstrap Vue
Vue.use(BootstrapVue);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
