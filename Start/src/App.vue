<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import ServerDetails from "./components/server/ServerDetails.vue";
import Home from "./components/server/Home.vue";
export default {
  components: {
    appServers: Home,
    "app-server-details": ServerDetails
  }
};
</script>

<style>
</style>
