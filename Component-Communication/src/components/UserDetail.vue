<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{switchedName()}}</p>
        <p>Age: {{userAge}}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFunc()">Reset Name by Callback</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        resetFunc: Function,
        userAge: Number
    },
    methods: {
        switchedName(){
            return this.name.split("").reverse().join("")
        },
        resetName(){
            this.name = 'Aviral';
            this.$emit('nameWasChanged', this.name);
        }
    },
    created() {
        eventBus.$on('ageWasEdited', (age) => {
            this.userAge = age;
        })
    },
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
