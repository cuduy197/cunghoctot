/*jshint esversion: 6 */
/*jshint -W030 */
var input = {
    inputEmail(state, value) { state.input.email = value; },
    inputPassword(state, value) { state.input.password = value; },
    inputRePassword(state, value) { state.input.repassword = value; }
};

export default { input };
