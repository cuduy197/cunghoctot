<template lang="pug"> 
.popover.thu-nuoi(style='width: 310px')
  .popover-angle
  .popover-inner
    .list-block
      ul
        li.center
          p(href='') Xin chào, em là sky'sss 
          f7-progressbar(infinite='', color='multi')
          h1.animated.tada(style='font-size: 3.5em;') 🐧
          pre Cấp độ : 0
          pre Sức khỏe : 0/10
        li
        f7-list(style="margin: 10px")
          f7-grid.animated.fadeIn
            f7-col
              f7-button(style='background-color: indigo;' big fill) Chăm sóc 💊
            f7-col
              f7-button(big='', fill='', color='') Chém gió 😄
</template>