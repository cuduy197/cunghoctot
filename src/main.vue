<template>
    <!-- App -->
    <div id="app">
        <!-- Statusbar -->
        <f7-statusbar></f7-statusbar>
        <!-- Left Panel -->
        <left-panel> </left-panel>
        <!-- Right Panel -->
        <right-panel></right-panel>
        <!-- Main Views -->
        <f7-views>
            <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
                <!-- Navbar -->
                <nav-bar></nav-bar>
                <!-- Pages -->
                <f7-pages>
                    <f7-page>
                        <!-- [Quote] <quote></quote>  -->
                        <info> </info>
                        <!-- Navigation -->
                        <navigation></navigation>
                    </f7-page>
                </f7-pages>
                <!-- Bottom Bar -->
                <bottom-bar></bottom-bar>
            </f7-view>
        </f7-views>
        <!-- Popup Recovery Pass-->
        <pop-up></pop-up>
        <!-- Wellcome -->
        <wellcome></wellcome>
        <!-- Login Screen -->
        <login></login>
    </div>
</template>
<script>
console.log('Main init ok!');

import Quote from 'assets/vue/quote/quote.vue';
import bottomBar from 'assets/vue/bottomBar.vue';
import leftPanel from 'assets/vue/leftPanel.vue';
import rightPanel from 'assets/vue/rightPanel.vue';
import navBar from 'assets/vue/navBar.vue';
import test from 'assets/vue/test/test.vue';
import login from 'assets/vue/login.vue';
import popUp from 'assets/vue/popUp.vue';
import navigation from 'assets/vue/navigation.vue';
import info from 'assets/vue/info/info.vue';
import wellcome from 'assets/vue/wellcomePopup.vue';

export default {
    components: {
        Quote,
        bottomBar,
        leftPanel,
        rightPanel,
        navBar,
        test,
        login,
        popUp,
        navigation,
        info,
        wellcome
    }
}
</script>
