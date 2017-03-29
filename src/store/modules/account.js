/*jshint esversion: 6 */
/*jshint -W030 */

var f7 = new Framework7();
//Store default
var account = {
    namespaced: true,
    state: {
        test: 'ok!!!!!!'
    },
    mutations: {
        LOG(state) {
            console.info("account module load: " + state.test);
        }
    }
};
export { account };
