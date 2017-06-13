import Vue from 'vue';
//[STORE]
import Vuex from 'vuex';
Vue.use(Vuex);
import { state } from "./state.js";
import { getters } from "./getters.js";
import { mutations } from "./mutations.js";
import { actions } from "./actions.js";


//[MODULE]
import { account } from "./modules/account";
import { cordova_util } from "./modules/cordova_util";
import { img } from "./modules/img";
import { test } from "./modules/test";
import { mp3 } from "./modules/mp3";



export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    account,
    cordova_util,
    img,
    test,
    mp3
  }
});

store.commit('test/TEST');
//Init cordova 
store.commit('cordova_util/INIT');
//Init 'CHECK' when start app
store.commit('INIT_APP');
