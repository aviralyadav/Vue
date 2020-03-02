<template>
    <div>
        <p>New Quote</p>
        <p>{{ counter }}</p>
        <button @click="counter++">Counter</button>
    </div>
</template>

<script>
export default {
    // props: {
    //     quote: String
    // }
    data() {
        return {
            counter: 0
        }
    },
    destroyed() {
         console.log('destroyed');
    },
    deactivated() {
        console.log('deactivated!');
    },
    activated() {
        console.log('activated!')
    },
}
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    h2 {
        color: red;
    }
    .title {
        font-family: italic;
    }
</style>