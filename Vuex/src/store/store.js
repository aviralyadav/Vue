import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0,
        status: true
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2
        },
        status: state => state.status
    },
    mutations: {
        increment: state => {
            state.counter++;
            state.status = true;
        },
        decrement: state => {
            state.counter--;
            state.status = false;
        }
    }
})