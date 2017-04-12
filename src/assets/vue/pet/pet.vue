<template lang="pug"> 
.popover.thu-nuoi(style='width: 310px')
  .popover-angle
  .popover-inner
    .list-block
      div
      ul
        li.center
          p( v-html="math")
          f7-progressbar( v-bind:progress="progressbar" color='blue')
          h1(:class='[css]' @click="playMusic"  style='font-size: 3.5em;') 🐧
          pre Chúc bạn 1 ngày tốt lành
        li
        f7-list(style="margin: 10px")
          f7-grid.animated.fadeIn
            f7-col
              f7-button(@click="change"  class="animated flipInX" style='background-color: indigo;' big='', fill='') Ôn bài 📚
            f7-col
              f7-button(v-if="!isPlayMusic", @click="playMusic" class="animated flipInX" big='', fill='', color='') Nghe nhạc 🎶
              f7-button(v-if="isPlayMusic", @click="playMusic" class="animated flipInX" big='', fill='', color='yellow' style="color: black;") Tạm dừng 🔇 

</template>
<script>
import {
    mapState,
    mapMutations
} from 'vuex'

// import Info from './info/info';

var myApp = new Framework7();

export default {
    data() {
            return {
                progressbar: 0,
                css: '',
                math: '<i>Bạn có biết: </i> `a^0`',
                isPlayMusic: false,
                myMedia: null,
                position: 0,
                duration: 0,
                checkMusic: null
            }
        },
        mounted() {},
        methods: {
            change() {
                this.math = '<i>Kết quả: </i>`a^' + Math.floor((Math.random() * 10) + 1) + '`';
                this.$nextTick(function() {
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
                });
            },
            playMusic() {
                if (this.myMedia === null) {

                    var isMobile = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
                    if (isMobile) {
                        // PhoneGap application
                        this.myMedia = new Media("/android_asset/www/music.mp3");
                    } else {
                        this.myMedia = new Media("music.mp3");
                    }
                    // Update media position every second
                    var my_media = this.myMedia;
                    this.checkMusic = setInterval(() => {
                        my_media.getCurrentPosition(
                            //success
                            (position) => {
                                this.position = position;
                            });
                    }, 1000);

                }
                this.isPlayMusic = !this.isPlayMusic;
                if (this.isPlayMusic) {
                    this.myMedia.play();
                    this.css = "animated infinite tada"

                } else {
                    setTimeout(() => {
                        this.myMedia.pause();
                        this.css = "";
                    }, 200)
                }
            },
            stopMusic() {

            }

        },
        watch: {
            math() {
                console.log("math change ...");
            },
            position() {
                var mymedia = this.myMedia;
                this.progressbar = (this.position / this.duration) * 100;
                if (this.myMedia !== null) {
                    var durtion = mymedia.getDuration();
                    this.duration = durtion;
                }
                //alert(durtion + ' ss');
                if (this.position < 0 || this.position == durtion) {
                    this.position = 0;
                    clearInterval(this.checkMusic);
                    console.info('equal');
                    this.checkMusic = undefined;
                    this.css = "";
                    this.progressbar = "";
                    this.myMedia = null;
                    this.isPlayMusic = false;
                }
            }
        },
        components: {}
}
</script>
<style>
</style>
