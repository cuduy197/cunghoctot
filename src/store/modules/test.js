import Parse from "parse";
Parse.initialize("myAppId"); Parse.serverURL = 'http://hosata.com/parse';

var f7 = new Framework7();
//Store default
export const test = {
    namespaced: true,
    state: {
        test: 'ok!!!!!!'
    },
    mutations: {
        TEST(state) {


        } //end TEST
    }
};
