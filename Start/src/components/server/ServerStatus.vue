<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="server in servers" :key="server.id" @click="showDetail(server.status)">Server #{{ server.id }}</li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '../../main';
export default {
  data() {
    return {
      servers: [
        {id: 1, status: 'Normal'},
        {id: 2, status: 'Critical'},
        {id: 3, status: 'Unknown'},
        {id: 4, status: 'Best'},
        {id: 5, status: 'Better'}
      ]
    };
  },
  methods: {
    showDetail(status) {
      eventBus.$emit('statusWasSent', status);
    }
  },
};
</script>

<style scoped>
li {
  cursor: pointer;
}
div {
  /* border: 1px solid red; */
}
</style>