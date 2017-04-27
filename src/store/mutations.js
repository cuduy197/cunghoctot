import firebase from 'firebase';
import { db, userRef, dataRef, burst } from "./firebase_init.js";

var f7 = new Framework7({
    modalTitle: 'Thông báo',
    modalButtonOk: 'Xác nhận',
    modalButtonCancel: 'Hủy bỏ',
    modalPreloaderTitle: 'Đang tải'
});
export const mutations = {
    inputEmail(state, value) { state.input.email = value; },
    inputPassword(state, value) { state.input.password = value; },
    inputRePassword(state, value) { state.input.repassword = value; },
    //CHECK AND INIT!!! IMPORTANT!
    INIT_APP(state) {
        firebase.auth().onAuthStateChanged(user => {
            var onUpdateUserUID;
            if (user) {
                f7.closeModal();
                state.singin = true;
                console.log('Chào mừng: ' + firebase.auth().currentUser.email);
                console.info('Bae đã đăng nhập ^^!' + user.photoURL);
                //UID and Eamil, login
                state.user.uid = user.uid;
                state.user.photoURL = user.photoURL;
                state.user.email = user.email;
                console.log("State uid của bae là : " + state.user.uid);

                //CẬP NHẬT 1 LẦN
                var UserUID = userRef.child(user.uid);
                UserUID.update({ login: true });
                UserUID.once("value", snapshot => {
                    let data = snapshot.val();
                    console.log('once Update!');
                    //KHỞI TẠO CÁC THUỘC TÍNH LẦN ĐẦU
                    data.level === undefined && UserUID.update({ level: 0 });
                    data.xu === undefined && UserUID.update({ xu: 0 });

                    //Show brust effect
                    state.user.login && setTimeout(() => {
                        burst.replay();
                    }, 888);
                }, (error) => {
                    f7.alert('Đã có lỗi khi tải dữ liệu! Kiểm tra kết nối mạng của bạn!');
                    console.info("Error: " + error.code);
                });
                //SYNC
                //CẬP NHẬT LIÊN TỤC KHI GIÁ TRỊ THAY ĐỔI
                //Set snapshot data -->  store state!
                onUpdateUserUID = UserUID.on("value", snapshot => {
                    //console.log('on Update!');
                    console.log(snapshot.val());
                    var data = snapshot.val();
                    state.user.level = data.level;
                    state.user.xu = data.xu;
                    state.user.login = data.login;
                }, (error) => {
                    f7.alert('Đã có lỗi khi tải dữ liệu! Kiểm tra kết nối mạng của bạn!');
                    console.info("Error: " + error.code);
                });
            } else {

                f7.hidePreloader();
                f7.loginScreen();
                console.info('Bae chưa đăng nhập, đăng nhập để đến với em đi nào bae ^^!');
                //XÓA CẬP NHẬT DỮ LIỆU CỦA UID CŨ!
                //Cance listener value change !
                if (state.user.login === true) {
                    userRef.child(state.user.uid).update({ login: false });
                    userRef.child(state.user.uid).off('value', onUpdateUserUID);
                    console.info('Đã đăng xuất, tạm biệt bae >.<!');
                    //Reset
                    //state.input.password = '';
                    state.user.uid = "";
                    state.user.email = 'Đang tải...';
                    state.user.level = 'Đang tải...';
                    state.singin = false;
                }


            }
        });
    },
    INIT_DEVICE(state) {

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
                    function() {
                        navigator.app.clearHistory();
                        navigator.app.exitApp();
                    },
                    function() {
                        //f7.closeModal();
                    });
            }
        }
    },
    OFFLINE(state) {
        f7.alert('Một số chức năng sẽ không hoạt động khi ở chế độ ngoại tuyến, kết nối mạng để có trải nghiệm tốt nhất!');
    },
    GOOGLE_LOGIN(state) {
        f7.showPreloader();
        firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    },

};
