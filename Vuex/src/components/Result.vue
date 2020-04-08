<template>
    <p>Counter is: {{ doubleCounter + '    ' + status }}</p>
</template>

<script>
import {mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapGetters(['doubleCounter', 'status'])
        }
    }
</script>