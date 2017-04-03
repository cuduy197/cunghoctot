/*jshint esversion: 6 */
/*jshint -W030 */
const state = {
    user: {
        emai: '',
        uid: '',
        level: 'Đang tải...',
        login: '',
        xu: 'Đang tải...'
    },
    input: {
        email: '',
        password: '',
        repassword: ''
    },
    singin: false, //Check if was singin!
    //Input
    islogin: false, //Check state when click Login or Logout
    isRegister: false, //Check when click register
    isRecoveryPass: false // Chech when click recovery pass
};

export { state };
