import Parse from "parse";
Parse.initialize("myAppId"); Parse.serverURL = 'http://hosata.com/parse';
const firebase = require('firebase/app');
require('firebase/auth');
firebase.initializeApp({ apiKey: "AIzaSyDYmyfh75QPwG8ddlg9OuabPK1Ue-vIDEQ", authDomain: "hoctot2017.firebaseapp.com", })

import { burst } from "./mojs.js";

var f7 = new Framework7({
    modalTitle: 'Thông báo',
    modalButtonOk: 'Xác nhận',
    modalButtonCancel: 'Hủy bỏ',
    modalPreloaderTitle: 'Đang tải'
});
export const mutations = {
    //CHECK AND INIT!!! IMPORTANT!
    INIT_APP(state) {
        Parse.User.current() === null ? console.log("Unlogin parse") : console.log(Parse.User.current().id);
        f7.showPreloader();
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                //Set state
                f7.closeModal();
                state.singin = true;
                state.user.uid = user.uid;
                state.user.photoURL = user.photoURL;
                state.user.email = user.providerData[0].email;
                state.user.name = user.displayName;
                Parse.User.current() !== null ? state.user.id = Parse.User.current().id : false;

                console.log((user.providerData[0].email).split('@')[0] + ' Đã đăng nhập');

                /*
                 ######                              
                 #     #   ##   #####   ####  ###### 
                 #     #  #  #  #    # #      #      
                 ######  #    # #    #  ####  #####  
                 #       ###### #####       # #      
                 #       #    # #   #  #    # #      
                 #       #    # #    #  ####  ###### 
                                                     */
                if (window.localStorage.ParseLogin == "false") {
                    console.log("Login... ");
                    Parse.User.logIn(state.user.uid, state.user.uid, {
                        success: function (user) {
                            console.log(Parse.User.current());
                            console.log("LOGIN PARSE OK!");
                            window.localStorage.ParseLogin = "ok";
                            state.user.id = Parse.User.current().id;
                        },
                        error: function (user, error) {
                            console.log(error);
                            let userParse = new Parse.User();
                            userParse.set("username", state.user.uid);
                            userParse.set("password", state.user.uid);
                            userParse.set("email", state.user.email);
                            userParse.set("uid", state.user.uid);
                            userParse.signUp(null, {
                                success: function (user) {
                                    window.localStorage.ParseLogin = "ok";
                                    state.user.id = Parse.User.current().id;
                                }, error: (user, error) => {
                                    console.error("Error: " + error.code + " " + error.message);
                                }
                            });
                        }
                    });
                }//End parse login
            } else {

                window.localStorage.ParseLogin = "false";
                state.singin = false;
                f7.hidePreloader();
                f7.loginScreen();
                console.info('Bae chưa đăng nhập, đăng nhập để đến với em đi nào bae ^^!');
            }
        });
    },
    OFFLINE(state) {
        f7.alert('Một số chức năng sẽ không hoạt động khi ở chế độ ngoại tuyến, kết nối mạng để có trải nghiệm tốt nhất!');
    },
    GOOGLE_LOGIN(state) {
        f7.showPreloader();
        firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    },
    FB_LOGIN(state) {
        f7.showPreloader();
        firebase.auth().signInWithRedirect(new firebase.auth.FacebookAuthProvider());

    },
    LOGOUT(state) {
        Parse.User.logOut();
        firebase.auth().signOut();
    }

};
