<template>
    <div class="sign-up">
        <p>Let's create a new account!</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button type="button" name="button" @click="signUp">Sign Up</button>
        <span>or go back to <router-link to="/login">login.</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name : 'signUp',
    data () {
        return {
            email : '',
            password : ''
        }
    },
    methods : {
        signUp () {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    alert('Your account has been created!');
                    this.$router.replace('todos');
                },
                (error) => {
                    alert('Oops. ' + error.message);
                }
            );
        }
    },
    mounted () {
        if (firebase.auth().currentUser) {
            this.$router.replace('todos');
        }
    }
}
</script>

<style lang="css" scoped>
    .sign-up {
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 80%;
        padding: 15px;
    }
    button {
        margin-top: 10px;
        width: 50%;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>
