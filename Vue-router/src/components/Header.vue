<template>
    <ul class="nav nav-pills">
        <!-- <li role="presentation"><router-link to="/">Home</router-link></li> -->
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
        <!-- <router-link to="/user/2" tag="li" active-class="active"><a>User 2</a></router-link> -->
        <!-- <li role="presentation"><router-link to="/user">User</router-link></li> -->
    </ul>
</template>