<template>
    <div class="login-screen modal-in" id="wellcome-screen">
        <f7-view>
            <f7-pages>
                <f7-page login-screen>
                    <f7-progressbar :progress="Progress" color="green"></f7-progressbar>
                    <f7-block-title style="text-align: center"> 🌟 🌟 🌟 🌟 🌟</f7-block-title>
                    <f7-login-screen-title v-if="!user.login" class="animated fadeInDown">Đang tải ...</f7-login-screen-title>
                    <f7-login-screen-title v-if="user.login" class="animated fadeInDown">Chào mừng {{user.email}} </f7-login-screen-title>
                    <f7-list style="text-align:center">
                        <f7-preloader v-if="!Loading" color="blue" size="114px"></f7-preloader>
                    </f7-list>
                    <div v-if="Loading">
                        <div v-if="singin">
                            <f7-list style="text-align:center">
                                <f7-preloader v-if="!user.login" color="green" size="114px"></f7-preloader>
                                <div v-if="!user.login">
                                    <f7-list v-if="LoadTooLong"> <i>Nếu không truy cập được ứng dụng, hãy kiểm tra kết nối mạng của bạn (wifi, 3g)!, nếu không có kết nối mạng hãy sử dụng chế độ ngoại tuyến (ofline) </i>
                                    </f7-list>
                                    <f7-list v-if="LoadTooLong">
                                        <f7-list-button>
                                            <f7-button big fill color="pink" @click="OFFLINE" close-login-screen>Chế độ ngoại tuyến (Offline)</f7-button>
                                        </f7-list-button>
                                    </f7-list>
                                </div>
                            </f7-list>
                        </div>
                        <div v-if="!singin">
                            <f7-list>
                                <quote></quote>
                                <br>
                            </f7-list>
                            <f7-list>
                                <f7-list-button>
                                    <f7-button big fill color="orange" open-login-screen="#login-screen">Đăng nhập</f7-button>
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

import Quote from './quote/quote';

export default {
    data() {
            const store = this.$store.state;
            return {
                Loading: false,
                Progress: 0,
                LoadTooLong: false
            }
        },
        created() {
            setTimeout(() => {
                this.Loading = !this.Loading;
                this.Progress = 50;
                setTimeout(() => {
                    this.Progress = 75;
                    setTimeout(() => {
                        this.Progress = 100;
                    }, 300)
                }, 300)
            }, 2222)

            setTimeout(() => {
                this.LoadTooLong = !this.LoadTooLong;
            }, 8888)

        },
        computed: {
            ...mapState(['singin', 'user']),
        },
        methods: {
            ...mapMutations(['OFFLINE'])
        },
        components: {
            Quote
        }
}
</script>
<style></style>
