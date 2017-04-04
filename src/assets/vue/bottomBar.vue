<template lang="pug">
<div class="toolbar">
        <div class="toolbar-inner">
            <f7-button data-popover=".tro-giup" class="link open-popover" big fill color="orange">Trợ giúp ❓</f7-button>
            <f7-button data-popover=".thu-nuoi" class="link open-popover" big fill color="green">Thú cưng 🐣</f7-button>
            <f7-button data-popover=".tien-ich" class="link open-popover" big fill color="pink">Tiện ích 💡</f7-button>
        </div>
        <tools></tools>
        <help></help>
        <pet></pet>
</div>
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
