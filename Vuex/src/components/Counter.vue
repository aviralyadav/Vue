<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
        <p>Vuex State Variable: {{status}}</p>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
    export default {
        methods: {
            ...mapMutations(['increment', 'decrement'])
        },
        computed: {
            ...mapGetters(['status'])
        },
    }
</script>