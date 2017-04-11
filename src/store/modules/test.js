/*jshint esversion: 6 */
/*jshint -W030 */
var f7 = new Framework7();
//Store default
var test = {
    namespaced: true,
    state: {
        test: 'ok!!!!!!'
    },
    mutations: {
        TEST(state) {

            /*            setInterval(() => {
                            console.log('mojs');
                            MathJax.Hub.Typeset();
                        }, 1000);*/
        } //end TEST
    }
};
export { test };
