<template lang="pug">
#wellcome-screen.login-screen
  f7-view
    f7-pages
      f7-page(login-screen='')
        f7-progressbar(:progress='Progress', color='green')
        f7-block-title(style='text-align: center')  🌟 🌟 🌟 🌟 🌟
        f7-login-screen-title.animated.fadeInDown Cùng học tốt.
        f7-list(style='text-align:center')
          f7-preloader(v-if='!Loading', color='blue', size='200px')
        div(v-if='Loading')
          div(v-if='singin===true')
            f7-list(style='text-align:center')
              f7-preloader(v-if='!user.login', :color='Color', size='200px')
              div(v-if='!user.login')
                f7-list(v-if='LoadTooLong')
                  i
                    | Nếu không truy cập được ứng dụng, hãy kiểm tra kết nối mạng của bạn (wifi, 3g)!, nếu không có kết nối mạng hãy sử dụng chế độ ngoại tuyến (ofline)
                f7-list(v-if='LoadTooLong')
                  f7-list-button
                    f7-button(big, fill, color='pink', @click='OFFLINE', close-login-screen='') Chế độ ngoại tuyến (Offline)
          div(v-if='Loading')
            div(v-if='singin===false')
                f7-list
                 quote
                 br
                f7-list
                    f7-list-button
                    f7-button(big='', fill='', color='orange', open-login-screen='#login-screen') Đăng nhập
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
                Color: 'green',
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
                this.Color = 'orange';
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
