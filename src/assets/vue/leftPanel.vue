<template>
    <f7-panel left reveal layout="">
        <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
            <f7-navbar title="Tùy chọn 📌"></f7-navbar>
            <f7-pages>
                <f7-page>
                    <div v-if="singin" class="animated fadeIn">
                        <info></info>
                        <!--  <quote></quote> -->
                        <!--  <f7-block-title>Load page in main view</f7-block-title>
                            <f7-list>
                                <f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
                                <f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
                            </f7-list> -->
                        <div class="card">
                            <f7-list>
                                <f7-list-item link="/about/" title="🔢 Toán học" link-view="#main-view" link-close-panel></f7-list-item>
                                <f7-list-item link="/form/" title="📑 Ngữ văn" link-view="#main-view" link-close-panel></f7-list-item>
                                <f7-list-item link="/form/" title="💬 Tiếng anh" link-view="#main-view" link-close-panel></f7-list-item>
                            </f7-list>
                        </div>
                        <br>
                        <div class="card">
                            <f7-list>
                                <f7-list-item link="/about/" title="🔖 Flashcard!" link-view="#main-view" link-close-panel></f7-list-item>
                            </f7-list>
                        </div>
                        <div class="card">
                            <f7-list>
                                <f7-list-item link="/about/" title="🎲 Giải trí" link-view="#main-view" link-close-panel></f7-list-item>
                            </f7-list>
                        </div>
                        <br>
                        <div class="card">
                            <f7-list>
                                <f7-list-item link="#" @click="LOGOUT" title="🔧 Đăng xuất" link-view="#main-view" link-close-panel></f7-list-item>
                            </f7-list>
                        </div>
                    </div>
                    <div v-if="!singin" class="card">
                        <div class="card-content">
                            <div class="card-content-inner">Đăng nhập, để xem thông tin và thành tích của bạn!</div>
                            <f7-button fill color="green" open-login-screen="#login-screen">Đăng nhập </f7-button>
                        </div>
                    </div>
                </f7-page>
            </f7-pages>
        </f7-view>
    </f7-panel>
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
