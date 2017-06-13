<template lang="pug">
#login-screen.login-screen
  f7-view
    f7-pages
      f7-page(login-screen)
        f7-block-title(class="center")  🌟 🌟 🌟 🌟 🌟
        br
        f7-login-screen-title(style="text-shadow: 0 0 4px white, 0 0 5px gray;") CÙNG HỌC TỐT 
        br
        br
        br
        br
        f7-list
          f7-list-button
            f7-button(@click='FB_LOGIN' v-if='!offline' class='animated flipInX'  big fill color="blue") Đăng nhập Facebook
            f7-button( v-if='offline' class='animated flipInX'  big fill color="red") Kết nối internet để đăng nhập! 

</template>
<script>
import {
    mapState,
    mapMutations
} from 'vuex'


export default {
    data() {
        return {
            Register: false,
        }
    },
    computed: {
        ...mapState(['user', 'singin', 'isRegister', 'offline']),
        email: {
            get() {
                return this.$store.state.input.email
            },
            set(value) {
                this.$store.commit('inputEmail', value)
            }
        },
        password: {
            get() {
                return this.$store.state.input.password
            },
            set(value) {
                this.$store.commit('inputPassword', value)
            }
        },
        repassword: {
            get() {
                return this.$store.state.input.repassword
            },
            set(value) {
                this.$store.commit('inputRePassword', value)
            }
        }
    },
    methods: {
        ...mapMutations(['LOGIN', 'LOGOUT', 'REGISTER', 'GOOGLE_LOGIN', 'FB_LOGIN'])
    }
}
</script>
<style scoped></style>
