<template lang="pug">
f7-panel(left='', reveal='', layout='')
  f7-view#left-panel-view(navbar-through='', :dynamic-navbar='true')
    f7-navbar(title='Tùy chọn 📌')
    f7-pages
      f7-page
        .animated.fadeIn(v-if='singin')
          info
          .card
            f7-list
              f7-list-item(link='/about/', title='🔢 Toán học', link-view='#main-view', link-close-panel='')
              f7-list-item(link='/form/', title='📑 Ngữ văn', link-view='#main-view', link-close-panel='')
              f7-list-item(link='/form/', title='💬 Tiếng anh', link-view='#main-view', link-close-panel='')
          br
          .card
            f7-list
              f7-list-item(link='/about/', title='🔖 Flashcard!', link-view='#main-view', link-close-panel='')
          .card
            f7-list
              f7-list-item(link='/about/', title='🎲 Giải trí', link-view='#main-view', link-close-panel='')
          br
          .card
            f7-list
              f7-list-item(link='#', @click='LOGOUT', title='🔧 Đăng xuất', link-view='#main-view', link-close-panel='')
        .card(v-if='!singin')
          .card-content
            .card-content-inner Đăng nhập, để xem thông tin và thành tích của bạn!
            f7-button(fill='', color='green', open-login-screen='#login-screen') Đăng nhập 

</template>
<script>
import {
    mapState,
    mapMutations
} from 'vuex';

import Quote from './quote/quote';
import Info from './info/info';


export default {
    data() {
            return {
                images: {
                    avatar: require('../static/images/avatar.png')
                }
            }
        },
        computed: {
            ...mapState({
                user: state => state.user,
                singin: state => state.singin,
                avatar: state => state.img.avatar
            })
        },
        methods: {
            ...mapMutations(['LOGOUT'])
        },
        components: {
            Quote,
            Info
        }
}
</script>
<style>
.center {
    text-align: center;
}
</style>
