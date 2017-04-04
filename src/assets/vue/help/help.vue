<template lang="pug">
.popover.tro-giup(style="width: 200px;", onclick="new Framework7().closeModal('.tro-giup');")
  .popover-inner
    .list-block
      ul
        li
          a.list-button.item-link(@click='LOGOUT') Đăng xuất 📲
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
            }
        },
        methods: {...mapMutations(['LOGOUT'])
        },
        components: {
        }
}
</script>
<style>
</style>
