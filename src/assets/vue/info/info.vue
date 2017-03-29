<template>
    <div style="text-align : center;">
        <f7-button big fill color="" v-if="!singin" open-login-screen="#login-screen">Login </f7-button>
        <div v-if="singin">
            <f7-button big fill color="red" v-if="singin" @click="LOGOUT">{{user.email}} </f7-button>
            <br>
            <f7-button big fill> {{user.level}}</f7-button>
            <br>
            <br>
            <f7-grid>
                <f7-col>
                    <f7-button color="green" @click="LEVELUP('add')" fill>Level Up</f7-button>
                </f7-col>
                <f7-col>
                    <f7-button color="pink" @click="LEVELUP('subtract')" fill>Level Down</f7-button>
                </f7-col>
            </f7-grid>
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
            ...mapState(['singin', 'user'])
        },

        methods: {
            ...mapMutations(['LOGOUT', 'LEVELUP'])
        }
}
</script>
<style>
</style>
