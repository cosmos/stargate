<template>
  <div>
    <div class="container">
      <div class="planet planet__sun__1">
        <div class="planet__surface planet__front"></div>
      </div>
      <div class="planet planet__sun__2">
        <div class="planet__surface planet__front"></div>
      </div>
      <div class="planet planet__sun__3">
        <div class="planet__surface planet__front"></div>
      </div>
      <div class="planet planet__1">
        <div class="planet__surface planet__front"></div>
      </div>
      <div class="orbit__outer__1"></div>
      <div class="orbit__outer__2"></div>
      <div class="orbit__outer__3"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.container
  width 100%
  padding-bottom 100%
  position relative

.planet
  transform translate(-50%, -50%)
  *, &
    position absolute
  &__surface
    width 100%
    height 100%
    border-radius 100%
    left 50%
    top 50%
    transform translate(-50%, -50%)

  &__sun__1
    top 29%
    left 13%
    width 56%
    padding-bottom 56%
  &__sun__1 &__front
    background radial-gradient(50% 50% at 50% 50%, #FFFFFF 39.06%, #B366FF 58.33%, rgba(190,0,238,0.48) 79.69%, rgba(192,26,234,0) 100%)

  &__sun__2
    top 56%
    left 46%
    width 50%
    padding-bottom 50%
  &__sun__2 &__front
    background radial-gradient(50% 50% at 50% 50%, #FFFFFF 34.37%, #2492FF 58.33%, rgba(17,160,255,0.38) 79.69%, rgba(64,179,255,0) 100%)

  &__sun__3
    top 67%
    left 8%
    width 60%
    padding-bottom 60%
  &__sun__3 &__front
    background radial-gradient(50% 50% at 50% 50%, #fff 34.37%, #3040f3 58.33%, rgba(0,67,169,0.48) 79.69%, rgba(64,152,255,0) 100%)

  &__1
    top 50%
    left 20%
    width 72%
    padding-bottom 72%
  &__1 &__front
    // background radial-gradient(61.59% 64.86% at 41.88% 47.98%, #030419 0%, #030419 75.48%, #8ca0ff 93.79%)
    // box-shadow inset 3em -2em 3em rgba(0,0,0,0.49), inset 0.33em 0.218em 0.43em rgba(152, 160, 220, 0.34), 0 0 0 2em rgba(255, 255, 255, 0.03)
    background radial-gradient(63% 63% at 44% 48%, #030419 0%, #030419 79.69%, #004891 92.71%)
    box-shadow inset 3px -3px 15px rgba(66, 81, 250, 0.16), inset 5px 7px 20px rgba(192, 26, 234, 0.27), inset 24px 51px 51px #22002b

.orbit__outer__1
  position absolute
  width 188%
  padding-bottom 188%
  left 20%
  top 46%
  transform translate(-50%, -50%) rotateX(68deg) rotateZ(0)
  border-radius 50%
  box-shadow inset 0 -0.25em 0.125em 0 #7C85EA
  border 0.125em solid #636CBD
  opacity 0.8

.orbit__outer__2
  position absolute
  width 210%
  padding-bottom 225%
  left 20%
  top 50%
  transform translate(-50%, -50%) rotateX(68deg)
  border-radius 50%
  box-shadow inset -0.0625em -0.25em 0.125em 0 #7C85EA
  border 0.125em solid #636CBD
  opacity 0.35

.orbit__outer__3
  position absolute
  width 230%
  padding-bottom 289%
  left 20%
  top 52%
  transform translate(-50%, -50%) rotateX(68deg)
  border-radius 50%
  box-shadow inset 0.0625em 0.3125em 0.125em 0 #7C85EA
  border 0.25em solid #636CBD
  opacity 0.2
</style>
