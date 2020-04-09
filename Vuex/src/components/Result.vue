<template>
<div>
    <p>Counter is: {{ doubleCounter + '    ' + status }}</p>
    <hr>
    <p><input type="text" v-model="value"></p>
    <p>{{value}}</p>
</div>

</template>

<script>
import * as types from '../store/types';
import {mapGetters, mapActions} from 'vuex';
    export default {
        computed: {
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                status: types.STATUS
            }),
            value:{
                get() { ///for two binding
                    return this.$store.getters.value
                },
                set(value) {    ///for two binding
                    this.$store.dispatch('setValue', value);
                }
            }
        },
        methods: {
            ...mapActions(['setValue'])
        },
    }
</script>