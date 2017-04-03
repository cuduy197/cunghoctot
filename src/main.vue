<template>
    <div id="app">
        <f7-statusbar></f7-statusbar>
        <left-panel> </left-panel>
        <right-panel></right-panel>
        <!-- Hiển thị ứng dụng từ các component -->
        <f7-views layout="">
            <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
                <nav-bar></nav-bar>
                <f7-pages>
                    <f7-page>
                        <!-- [Quote] <quote></quote> -->
                        <info> </info>
                        <navigation></navigation>
                    </f7-page>
                </f7-pages>
                <bottom-bar></bottom-bar>
            </f7-view>
        </f7-views>
        <!-- Tổng hợp các modal -->
        <pop-up></pop-up>
        <wellcome></wellcome>
        <login></login>
    </div>
</template>
<script>
import Quote from 'assets/vue/quote/quote';
import bottomBar from 'assets/vue/bottomBar';
import leftPanel from 'assets/vue/leftPanel';
import rightPanel from 'assets/vue/rightPanel';
import navBar from 'assets/vue/navBar';
import test from 'assets/vue/test/test';
import login from 'assets/vue/login';
import popUp from 'assets/vue/popUp';
import navigation from 'assets/vue/navigation';
import info from 'assets/vue/info/info';
import wellcome from 'assets/vue/wellcomePopup';

export default {

    data() {
            return {}
        },
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
        },
        created() {
            var myApp = new Framework7({
                modalTitle: 'Thông báo',
                modalButtonOk: 'Xác nhận',
                modalButtonCancel: 'Hủy bỏ'
            });
            var exit = false;
            document.addEventListener("deviceready", onDeviceReady, false);

            document.addEventListener("offline", onOffline, false);

            function onDeviceReady() {
                document.addEventListener("backbutton", onBackKeyDown, false);
            }
            // Handle the offline event
            function onOffline() {
                alert('Bạn chưa kết nối Internet! Hãy kết nối internet để lưu dữ liệu của bạn!');
            }
            // Handle the back button
            function onBackKeyDown() {

                exit = !exit;
                if (exit) {
                    myApp.confirm('Bạn muốn thoát ứng dụng?',
                        function() {
                            navigator.app.clearHistory();
                            navigator.app.exitApp();
                        },
                        function() {
                            myApp.closeModal();
                        });
                }

            }
        }
}
</script>
