<template lang="pug"> 
.popover.thu-nuoi(style='width: 310px')
  .popover-angle
  .popover-inner
    .list-block
      div
      ul
        li.center
          p( v-html="math")
          f7-progressbar(infinite color='multi')
          h1.animated.tada(style='font-size: 3.5em;') 🐧
          pre Cấp độ : 0
          pre Sức khỏe : 0/10
        li
        f7-list(style="margin: 10px")
          f7-grid.animated.fadeIn
            f7-col
              f7-button(@click="change" style='background-color: indigo;' big='', fill='') Chăm sóc 💊
            f7-col
              f7-button( big='', fill='', color='') Chém gió 😄
</template>
<script>
import {
    mapState,
    mapMutations
} from 'vuex'

// import Info from './info/info';

export default {
    data() {
            return {
                math: '`alpha`'
            }
        },
        mounted() {},
        methods: {
            change() {
                this.math = '`sum_(i=1)^n i^3=((n(n+1))/2)^' + Math.floor((Math.random() * 10) + 1) + '`';
                this.$nextTick(function() {
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
                });
            }
        },
        watch: {
            math() {
                console.log("math change ...");
            }
        },
        components: {}
}
</script>
<style>
</style>
