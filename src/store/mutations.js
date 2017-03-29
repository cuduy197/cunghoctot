/*jshint esversion: 6 */
/*jshint -W030 */
import firebase from 'firebase';
import { db, userRef } from "./firebase_init.js";

var f7 = new Framework7();
var mutations = {
    inputEmail(state, value) { state.input.email = value; },
    inputPassword(state, value) { state.input.password = value; },
    inputRePassword(state, value) { state.input.repassword = value; },
    //CHECK AND INIT!!! IMPORTANT!
    INIT_APP(state) {
        firebase.auth().onAuthStateChanged(user => {
            var onUpdateUserUID;
            if (user) {
                state.singin = true;

                console.log(firebase.auth().currentUser);
                console.info('Bae đã đăng nhập ^^!');
                //UID and Eamil, login 
                state.user.uid = user.uid;
                state.user.email = user.email;

                console.log("State uid của bae là : " + state.user.uid);

                //Init once
                var UserUID = userRef.child(user.uid);
                UserUID.update({ login: true });
                UserUID.once("value", snapshot => {
                    let data = snapshot.val();
                    console.log('once Update!');
                    data.level === undefined && UserUID.update({ level: 0 });
                });

                //Set snapshot data -->  store state! 
                //Check when value change listener!
                onUpdateUserUID = UserUID.on("value", snapshot => {
                    console.log('on Update!');
                    console.log(snapshot.val());
                    var data = snapshot.val();
                    state.user.level = data.level;
                    state.user.login = data.login;
                }, (error) => {
                    f7.alert('Đã có lỗi khi tải dữ liệu! Kiểm tra kết nối mạng của bạn!');
                    console.info("Error: " + error.code);
                });
            } else {
                if (state.singin) {
                    userRef.child(state.user.uid).update({ login: false });
                    console.info('Đã đăng xuất, tạm biệt bae >.<!');
                }
                console.info('Bae chưa đăng nhập, đăng nhập để đến với em đi nào bea ^^!');
                //Cance listener value change !
                state.singin && userRef.child(state.user.uid).off('value', onUpdateUserUID);
                //Reset
                state.input.password = '';
                state.user.email = '';
                state.user.level = 'Đang tải...';
                state.singin = false;

            }

        });
    },
    LEVELUP(state, payload) {
        //console.log(state.user.uid);
        var level = state.user.level;
        if (state.singin) {
            if (payload == 'add') {
                level++;
                userRef.child(state.user.uid).update({
                    level: level
                });
            } else {
                level--;
                userRef.child(state.user.uid).update({
                    level: level
                });
            }
        }
    },
    LOGIN(state) {
        var email = state.input.email;
        var password = state.input.password;
        //Check login
        // firebase.auth().onAuthStateChanged(user => { user ? state.singin = true : state.singin = false; });
        //SingIn
        if (password !== "" && email !== "" && password.length > 5) {
            state.islogin = true;
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    f7.addNotification({
                        title: 'Thông báo',
                        message: `Chào mừng bạn ${email}`,
                        hold: 3000
                    });
                })
                .catch(function(error) {
                    setTimeout(() => { state.islogin = !state.islogin; }, 1234);
                    var errorCode = error.code;
                    console.log(error.code);
                    errorCode === 'auth/wrong-password' && f7.alert('Mật khẩu sai!');
                    errorCode === 'auth/invalid-email' && f7.alert('Vui lòng nhập đúng địa chỉ email');
                    errorCode === 'auth/user-not-found' && f7.alert('Email chưa đăng ký!');
                    errorCode === 'auth/network-request-failed' && f7.alert('Kiểm tra kết nối mạng của bạn!');
                    errorCode === 'auth/too-many-requests' && f7.alert('Bạn đã đăng nhập sai quá nhiều lần, vui lòng thử lại sau ít phút!');
                    var errorMessage = error.message;
                    console.error(error.message);
                });
        } else {
            password === "" || email === "" || email.length < 5 ? f7.alert('Kiểm tra lại thông tin đăng nhập!') : f7.alert('Mật khẩu quá ngắn');
        }
    },
    LOGOUT(state) {
        state.islogin = false;
        state.isRegister = false;
        firebase.auth().signOut()
            .then((user) => {
                f7.addNotification({
                    title: 'Thông báo',
                    message: 'Bạn đã đăng xuất!',
                    hold: 3000
                });
            }).catch(() => {
                f7.alert('Có lỗi, hãy kiểm tra kết nối mạng của bạn!');
                console.error(error.message);
            });
    },
    REGISTER(state) {
        state.isRegister = true;
        var email = state.input.email;
        var password = state.input.password;
        var repassword = state.input.repassword;

        if (password == repassword && password.length > 5) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    f7.alert('Chúc mừng bạn đã đăng ký thành công!');
                    //init user
                    userRef.child(user.uid).set({
                        email: email,
                        password: password
                    });
                })
                .catch((error) => {
                    state.isRegister = false;
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    errorCode == 'auth/weak-password' && f7.alert('Mật khẩu quá yếu, hãy chọn mật khẩu khác');
                    errorCode === 'auth/invalid-email' && f7.alert('Vui lòng nhập đúng địa chỉ email');
                    errorCode === 'auth/email-already-in-use' && f7.alert('Email bạn nhập đã được đăng ký!, hãy nhập email khác');
                    errorCode === 'auth/network-request-failed' && f7.alert('Kiểm tra kết nối mạng của bạn!');
                    console.log(error);
                });
        } else {
            state.isRegister = false;
            password === "" || email === "" ? f7.alert('Hãy nhập đầy đủ thông tin sau đó nhấn "Đăng ký ngay"!') : password.length < 5 ? f7.alert('Mật khẩu quá ngắn! hẫy nhập trên 5 ký tự') : f7.alert('Sai mật khẩu');

        }
    },
    RECOVERY_PASS(state) {
        var email = state.input.email;
        state.isRecoveryPass = true;
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                f7.alert(`Đã gửi mã khôi phục đến ${email} Kiểm tra hộp thư đến trong email nhé, nếu không nhận được, hãy thử lại!`);
                setTimeout(() => { state.isRecoveryPass = false; }, 1234);
            })
            .catch(error => {
                console.log(error);
                var errorCode = error.code;
                state.isRecoveryPass = false;
                errorCode == 'auth/internal-error' && f7.alert('Bạn đã gửi yêu cầu quá nhiều lần trong thời gian ngắn, hãy thử lại sau ít phút!');
                errorCode === 'auth/user-not-found' && f7.alert(`Email ${email} chưa đăng ký!, hãy nhập email đã đăng ký !`);
                errorCode === 'auth/invalid-email' && f7.alert('Vui lòng nhập đúng địa chỉ email');
                errorCode === 'auth/network-request-failed' && f7.alert('Kiểm tra kết nối mạng của bạn!');
            });
    }
};

export default mutations;
