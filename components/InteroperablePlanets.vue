<template>
  <div>
    <div class="container">
      <div class="system">
        <div class="orbit__container">
          <div
            v-for="i in 3"
            :key="i"
            :style="{
              '--satelite-rotate': ((i + 0.5) * 360) / 3 + 360 / 4 + 'deg',
            }"
            class="satellite__container satellite__container__small"
          >
            <div class="satellite__small"></div>
          </div>
        </div>
        <div class="orbit__container">
          <div
            v-for="i in 3"
            :key="i"
            :style="{
              '--satelite-rotate': ((i + 0.5) * 360) / 3 - 360 / 4 + 'deg',
            }"
            class="satellite__container satellite__container__small"
          >
            <div class="satellite__small"></div>
          </div>
          <div
            v-for="i in 3"
            :key="i"
            :style="{ '--satelite-rotate': (i * 360) / 3 + 'deg' }"
            class="satellite__container"
          >
            <div class="satellite"></div>
          </div>
        </div>
        <div class="planet planet__sun">
          <div class="planet__surface planet__front"></div>
          <div class="planet__surface planet__back"></div>
        </div>
        <div class="planet planet__1">
          <div class="orbit__small__container">
            <div class="orbit__small"></div>
            <div class="orbit__small__satellite"></div>
          </div>
          <div class="planet__surface planet__front"></div>
          <div class="planet__surface planet__back"></div>
        </div>
        <div class="orbit__outer__1"></div>
        <div class="orbit__outer__2"></div>
        <div class="orbit__outer__3"></div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.container
  width 100%
  padding-bottom 80%
  position relative
  perspective 64em
  &:before
    content ""
    position absolute
    width 146%
    padding-bottom 146%
    left -23% // (146 - 100) / 2
    top 0
    margin-top -33% // (146 - 80) / 2
    background radial-gradient(50% 50% at 50% 50%, rgba(16, 49, 134, 0.41) 60%, rgba(66,81,250,0) 100%)

.planet
  position absolute
  transform translate(-50%, -50%)
  &__surface
    width 100%
    height 100%
    border-radius 100%
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
  &__front
    z-index 1000

  &__sun
    top 50%
    left 50%
    width 41%
    padding-bottom 41%
  &__sun &__back
    width 180%
    height 180%
    background radial-gradient(50% 50% at 50% 50%, rgba(0, 71, 255, 0.8) 56%, rgba(0, 41, 255, 0.38) 70%, rgba(0, 30, 108, 0) 100%)
  &__sun &__front
    background #F9FBFE

  &__1
    width 31%
    padding-bottom 31%
    top 102%
    left 122%
    z-index 1000
  &__1 &__back
    background radial-gradient(farthest-side at 25% 22%, #40b3ff 3%, #015ab5 34%, #0c2054 82%)
    box-shadow -60px -32px 101px rgba(0, 105, 210, 0.5)
  &__1 &__front
    background radial-gradient(farthest-side at -88% 16%, #40b3ff 58%, #016ad4 74%, #132c6d 92%, rgba(7,31,95,0) 100%)

.orbit__container
  border 0.125em solid #9D95D7
  width 74%
  padding-bottom 74%
  border-radius 50%
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -47%) rotateX(45deg) rotateZ(45deg)
  box-shadow 0 0 0 0.5em rgba(52, 97, 255, 0.19),
    inset 0 0 0 0.5em rgba(52, 97, 255, 0.19)
  & + &
    width 85%
    padding-bottom 85%
    .satellite__container
      font-size 1.5em
    .satellite__container__small
      font-size 1em
    .satellite
      transform translate(-50%, -18%)

@keyframes Xorbit
  from
    transform translate(-50%, 0%) rotate(var(--satelite-rotate)) rotateZ(0)

  to
    transform translate(-50%, 0%) rotate(var(--satelite-rotate))
      rotateZ(360deg)

.satellite__container
  transform translate(-50%, 0%) rotate(var(--satelite-rotate))
  height 50%
  position absolute
  left 50%
  top 0
  transform-origin bottom center

.satellite__container__small
  transform translate(-50%, 0%) rotate(var(--satelite-rotate))
  animation 4s orbit infinite linear

.satellite
  background #E8E8FF
  box-shadow 0 0 0 0.75em rgba(187, 198, 255, 0.25)
  width 2em
  height 2em
  border-radius 50%
  position absolute
  left 50%
  top 0%
  transform translate(-50%, -50%)
  animation satellite 2s ease-out infinite alternate-reverse

@keyframes Xsatellite
  0%
    box-shadow 0 0 0 0.75em rgba(187, 198, 255, 0.25)

  80%
    box-shadow 0 0 0 0.75em rgba(187, 198, 255, 0.25)

  100%
    box-shadow 0 0 0 1.25em rgba(187, 198, 255, 0.3)

.satellite__small
  background #4251FA
  left 50%
  top 0%
  transform translate(-50%, -50%)
  transform-origin bottom center
  &,
  &:before,
  &:after
    width 1.25em
    height 1.25em
    border-radius 50%
    position absolute
  &:before
    content ""
    background #40B3FF
    left -125%
  &:after
    content ""
    background #8D0EC0
    right -125%

.orbit__small__container
  height 116%
  width 116%
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%)
  animation orbit__small 3s infinite linear
  z-index 1000

.orbit__small
  left 50%
  width 100%
  height 100%
  top 50%
  transform translate(-50%, -50%)
  box-shadow inset 0 0.125em 0 0px #40B3FF
  border-radius 100%
  position absolute
  z-index 1000
  clip-path polygon(0 0, 50% 0, 50% 100%, 0 100%)

.orbit__small__satellite
  width 4%
  padding-bottom 4%
  position absolute
  background #F0F0F9
  border-radius 50%
  left 50%
  top 0
  transform translate(-50%, -25%)
  z-index 1000

@keyframes Xorbit__small
  from
    transform translate(-50%, -50%) rotateX(-55deg) rotateY(20deg) rotate(0)

  to
    transform translate(-50%, -50%) rotateX(-55deg) rotateY(20deg) rotate(360deg)

.orbit__outer__1
  width 136%
  padding-bottom 136%
  left 50%
  top 50%
  transform translate(-50%, -50%) rotateX(50deg) rotateZ(0)
  border-radius 50%
  box-shadow inset 0 0.1875em -0.0625em 0 #7C85EA
  position absolute
  animation 3s orbit__outer infinite linear reverse
  border 0.0625em solid #636CBD
  opacity 0.6

.orbit__outer__2
  width 163%
  padding-bottom 163%
  left 50%
  top 50%
  transform translate(-50%, -49%) rotateX(45deg)
  border-radius 50%
  box-shadow inset 0 0.1875em 0.09375em 0 #7C85EA
  position absolute
  animation 6s orbit__outer infinite linear
  border 0.0625em solid #636CBD
  opacity 0.3

.orbit__outer__3
  width 209%
  padding-bottom 209%
  left 50%
  top 50%
  transform translate(-50%, -48%) rotateX(45deg)
  border-radius 50%
  box-shadow inset 0 -0.1875em -0.125em 0 #7C85EA
  position absolute
  animation 12s orbit__outer infinite linear
  border 0.0625em solid #636CBD
  opacity 0.2

@keyframes Xorbit__outer
  from
    transform translate(-50%, -49%) rotateX(50deg) rotateZ(0)

  to
    transform translate(-50%, -49%) rotateX(50deg) rotateZ(360deg)
</style>
