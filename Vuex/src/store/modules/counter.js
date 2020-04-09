import * as types from '../types';

const state = {
    counter: 0,
    status: true
};

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter;
    },
    [types.STATUS]: state => state.status,
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
        state.status = true;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
        state.status = false;
    },
};

const actions = {
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
    },
};

export default {
    state,
    getters,
    mutations,
    actions
};