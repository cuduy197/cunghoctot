<template>
    <f7-panel right cover layout="">
        <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
            <f7-navbar title="Cài đặt" sliding></f7-navbar>
            <f7-pages>
                <f7-page>
                    <div v-if="singin">
                        <div class="card">
                            <div class="card-content-inner">
                                <f7-button fill color="orange">{{user.email}}</f7-button>
                            </div>
                        </div>
                    </div>
                    <div v-if="!singin" class="card">
                        <div class="card-content">
                            <div class="card-content-inner">Đăng nhập, để xem thông tin và thành tích của bạn!</div>
                            <f7-button fill color="green" open-login-screen="#login-screen">Đăng nhập </f7-button>
                        </div>
                    </div>
                    <p style="text-align: center">© Phiên bản 1.0</p>
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

export default {
    computed: {
        ...mapState(['user', 'singin'])
    },
    methods: {
        ...mapMutations(['LOGOUT'])
    }
}
</script>
