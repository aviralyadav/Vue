<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
            </div>
        </div>
    </div>
</template>

<script>
    var url = 'https://jsonplaceholder.typicode.com/todos/1';
    export default {
        created() {
            this.$http.get(url).then(response => {
 
    // get body data
    // this.someData = response.body;
 console.log(response.body);
  }, response => {
    // error callback
  });

        },
    }
</script>

<style>
</style>
