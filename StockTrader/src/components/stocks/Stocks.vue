<template>
    <div class="row">
        <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue';
import {mapGetters} from 'vuex';
import * as types from '../../store/types';

export default {
    computed: {
        ...mapGetters(['stocks'])
    },
    data() {
        return {
            // stocks: this.stocks
        }
    },
    components: {
        appStock: Stock
    }
}
</script>