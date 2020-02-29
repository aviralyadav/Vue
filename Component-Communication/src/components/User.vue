<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeMyName">Change My Name</button>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name" :userAge="age" @nameWasChanged="name = $event" :resetFunc="resetName"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" :userAgeFunc="editAge"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
            return {
                name: 'Aviral',
                age: 27
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeMyName() {
                this.name = 'Avi Yadav';
            },
            resetName() {
                this.name = 'Aviral';
            },
            editAge() {
                this.age = 30;
            }
        },
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
