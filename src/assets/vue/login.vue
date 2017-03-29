<template>
    <div class="login-screen" id="login-screen">
        <f7-view>
            <f7-pages>
                <f7-page login-screen>
                    <f7-progressbar v-if="!singin" :progress="islogin?75:0" color="green"></f7-progressbar>
                    <f7-progressbar v-if="singin" :progress="100" color="green"></f7-progressbar>
                    <f7-block-title style="text-align: center"> 🌟 🌟 🌟 🌟 🌟</f7-block-title>
                    <f7-login-screen-title v-if="!singin">Chào mừng bạn </f7-login-screen-title>
                    <f7-login-screen-title v-if="singin">Chào mừng
                        <br> {{user.email}}</f7-login-screen-title>
                    <div v-if="singin">
                        <f7-list>
                            <f7-list-button>
                                <f7-button fill big @click="LOGOUT" color="red">Đăng xuất</f7-button>
                            </f7-list-button>
                        </f7-list>
                        <f7-list>
                            <f7-list-button>
                                <f7-button big close-login-screen color="green" fill>Truy cập ứng dụng!</f7-button>
                            </f7-list-button>
                        </f7-list>
                    </div>
                    <div v-if="!singin">
                        <f7-list form>
                            <f7-list-item>
                                <f7-label>Email</f7-label>
                                <f7-input v-model="email" name="username" placeholder="nhập email đã đăng ký" type="email"></f7-input>
                            </f7-list-item>
                            <f7-list-item>
                                <f7-label>Mật khẩu</f7-label>
                                <f7-input v-model="password" name="password" type="password" placeholder="nhập mật khẩu"></f7-input>
                            </f7-list-item>
                            <f7-list-item v-if="Register">
                                <f7-label>Xác nhận</f7-label>
                                <f7-input v-model="repassword" name="password" type="password" placeholder="Nhập lại mật khẩu"></f7-input>
                            </f7-list-item>
                        </f7-list>
                        <f7-list>
                            <f7-list-button>
                                <f7-button v-if="!Register" big @click="LOGIN" fill>Đăng nhập</f7-button>
                                <f7-button v-if="Register" @click="REGISTER" big fill color="green">Đăng ký ngay! </f7-button>
                            </f7-list-button>
                            <f7-list>
                                <f7-list-button>
                                    <f7-preloader v-if="islogin" color="blue" size="114px"></f7-preloader>
                                    <f7-preloader v-if="isRegister" color="blue" size="114px"></f7-preloader>
                                </f7-list-button>
                            </f7-list>
                            <f7-list>
                                <f7-list-button v-if="Register">
                                    <f7-button v-if="!isRegister" @click="Register=!Register" fill color="">Trở lại đăng nhập </f7-button>
                                </f7-list-button>
                            </f7-list>
                        </f7-list>
                        <div v-if="!islogin">
                            <f7-list>
                                <f7-grid>
                                    <f7-col>
                                        <f7-button big fill v-if="!Register" open-popup="#popup" color="orange">Quên mật khẩu</f7-button>
                                    </f7-col>
                                    <f7-col>
                                        <f7-button v-if="!Register" big fill @click="Register=!Register" color="green">Đăng ký</f7-button>
                                    </f7-col>
                                </f7-grid>
                            </f7-list>
                            <f7-list>
                                <f7-list-label v-if="!Register">
                                    <p>Bấm "Trải nghiệm" để dùng ứng dụng ngay mà không cần tài khoản, tuy nhiên toàn bộ dữ liệu, thống kê của bạn sẽ không được lưu lại, nếu bạn gỡ ứng dụng, toàn bộ thông tin sẽ bị mất. Đăng nhập để có trải nghiệm tốt hơn</p>
                                </f7-list-label>
                            </f7-list>
                            <f7-list>
                                <f7-list-button>
                                    <f7-button fill v-if="!Register" close-login-screen color="pink">Trải nghiệm</f7-button>
                                </f7-list-button>
                            </f7-list>
                        </div>
                    </div>
                </f7-page>
            </f7-pages>
        </f7-view>
    </div>
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
            ...mapState(['user', 'singin', 'islogin', 'isRegister']),
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
