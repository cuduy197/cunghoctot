<template lang="pug">
#app
  f7-statusbar
  left-panel
  right-panel
  f7-views
    f7-view#main-view(navbar-through='', :dynamic-navbar='true', main='')
      nav-bar
      f7-pages
        f7-page
          info
          navigation
      bottom-bar
  pop-up
  wellcome
  login
  test
</template>
<script>
import Quote from 'assets/vue/quote/quote';
import bottomBar from 'assets/vue/bottomBar';
import leftPanel from 'assets/vue/leftPanel';
import rightPanel from 'assets/vue/rightPanel';
import navBar from 'assets/vue/navBar';
import test from 'assets/vue/test/test';
import login from 'assets/vue/login';
import popUp from 'assets/vue/popUp';
import navigation from 'assets/vue/navigation';
import info from 'assets/vue/info/info';
import wellcome from 'assets/vue/wellcomePopup';

export default {

    data() {
            return {}
        },
        components: {
            Quote,
            bottomBar,
            leftPanel,
            rightPanel,
            navBar,
            test,
            login,
            popUp,
            navigation,
            info,
            wellcome
        },
        created() {}
}
</script>
