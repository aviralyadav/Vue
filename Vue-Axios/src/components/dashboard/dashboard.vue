<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p style="color: black">Your email address: {{email}} </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: ''
    }
  },
  created() {
    axios.get('/users.json')
    .then(res => {
      const users = Object.values(res.data);
      console.log(res, users);
      this.email = users[0].email;
    })
    .catch(err => console.log(err));  
  },
}
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>