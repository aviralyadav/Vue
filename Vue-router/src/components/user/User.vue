<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button class="btn btn-primary" @click="navigateToHome">Goto Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    watch: {
        '$route'(to, from) {
            this.id = to.params.id;
        }
    },
    methods: {
        navigateToHome() {
            this.$router.push({path: 'Home'});//name is Home
        }
    },
};
</script>