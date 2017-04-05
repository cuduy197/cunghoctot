<template>
    <f7-page>
        <f7-navbar title="About" back-link="Back" sliding></f7-navbar>
        <f7-block inner>
            <p>Here is About page!</p>
            <p>You can go</p>
            <li><b>Url:</b> {{$route.url}}</li>
            <f7-block inner>
                <f7-link @click="$router.back()">Go back via Router API</f7-link>
            </f7-block>
            <f7-button v-touch-ripple big fill back>back</f7-button>
        </f7-block>
    </f7-page>
</template>
<script>
/*  import {
        mapGetters
    } from 'vuex';
    export default {
        computed: { ...mapGetters(['add'])
        }
    }*/
</script>
