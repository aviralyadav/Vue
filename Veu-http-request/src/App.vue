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
      </div>
    </div>
  </div>
</template>

<script>
var url = "https://jsonplaceholder.typicode.com/todos";
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      }
    };
  },
  methods: {
    onSubmit() {
    //   console.log(this.user);
      this.$http.post('https://vue-data-8b889.firebaseio.com/data.json', this.user)
        .then(res => console.log(res), err => console.log(err));
    }
  },
  created() {
    this.$http.get(url).then(
      response => {
        // get body data
        // this.someData = response.body;
        console.log(response.body);
      },
      response => {
        // error callback
      }
    );
  }
};
</script>

<style>
</style>
