<template>
    <div>
        <!--- <f7-swiper style="text-align: center" :params="{effect: 'flip',grabCursor:true,loop: false }">
        
         <f7-swiper-slide v-for="hienthi in danhngon" key="danhngon">
            <f7-card>
                <f7-card-content>
                    <h1> {{hienthi.noidung}} </h1>
                    <hr>
                    <i> {{hienthi.tacgia}} </i>
                </f7-card-content>
            </f7-card>
        </f7-swiper-slide>
        </f7-swiper>
              
        -->
        <f7-card class="border15">
            <f7-card-content>
                <span class="" @click="say"> {{danhngon[0].noidung}} </span>
                <br>
                <i style="text-align: center">- {{danhngon[0].tacgia}} </i>
            </f7-card-content>
        </f7-card>
    </div>
</template>
<script>
import {
    mapState,
    mapMutations
} from 'vuex';

var app = new Framework7();
var $$ = Dom7;
import 'lodash';
export default {
    computed: {
        ...mapState({
            user: state => state.user,
            singin: state => state.singin,
            avatar: state => state.img.avatar
        })
    },
    data() {
        return {
            number: 1,
            danhngon: [{
                noidung: 'Đừng khóc vì chuyện đã kết thúc. Hãy cười vì nó đã xảy ra',
                tacgia: 'Dr Seuss'
            }, {
                noidung: 'Whether you think you can or think you can’t, you’re right.',
                tacgia: 'Henry Ford'
            }, {
                noidung: 'Hãy sống khát khao, hãy sống dại khờ',
                tacgia: 'Steve Jobs'
            }, {
                noidung: 'Mọi thứ đều có mặt đẹp, nhưng không phải ai cũng thấy được',
                tacgia: 'Confucius'
            }]
        }
    }

    ,
    methods: {
        say: function() {
            this.danhngon = _.shuffle(_.values(this.danhngon))
            console.log(this.danhngon)

        }
    }


}
</script>
<style lang="sass">
</style>
