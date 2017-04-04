<template lang="pug">
- var tool1 = "Tra ngày 📅"
.popover.tien-ich(style='width: 200px;', onclick="new Framework7().closeModal('.tien-ich');")
  .popover-inner
    .list-block
      ul
        li
          a.list-button.item-link(href='/about') #{tool1.toUpperCase()}
</template>