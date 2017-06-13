import { burst } from ".././mojs.js";
var f7 = new Framework7({
    modalTitle: 'Thông báo',
    modalButtonOk: 'Xác nhận',
    modalButtonCancel: 'Hủy bỏ',
    modalPreloaderTitle: 'Đang tải'
});

export const cordova_util = {
    namespaced: true,
    mutations: {
        INIT(state) {
            var exit = false;
            document.addEventListener("deviceready", onDeviceReady, false);
            document.addEventListener("offline", onOffline, false);

            function onDeviceReady() {
                document.addEventListener("backbutton", onBackKeyDown, false);
                document.addEventListener("resume", onResume, false);

            }
            // Handle the offline event
            function onOffline() {
                state.offline = true;
                f7.alert('Bạn chưa kết nối Internet! Ứng dụng chuyển sang chế độ ngoại tuyến (OFFLINE) !');
                document.addEventListener("online", onOnline, false);
            }
            // Handle the resume event
            function onResume() {
                burst.replay();
            }
            // Handle the online event
            function onOnline() {
                state.offline = false;
                f7.alert('Bạn đã kết nối Internet!, dữ liệu của bạn sẽ được đồng bộ!');
            }
            // Handle the back button
            function onBackKeyDown() {
                exit = !exit;
                if (exit) {
                    f7.confirm('Bạn muốn thoát ứng dụng?',
                        function () {
                            navigator.app.clearHistory();
                            navigator.app.exitApp();
                        },
                        function () {
                            //f7.closeModal();
                        });
                }
            }

            console.log("INIT CORDOVA OK!");
        }
    }
};
