<template>
<div>
    <p>Counter is: {{ doubleCounter + '    ' + status }}</p>
    <hr>
    <p><input type="text" v-model="value"></p>
    <p>{{value}}</p>
</div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex';
    export default {
        computed: {
            ...mapGetters(['doubleCounter', 'status']),
            value:{
                get() {
                    return this.$store.getters.value
                },
                set(value) {
                    this.$store.dispatch('setValue', value);
                }
            }
        },
        methods: {
            ...mapActions(['setValue'])
        },
    }
</script>