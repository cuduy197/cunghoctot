<template>
    <div class="login-screen modal-in" id="wellcome-screen">
        <f7-view>
            <f7-pages>
                <f7-page login-screen>
                    <f7-progressbar :progress="progress" color="green"></f7-progressbar>
                    <f7-block-title style="text-align: center"> 🌟 🌟 🌟 🌟 🌟</f7-block-title>
                    <f7-login-screen-title>Chào mừng {{user.email}} </f7-login-screen-title>
                    <f7-list style="text-align:center">
                        <f7-preloader v-if="!loading" color="blue" size="114px"></f7-preloader>
                    </f7-list>
                    <div v-if="loading">
                        <div v-if="singin">
                            <f7-list style="text-align:center">
                                <f7-preloader v-if="!user.login" color="green" size="114px"></f7-preloader>
                                <div v-if="user.login">
                                    <f7-button v-if="user.login" big fill color="green" close-login-screen>Truy cập ứng dụng</f7-button>
                                </div>
                            </f7-list>
                        </div>
                        <div v-if="!singin">
                            <f7-list>
                                <f7-button big fill color="orange" open-login-screen="#login-screen">Đăng nhập</f7-button>
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
            const store = this.$store.state;
            return {
                loading: false,
                progress: 0
            }
        },
        created() {
            setTimeout(() => {
                this.loading = !this.loading;
                this.progress = 50;
                setTimeout(() => {
                    this.progress = 75;
                    setTimeout(() => {
                        this.progress = 100;
                    }, 300)
                }, 300)
            }, 2222)
        },
        computed: {
            ...mapState(['singin', 'user']),
        },
        methods: {
            ...mapMutations([])
        }
}
</script>
<style></style>
