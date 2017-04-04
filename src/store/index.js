/*jshint esversion: 6 */
/*jshint -W030 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import { state } from "./state.js";
import { getters } from "./getters.js";
import mutations from "./mutations.js";
import { actions } from "./actions.js";



import { account } from "./modules/account";
import { img } from "./modules/img.js";

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        account,
        img
    }
});


store.commit('INIT_DEVICE');
//Init 'CHECK' when start app
store.commit('INIT_APP');
