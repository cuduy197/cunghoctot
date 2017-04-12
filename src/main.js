/*jshint esversion: 6 */
// Import Vue
import Vue from 'vue';
// Import F7
import Framework7 from 'framework7';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue';
//F7 icons
import Framework7Icons from 'framework7-icons/css/framework7-icons.css';
// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.css';
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css';
//Animated css
import 'animate.css/animate.css';

/* OR for Material Theme:
 import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
 import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
 */
// Import App Custom Styles
import AppStyles from './assets/static/sass/main.scss';
// Import Routes
import Routes from './routes.js';
// Import App Component
import App from './main.vue';
// VueTouch
import VueTouch from 'vue-touch';
//Firebase
import Firebase from 'firebase';

import mojs from 'mo-js';

import VueTyperPlugin from 'vue-typer';


// Init F7 Vue Plugin
Vue.use(Framework7Vue);
Vue.use(VueTouch);
Vue.use(VueTyperPlugin);

// Vuex store
import { store } from './store/index';

// Init App
new Vue({
    el: '#app',
    store,
    template: '<app/>',
    // Init Framework7 by passing parameters here
    framework7: {
        root: '#app',
        routes: Routes,
        animateNavBackIcon: true,
    },
    // Register App Component
    components: {
        app: App
    }
});
