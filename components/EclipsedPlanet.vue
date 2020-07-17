<template>
  <div>
    <div class="container">
      <div class="planet planet__sun">
        <div class="planet__surface planet__back"></div>
        <div class="planet__surface planet__front"></div>
      </div>
      <div class="planet planet__1">
        <div class="planet__surface planet__back"></div>
      </div>
      <div class="orbit__outer__1"></div>
      <div class="orbit__outer__2"></div>
      <div class="orbit__outer__3"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.container *
  position absolute
.container
  width 100%
  padding-bottom 100%
  position relative

.planet
  transform translate(-50%, -50%)
  &__surface
    width 100%
    height 100%
    border-radius 100%
    left 50%
    top 50%
    transform translate(-50%, -50%)

  &__sun
    top 55%
    left 61%
    width 28%
    padding-bottom 28%
  &__sun &__back
    width 180%
    height 180%
    background radial-gradient(50% 50% at 50% 50%, rgba(0, 71, 255, 0.8) 56%, rgba(0, 41, 255, 0.38) 70%, rgba(0, 30, 108, 0) 100%)
  &__sun &__front
    background #F8FAFF
    box-shadow 0 0 0 2em rgba(255, 255, 255, 0.03)

  &__1
    top 50%
    left 20%
    width 72%
    padding-bottom 72%
  &__1 &__back
    background radial-gradient(61.59% 64.86% at 41.88% 47.98%, #030419 0%, #030419 75.48%, #8ca0ff 93.79%)
    box-shadow inset 3em -2em 3em rgba(0,0,0,0.49), inset 0.33em 0.218em 0.43em rgba(152, 160, 220, 0.34), 0 0 0 2em rgba(255, 255, 255, 0.03)

.orbit__outer__1
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
  width 225%
  padding-bottom 225%
  left 20%
  top 50%
  transform translate(-50%, -50%) rotateX(68deg)
  border-radius 50%
  box-shadow inset -0.0625em -0.25em 0.125em 0 #7C85EA
  border 0.125em solid #636CBD
  opacity 0.35

.orbit__outer__3
  width 289%
  padding-bottom 289%
  left 20%
  top 52%
  transform translate(-50%, -50%) rotateX(68deg)
  border-radius 50%
  box-shadow inset 0.0625em 0.3125em 0.125em 0 #7C85EA
  border 0.25em solid #636CBD
  opacity 0.2
</style>
