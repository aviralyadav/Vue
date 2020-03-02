<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="status === ''">Server Details are currently not updated</p>
    <p v-else>Server Status: {{ status }}</p>
  </div>
</template>

<script>
import { eventBus } from '../../main';
export default {
  data() {
    return {
      status: ''
    };
  },
  created() {
    eventBus.$on('statusWasSent', status => {
      this.status = status;
    })
  },
};
</script>

<style scoped>
div {
  /* border: 1px solid green; */
}
</style>