<template>
    <div>
        <div class="card facebook-card" style="border-radius: 10px;padding: 5px;box-shadow: 0 0px 10px rgba(0,0,0,0.2);">
            <div class="card-header">
                <div class="facebook-avatar animated tada">
                    <img :src="user.photoURL" width="35" height="35">
                </div>
                <div class="facebook-name">{{user.name}}</div>
                <div class="facebook-date">id: {{user.id}} </div>
            </div>
            <div class="card-content">
                <div class="center">
                    <div></div>
                    <div class="chip bg-green">
                        <div class="chip-label">🎉 Cao thủ </div>
                    </div>
                    <div class="chip bg-pink">
                        <div class="chip-label">💎 Nhà giàu</div>
                    </div>
                    <div class="chip bg-blue">
                        <div class="chip-label">🛄 Bố làm to</div>
                    </div>
                    <div class="chip" style="background-color: yellow; color: black">
                        <div class="chip-label">💖 Đẹp trai</div>
                    </div>
                    <div class="chip bg-lightblue">
                        <div class="chip-media ">✅</div>
                        <div class="chip-label">Học giỏi</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapState,
    mapMutations
} from 'vuex'

export default {
    data() {
        return {}
    },
    computed: {
        ...mapState({
            user: state => state.user,
            singin: state => state.singin,
            avatar: state => state.img.avatar
        })
    },

    methods: {
        ...mapMutations(['LOGOUT', 'LEVELUP'])
    }
}
</script>
<style>
.facebook-card .card-header {
    display: block;
    padding: 5px;
    padding-bottom: 12px;
}

.facebook-card .facebook-avatar {
    float: left;
    padding-right: 10px;
}

.facebook-card .facebook-name {
    margin-left: 44px;
    font-size: 14px;
    font-weight: 500;
}

.facebook-card .facebook-date {
    margin-left: 44px;
    font-size: 14px;
    color: #8e8e93;
}

.facebook-card .card-footer {
    background: #fafafa;
}

.facebook-card .card-footer a {
    color: #81848b;
    font-weight: 500;
}

.facebook-card .card-content img {
    display: block;
}
</style>
