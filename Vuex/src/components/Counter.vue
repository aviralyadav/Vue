<template>
    <div>
        <button class="btn btn-primary" @click="increment(10)">Increment</button>
        <button class="btn btn-primary" @click="decrement(5)">Decrement</button>
        <hr>
        <button class="btn btn-primary" @click="asyncIncrement({by: 100, duration: 2000})">Async Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 150, duration: 3000})">Async Decrement</button>
        <p>Vuex State Variable: {{status}}</p>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import * as types from '../store/types';
    export default {
        methods: {
            // ...mapMutations(['increment', 'decrement'])
            ...mapActions([
                'increment', 'decrement','asyncIncrement', 'asyncDecrement'
            ])
        },
        computed: {
            ...mapGetters({
                status: types.STATUS
            })
        },
    }
</script>