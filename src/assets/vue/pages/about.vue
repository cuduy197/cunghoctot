<template>
    <f7-page>
        <f7-navbar title="About" back-link="Back" sliding></f7-navbar>
        <f7-block inner>
            <p>Here is About page!</p>
            <p>You can go</p>
            <div id="demo"> Hello</div>
           
            <div v-html="math" class="animated tada"> </div>

  <div @click="isToggle=!isToggle" v-if="!isToggle" class="card animated flipInX k-border bg-blue">
  <div class="card-header white">Thông tin: </div>
  <div class="card-content center "> <h1>Bạn có biết 1 + 1 = 3</h1></div>
  <div class="card-footer white" style="">Bấm để xem giải thích</div>
  </div>

    <div @click="isToggle=!isToggle" v-if="isToggle" class="card bg-silver animated flipInX k-border" >
      <div class="card-header">Giải thích: </div>
  <div class="card-content center"> <h1>  <vue-typer text="Vì theo Sky'ss thì đó là bài hát của sếp'ss "></vue-typer></h1></div>
  <div class="card-footer">Bấm để hiển thị câu hỏi</div>
  </div>

            <f7-block inner>
                <f7-link @click="$router.back()">Go back via Router API</f7-link>
            </f7-block>
            <f7-buttons> 
            <f7-button big fill back>back</f7-button>
            <f7-button @click="change" big fill color='green'>change</f7-button>
            <f7-button big fill color="orange" @click="show">Show</f7-button>
            </f7-buttons>
        </f7-block>
    </f7-page>
</template>
<script>
/*  import {
        mapGetters
    } from 'vuex';
    export default {
        computed: { ...mapGetters(['add'])
        }
    }*/

export default {
    data() {
            return {
                isToggle: false,
                math: '...',
                flickityOptions: {
                    initialIndex: 3,
                    prevNextButtons: false,
                    pageDots: false,
                    wrapAround: true

                    // any options from Flickity can be used
                }
            }
        },
        created() {
            console.log('Test');
            this.$emit('test');
        },
        methods: {
            test() {
                console.log('asddddd');
            },
            change() {
                this.math = '`sum_(i=1)^n i^3=((n(n+1))/2)^' + Math.floor((Math.random() * 10) + 1) + '`';
                this.$nextTick(function() {
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
                });

                console.log(this.math)
            },
            show(e) {
                const burst = new mojs.Burst({
                    radius: {
                        15: 90
                    },
                    count: 15,
                    scale: 2,
                    duration: 200,
                    onComplete() {
                        console.log('completed');
                    },
                    children: {
                        strokeWidth: 15,
                        // property map - maps over children with mod function
                        shape: ['circle', 'polygon'],
                        // property map - maps over children with mod function
                        fill: ['#333', 'magenta', 'purple', 'yellow', 'red', 'cyan', 'orange'],
                        angle: {
                            0: 180
                        },
                    }
                });
                burst.replay();
            }
        }
}
</script>
