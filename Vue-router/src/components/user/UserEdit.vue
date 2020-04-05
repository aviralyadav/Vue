<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale {{$route.query.locale}}</p>
    <p>Count {{$route.query.q}}</p>
  </div>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
        console.log('Component level guard');
        if(true) {
            next();
        } else {
            next(false);
        }
    }
}
</script>