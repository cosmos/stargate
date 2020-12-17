<template>
  <div>
    <div class="container">
      <div class="planet planet__1"></div>
      <div class="planet planet__2"></div>
      <div class="planet planet__3"></div>
      <div class="planet planet__4"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.container
  width 100%
  padding-bottom 100%
  position relative

create-planet(left, top, size)
  left percentage(left/100)
  top percentage(top/100)
  width percentage(size/100)
  padding-bottom percentage(size/100)

.planet
  position absolute
  border-radius 100%
  transform translate(-50%, -50%)

  &__1
    create-planet(-1.5,11,6.5)
    background radial-gradient(105% 128.16% at 93.33% 50%, #AA0FE7 13.54%, #8C0DBF 51.04%, #710B99 86.46%)
    box-shadow 0px 0px 0.5625em rgba(230, 68, 248, 0.22)
  &__2
    create-planet(33,43,59)
    background radial-gradient(119.91% 98.24% at 48.29% 6.87%, #004A94 3.12%, #1E055C 51.04%, #170020 86.46%)
    box-shadow -4.5em -1.5em 3em rgba(0, 97, 193, 0.17)
  &__3
    create-planet(57,76,87)
    background radial-gradient(78.18% 78.18% at 63.42% 75.67%, #000000 0%, #060608 54.69%, #070526 75.52%, #290D50 90.79%)
    box-shadow inset 0.25em 0.8125em 1.5em rgba(214, 226, 237, 0.27)
  &__4
    create-planet(87,26,9)
    background radial-gradient(111.33% 91.21% at 43.02% 14.84%, #F1E8D8 13.54%, #DCD1B6 51.04%, #CCBF99 86.46%)
    box-shadow -1em 0.5625em 2em rgba(234, 171, 0, 0.27)
</style>
