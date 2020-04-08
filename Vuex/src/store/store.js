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
            return state.counter;
        },
        status: state => state.status
    },
    mutations: { /// mutations are synchronous so for aync task or api calls we need to call mutations from actions
        increment: (state, payload) => {
            state.counter += payload;
            state.status = true;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
            state.status = false;
        }
    },
    actions: { // actions are async
        increment: ({commit}, payload) => {
            commit('increment', payload);
        },
        decrement: ({commit}, payload) => {
            commit('decrement', payload);
        },
        asyncIncrement: ({commit}, payload) => {
            setTimeout(()=>{
                commit('increment', payload.by)
            } ,payload.duration);
        },
        asyncDecrement: ({commit}, payload) => {
            setTimeout(()=>{
                commit('decrement', payload.by)
            } ,payload.duration);
        }
    }
})