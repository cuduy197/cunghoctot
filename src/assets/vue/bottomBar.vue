<template lang="pug">
.toolbar
  .toolbar-inner
    f7-button.link.open-popover(data-popover='.tro-giup', big fill, color='orange') Trợ giúp ❓
    f7-button.link.open-popover(data-popover='.thu-nuoi', big fill, color='green') Thú cưng 🐣
    f7-button.link.open-popover(data-popover='.tien-ich', big fill, color='pink') Tiện ích 💡
  tools
  help
  pet
</template>
<script>
import Info from './info/info';
import Pet from './pet/pet';
import Help from './help/help';
import Tools from './tools/tools';

export default {
    data() {
            return {
            }
        },
        methods: {
        },
        components: {
            Info,
            Pet,
            Help,
            Tools
        }
}
</script>
<style>
</style>
