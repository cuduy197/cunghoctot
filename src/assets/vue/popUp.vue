<template>
    <f7-popup id="RECOVERY_PASS">
        <f7-view navbar-fixed>
            <f7-pages>
                <f7-page>
                    <f7-block inner>
                        <h2 style="text-align: center">Nhập email bạn muốn thay đổi mật khẩu</h2>
                        <f7-list form>
                            <f7-list-item>
                                <f7-label>Email </f7-label>
                                <f7-input v-model="email" name="username" placeholder="nhập email ... " type="email"></f7-input>
                            </f7-list-item>
                        </f7-list>
                        <f7-button fill big color="pink" @click="RECOVERY_PASS">Gửi yêu cầu</f7-button>
                        <f7-list>
                            <f7-button big fill color="" :close-popup="true">Đóng</f7-button>
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
