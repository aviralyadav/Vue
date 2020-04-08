<template>
    <div>
        <button class="btn btn-primary" @click="increment(10)">Increment</button>
        <button class="btn btn-primary" @click="decrement(5)">Decrement</button>
        <hr>
        <button class="btn btn-primary" @click="asyncIncrement({by: 100, duration: 2000})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 150, duration: 3000})">Decrement</button>
        <p>Vuex State Variable: {{status}}</p>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
    export default {
        methods: {
            // ...mapMutations(['increment', 'decrement'])
            ...mapActions([
                'increment', 'decrement','asyncIncrement', 'asyncDecrement'
            ])
        },
        computed: {
            ...mapGetters(['status'])
        },
    }
</script>