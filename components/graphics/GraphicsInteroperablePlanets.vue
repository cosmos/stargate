<template>
  <div>
    <div class="container">
      <div class="system">
        <div class="orbit__container">
          <div
            v-for="i in 3"
            :key="i.id"
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
            :key="i.id"
            :style="{
              '--satelite-rotate': ((i + 0.5) * 360) / 3 - 360 / 4 + 'deg',
            }"
            class="satellite__container satellite__container__small"
          >
            <div class="satellite__small"></div>
          </div>
          <div
            v-for="i in 3"
            :key="i.id"
            :style="{ '--satelite-rotate': (i * 360) / 3 + 'deg' }"
            class="satellite__container"
          >
            <div class="satellite"></div>
          </div>
        </div>
        <div class="connections">
          <div class="connection connection__1"></div>
          <div class="connection connection__2"></div>
          <div class="connection connection__3"></div>
        </div>
        <div class="planet planet__1">
          <div class="planet__surface planet__back"></div>
        </div>
        <div class="planet planet__sun">
          <div class="planet__surface planet__front"></div>
        </div>
        <div class="planet planet__2">
          <div class="planet__surface planet__back"></div>
        </div>
        <div class="planet planet__3">
          <div class="planet__moon">
            <div class="planet__moon__tail"></div>
            <div class="planet__moon__surface"></div>
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
  padding-bottom 90%
  position relative
  &:before
    content ""
    position absolute
    width 186%
    padding-bottom 186%
    left -43% // (186 - 100) / 2
    top 0
    margin-top -53% // (186 - 80) / 2
    background radial-gradient(50% 50% at 50% 50%, rgb(50, 11, 147) 13.21%, rgba(66, 81, 250, 0) 100%)

