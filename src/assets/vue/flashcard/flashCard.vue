<template>
<div>
    <div @click="isToggle=!isToggle" v-if="isToggle" class="card animated flipInX k-border bg-blue">
        <div class="card-header white">Thông tin: </div>
        <div class="card-content center ">
            <h1>Bạn có biết 1 + 1 = 3</h1></div>
        <div class="card-footer white" style="">Bấm để xem giải thích</div>
    </div>
    <div @click="isToggle=!isToggle" v-if="!isToggle" class="card bg-silver animated flipInX k-border">
        <div class="card-header">Giải thích: </div>
        <div class="card-content center">
            <h1>  <vue-typer text="Vì theo Sky'ss thì sếp bảo như vậy "></vue-typer></h1></div>
        <div class="card-footer">Bấm để hiển thị câu hỏi</div>
    </div>
</div>

</template>
<script>
export default {
    data() {
        return {
            isToggle: false,
        }
    }
}
</script>
<style>
</style>
