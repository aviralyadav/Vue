<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" placeholder="Username" v-model="user.username" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" placeholder="Email" v-model="user.email" />
        </div>
        <div class="form-group">
          <button @click="onSubmit" class="btn btn-primary">Submit</button>
        </div>
        <hr>
        <div class="form-group">
          <button @click="getData" class="btn btn-primary">Get Data</button>
        </div>
        <br>
        <div class="list-group">
          <div class="list-group-item" v-for="u in users" :key="u.username">{{ u.username }} - {{ u.email }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: []
    };
  },
  methods: {
    onSubmit() {
    //   console.log(this.user);
      this.$http.post('data.json', this.user)
        .then(res => {console.log(res);this.user.username = '';this.user.email = ''}, err => console.log(err));
    },
    getData() {
      this.$http.get('data.json')
        .then(response => response.json())
        .then(data => {
          const dataArr  = Object.values(data);
          console.log(dataArr);
          this.users = dataArr;
          });
    }
  },
};
</script>

<style>
</style>