.planet
  position absolute
  transform translate3d(-50%, -50%, 220px)
  z-index 1000
  &__surface
    width 100%
    height 100%
    border-radius 100%
    position absolute
    left 50%
    top 50%
    transform translate3d(-50%, -50%, 0)
  &__back
    z-index 1
  &__moon
    z-index 2
  &__front
    z-index 3

  &__sun
    top 50%
    left 50%
    width 81%
    padding-bottom 81%
  &__sun &__front
    background radial-gradient(50% 50% at 50% 50%, #FFFFFF 36.46%, rgba(203, 162, 255, 0.64) 58.85%, rgba(71, 87, 255, 0.34) 79.17%, rgba(50, 11, 147, 0) 100%)

  &__1
    width 18%
    padding-bottom 18%
    top 0%
    left 54%
  &__1 &__back
    background radial-gradient(92.47% 88.21% at 48.57% 86.43%, #ba41d8 5.21%, #660e7c 51.04%, #1e0a4f 86.46%)

  &__2
    width 26%
    padding-bottom 26%
    top 90%
    left -10%
  &__2 &__back
    background radial-gradient(95.47% 78.21% at 86.57% 31.43%, #4251fa 7.29%, #320b93 51.04%, #12072e 86.46%)

  &__3
    width 31%
    padding-bottom 31%
    top 102%
    left 122%
  &__3 &__back
    background radial-gradient(farthest-side at 25% 22%, var(--link) 3%, #015ab5 34%, #061335 82%)
  &__3 &__front
    background radial-gradient(farthest-side at -88% 16%, var(--link) 58%, #016ad4 74%, #112761 92%, rgba(7,31,95,0) 100%)

.connections
  position absolute
  top 50%
  left 50%
  width 100%
  .connection
    position absolute
    // TODO: not being used, syntax error: https://github.com/postcss/autoprefixer/issues/530
    // background-image radial-gradient(20% 100%, rgba(204, 209, 255, 0.6) 50%, rgba(255,255,255,0) 50%)
    background-position top
    background-size 0.416em 0.083em
    background-repeat repeat-x
    height 0.083em
    transform-origin bottom left
    &__1
      width 45%
      transform rotate(-85deg)
    &__2
      width 87%
      transform rotate(33deg)
    &__3
      width 70%
      transform rotate(149deg)

.orbit__container
  border 0.125em solid #9D95D7
  width 74%
  padding-bottom 74%
  border-radius 50%
  position absolute
  left 50%
  top 50%
  transform translate3d(-50%, -47%, 0) rotateX(45deg) rotateZ(45deg)
  // TODO: might be related to safari https://bugs.webkit.org/show_bug.cgi?id=209930
  // safari - box-shadow inset rendering
  box-shadow 0 0 0 0.5em rgba(52, 97, 255, 0.19),
    inset 0 0 0 0.5em rgba(52, 97, 255, 0.19)
  & + &
    width 85%
    padding-bottom 85%
    .satellite__container
      font-size 1.5em
    .satellite__container__small
      font-size 1em
      animation-direction reverse
    .satellite
      width 10%
      padding-bottom 10%
      transform translate3d(-50%, -18%, 0)

@keyframes orbit
  0%
    transform translate3d(-50%, 0%, 0) rotate(var(--satelite-rotate)) rotateZ(0)
  68%
    transform translate3d(-50%, 0%, 0) rotate(var(--satelite-rotate)) rotateZ(270deg)
  100%
    transform translate3d(-50%, 0%, 0) rotate(var(--satelite-rotate)) rotateZ(360deg)

.satellite__container
  transform translate3d(-50%, 0%, 0) rotate(var(--satelite-rotate))
  width 100%
  height 50%
  position absolute
  left 50%
  top 0
  transform-origin bottom center

.satellite__container__small
  transform translate3d(-50%, 0%, 0) rotate(var(--satelite-rotate))
  animation 5s orbit infinite linear
  will-change transform

.satellite
  background #E8E8FF
  box-shadow 0 0 0 0.75em rgba(187, 198, 255, 0.25)
  width 7%
  padding-bottom 7%
  border-radius 50%
  position absolute
  left 50%
  top 0%
  transform translate3d(-50%, -50%, 0)
  animation satellite 2s ease-out infinite alternate-reverse

@keyframes satellite
  0%
    box-shadow 0 0 0 0.75em rgba(187, 198, 255, 0.25)
  80%
    box-shadow 0 0 0 0.75em rgba(187, 198, 255, 0.25)
  100%
    box-shadow 0 0 0 1.25em rgba(187, 198, 255, 0.3)

.satellite__small
  background #616DFA
  position absolute
  left 50%
  top 0%
  width 4.25%
  padding-bottom 4.25%
  border-radius 50%
  transform translate3d(-50%, -50%, 0)
  transform-origin bottom center
  &:before,
  &:after
    content ""
    position absolute
    height 100%
    width 100%
    border-radius 50%
    transform-origin 50% 1147%
  &:before
    background #C75EE9
    transform rotate(-8deg)
    animation satellite__small__1 5s infinite ease-in-out
  &:after
    background #6ABDF3
    transform rotate(8deg)
    animation satellite__small__2 5s infinite ease-in-out
  .orbit__container + .orbit__container &:before
    background #6ABDF3
  .orbit__container + .orbit__container &:after
    background #C75EE9

@keyframes satellite__small__1
  0%,80%
    transform rotate(-8deg)
  20%
    transform rotate(10deg)
  38%
    transform rotate(-28deg)

@keyframes satellite__small__2
  0%,82%
    transform rotate(8deg)
  20%
    transform rotate(-6deg)
  40%
    transform rotate(18deg)

.planet__moon
  height 116%
  width 116%
  position absolute
  left 50%
  top 50%
  transform translate3d(-50%, -50%, 0)
  animation planet__moon 3s infinite linear
  will-change transform

.planet__moon__tail
  left 50%
  width 100%
  height 100%
  top 50%
  transform translate3d(-50%, -50%, 0)
  box-shadow inset 0 0.125em 0 0px var(--link)
  border-radius 100%
  position absolute
  clip-path polygon(0 0, 50% 0, 50% 100%, 0 100%)

.planet__moon__surface
  width 4%
  padding-bottom 4%
  position absolute
  background #F0F0F9
  border-radius 50%
  left 50%
  top 0
  transform translate3d(-50%, -25%, 0)

@keyframes planet__moon
  from
    transform translate3d(-50%, -50%, 0) rotateX(-55deg) rotateY(20deg) rotate(0)
  to
    transform translate3d(-50%, -50%, 0) rotateX(-55deg) rotateY(20deg) rotate(360deg)

.orbit__outer__1
  width 136%
  padding-bottom 136%
  left 50%
  top 60%
  transform translate3d(-50%, -50%, 0) rotateX(50deg) rotateZ(0)
  border-radius 50%
  box-shadow inset 0 -0.1875em 0.0625em 0 #7C85EA
  position absolute
  // animation 3s orbit__outer infinite linear reverse
  border 0.0625em solid #636CBD
  opacity 0.6

.orbit__outer__2
  width 163%
  padding-bottom 163%
  left 50%
  top 71%
  transform translate3d(-50%, -50%, 0) rotateX(45deg)
  border-radius 50%
  box-shadow inset -0.1875em -0.1875em 0.09375em 0 #7C85EA
  position absolute
  // animation 6s orbit__outer infinite linear
  border 0.0625em solid #636CBD
  opacity 0.3

.orbit__outer__3
  width 209%
  padding-bottom 209%
  left 50%
  top 82%
  transform translate3d(-50%, -50%, 0) rotateX(45deg)
  border-radius 50%
  box-shadow inset 0.1875em -0.1875em 0.125em 0 #7C85EA
  position absolute
  // animation 12s orbit__outer infinite linear reverse
  border 0.0625em solid #636CBD
  opacity 0.2

@keyframes orbit__outer
  from
    transform translate3d(-50%, -49%, 0) rotateX(50deg) rotateZ(0)
  to
    transform translate3d(-50%, -49%, 0) rotateX(50deg) rotateZ(360deg)
</style>
