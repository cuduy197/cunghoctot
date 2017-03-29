<template>
    <f7-popup id="popup">
        <f7-view navbar-fixed>
            <f7-pages>
                <f7-page>
                    <f7-navbar title="Quên mật khẩu">
                        <f7-nav-right>
                            <f7-link :close-popup="true">Đóng</f7-link>
                        </f7-nav-right>
                    </f7-navbar>
                    <f7-block inner>
                        <h2 style="text-align: center">Nhập email bạn muốn nhận mã khôi phục mật khẩu</h2>
                        <f7-list form>
                            <f7-list-item>
                                <f7-label>Email </f7-label>
                                <f7-input v-model="email" name="username" placeholder="Email" type="email"></f7-input>
                            </f7-list-item>
                        </f7-list>
                        <f7-button fill big color="pink" v-if="!isRecoveryPass" @click="RECOVERY_PASS">Gửi mã khôi phục!</f7-button>
                        <f7-list style="text-align:center; margin: 15px">
                            <f7-preloader v-if="isRecoveryPass" color="blue" size="114px"></f7-preloader>
                        </f7-list>
                        <f7-list>
                            <f7-button fill color="" :close-popup="true">Trở lại đăng nhập</f7-button>
                        </f7-list>
                    </f7-block>
                </f7-page>
            </f7-pages>
        </f7-view>
    </f7-popup>
</template>
<script>
import {
    mapState,
    mapMutations
} from 'vuex';

export default {
    data() {
            return {
                send_request: false
            }
        },
        computed: {
            ...mapState({
                isRecoveryPass: state => state.isRecoveryPass,
                test: state => state.account.test
            }),
            email: {
                get() {
                    return this.$store.state.input.email
                },
                set(value) {
                    this.$store.commit('inputEmail', value)
                }
            }
        },
        methods: {
            ...mapMutations(['RECOVERY_PASS'])
        }
}
</script>
