<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button type="button" name="button" @click="signIn">Connection</button>
        <p>You don't have an account? <router-link to="/signup">You can create one</router-link></p>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name : 'login',
    data () {
        return {
            email : '',
            password : ''
        }
    },
    methods : {
        signIn () {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    console.log(user);
                    alert('Well done! You are now connected');
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
    .login {
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 80%;
        padding: 15px;
    }
    button {
        margin-top: 20px;
        width: 50%;
        cursor: pointer;
    }
    p {
        margin-top: 40px;
        font-size: 13px;
    }
    p a {
        text-decoration: underline;
        cursor: pointer;
    }
</style>
