import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

Vue.use(Vuex);

export default new Vuex.Store({
    // state: {
    //     // common properties
    // },
    // getters: {
        
    // },
    // mutations: {},
    // actions: {}, ///no shared state,mutation,actions- all will be from different modules
    modules: {
        stocks,
        portfolio
    }
});