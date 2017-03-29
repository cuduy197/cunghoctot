<template>
    <div>

        <f7-swiper style="text-align: center" :params="{effect: 'flip',grabCursor:true,loop: false }">
            <!---
         <f7-swiper-slide v-for="hienthi in danhngon" key="danhngon">
            <f7-card>
                <f7-card-content>
                    <h1> {{hienthi.noidung}} </h1>
                    <hr>
                    <i> {{hienthi.tacgia}} </i>
                </f7-card-content>
            </f7-card>
        </f7-swiper-slide>
    -->
            <f7-swiper-slide>
                <f7-card>
                    <f7-card-content>
                        <h1> {{danhngon[0].noidung}} </h1>
                        <hr>
                        <i> {{danhngon[0].tacgia}} </i>
                    </f7-card-content>
                    <f7-button @click="say" fill>Random</f7-button>
                </f7-card>
            </f7-swiper-slide>
            <f7-swiper-slide>
                <f7-card>
                    <f7-card-content>
                        <h1> {{danhngon[1].noidung}} </h1>
                        <hr>
                        <i> {{danhngon[1].tacgia}} </i>
                    </f7-card-content>
                    <f7-button>Button Text</f7-button>
                </f7-card>
            </f7-swiper-slide>
        </f7-swiper>

    </div>
</template>
<script>
    var app = new Framework7();
    var $$ = Dom7;
    import 'lodash';
    export default {
        data() {
            return {
                number: 1,
                danhngon: [{
                        noidung: '1',
                        tacgia: 'duy'
                    },
                    {
                        noidung: '2',
                        tacgia: 'linh'
                    },
                    {
                        noidung: '3',
                        tacgia: 'YOU!'
                    },
                    {
                        noidung: '4',
                        tacgia: 'LALA!'
                    },
                    {
                        noidung: '5',
                        tacgia: 'YOU!'
                    },
                    {
                        noidung: '6',
                        tacgia: 'YOU!'
                    },
                    {
                        noidung: '7',
                        tacgia: 'YOU!'
                    },
                    {
                        noidung: '8',
                        tacgia: 'YOU!'
                    },
                    {
                        noidung: '9',
                        tacgia: 'YOU!'
                    },
                    {
                        noidung: '10',
                        tacgia: 'YOU!'
                    }
                ]
            }
        }

        ,
        methods: {
            say: function () {
                this.danhngon = _.shuffle(_.values(this.danhngon))
                console.log(this.danhngon)

            }
        }


    }
</script>
<style lang="sass">
</style>