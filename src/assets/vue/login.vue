<template lang="pug">
#login-screen.login-screen
  f7-view
    f7-pages
      f7-page(login-screen)
        f7-block-title(style='text-align: center; ')  🌟 🌟 🌟 🌟 🌟
        br
        f7-login-screen-title(style="text-shadow: 0 0 4px white, 0 0 5px gray;") CÙNG HỌC TỐT 
        f7-list(form )
          f7-list-item
            f7-label Email :
            f7-input(v-model='email' name='username' placeholder='nhập email' type='email')
          f7-list-item
            f7-label Mật khẩu :
            f7-input(v-model='password' name='password' type='password' placeholder='nhập mật khẩu')
          f7-list-item(v-if='Register' class='animated fadeIn')
            f7-label Xác nhận
            f7-input( v-model='repassword' name='password', type='password' placeholder='nhập lại mật khẩu')
        f7-list
          f7-list-button()
            f7-button(v-if='!Register' class='animated flipInX' @click='LOGIN' big fill) Đăng nhập
            f7-button(v-if='Register' @click='REGISTER' big fill color='green' class='animated flipInX') Đăng ký ngay! 
          f7-list
            f7-list-button(v-if='Register', class='animated fadeInUp')
              f7-button(@click='Register=!Register' big fill) Trở lại đăng nhập 
        f7-list(v-if='!Register' class='animated fadeInUp')
          f7-grid
            f7-col
              f7-button(v-if='!Register', open-popup='#RECOVERY_PASS', color='pink', big, fill) Quên mật khẩu
            f7-col
              f7-button(v-if='!Register', @click='Register=!Register', color='green', big, fill) Đăng ký
        f7-list
          f7-list-label(v-if='Register')
            p
              | Khi bạn bấm đăng ký tức là bạn đã đồng ý với các các điều khoản sử dụng
        //-f7-list
          f7-list-button
            f7-button(v-if='Register', close-login-scree, color='pink', fill) Điều khoản
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
            ...mapState(['user', 'singin', 'isRegister']),
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
            ...mapMutations(['LOGIN', 'LOGOUT', 'REGISTER'])
        }
}
</script>
<style scoped></style>
