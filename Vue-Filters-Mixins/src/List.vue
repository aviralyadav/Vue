<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {fruitMixin} from './FruitMixin';
    export default {
        mixins: [fruitMixin]
    }
</script>

<style>

</style>
