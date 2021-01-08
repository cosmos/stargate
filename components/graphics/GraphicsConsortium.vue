<template>
  <div>
    <div class="container">
      <div class="planet planet__sdk">
        <span class="hex">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span class="hex">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span class="hex">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span class="hex">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span class="hex">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span class="hex">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span class="hex">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div class="orbit__outer__1"></div>
      <div class="orbit__outer__2"></div>
      <div class="orbit__outer__3"></div>
      <svg
        width="495"
        height="494"
        viewBox="0 0 495 494"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="orbit__outer__active"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M247.406 491.388C382.378 491.388 491.795 381.972 491.795 247C491.795 112.028 382.378 2.61151 247.406 2.61151C112.434 2.61151 3.01776 112.028 3.01776 247C3.01776 381.972 112.434 491.388 247.406 491.388ZM247.406 494C383.821 494 494.406 383.414 494.406 247C494.406 110.586 383.821 0 247.406 0C110.992 0 0.40625 110.586 0.40625 247C0.40625 383.414 110.992 494 247.406 494Z"
          fill="url(#paint0_radial-consortium)"
        />
        <defs>
          <radialGradient
            id="paint0_radial-consortium"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(247.406 502.797) rotate(-90) scale(712.797 463.795)"
          >
            <stop offset="0.139901" stop-color="#CE5990" />
            <stop offset="0.381311" stop-color="#39C353" />
            <stop offset="0.51038" stop-color="#DD8AEA" />
            <stop offset="0.63524" stop-color="#A0BCFE" />
            <stop offset="0.701177" stop-color="#848484" />
            <stop offset="0.747474" stop-color="#00BB00" />
          </radialGradient>
        </defs>
      </svg>
      <img
        alt="Colourful plumbobs around a blue planet with nine hexagons"
        src="~/assets/illustrations/plumbobs.svg"
        class="plumbobs"
      />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.container
  $width = 100%
  $height = 65%
  width $width
  padding-bottom $height
  position relative
  &:before
    $size = 110%
    content ""
    position absolute
    width $size
    padding-bottom $size
    left (($size - $width)/-2)
    top 0
    margin-top (($size - $height)/-2 * 0.9)
    background radial-gradient(50% 50% at 50% 50%, #2443D1 25.52%, rgba(36, 64, 209, 0.62) 39.58%, rgba(66, 81, 250, 0) 71.88%)

.planet
  position absolute
  border-radius 100%
  transform translate(-50%, -50%)

  &__sdk
    left 50%
    top 50%
    width 32%
    padding-bottom 32%
    background linear-gradient(135deg, rgba(176, 203, 255, 0.86) 15.1%, #6A9DFF 68.75%)
    border 0.1875em solid rgba(179, 199, 255, 0.38)

.hex
  $sqrt3 = 1.7320508075688772
  $edgeSize = 13%
  $borderSize = 5%
  $gap = 2%
  $hexWidth = $edgeSize * 2
  $hexHeight = $sqrt3 * $edgeSize
  $duration = 1.2s

  position absolute
  left ((100 - $edgeSize)/2)
  top ((100 - $hexHeight)/2 - $hexHeight - $gap)
  width $edgeSize
  height $hexHeight
  transform-origin center (150% + ($gap / $hexHeight * 100))
  opacity 0.4
  animation $duration hex-flash infinite ease-out alternate

  span
    position absolute
    top 0
    width 100%
    height 100%
    transform-origin center center

    &:before, &:after
      content ' '
      position absolute
      width 100%
      height $borderSize
      background var(--white)
      box-shadow 0px 0px 0.75em rgba(255, 255, 255, 0.5)
    &:before
      top 0
    &:after
      bottom 0
    &:nth-child(1)
      transform rotate(0deg)
    &:nth-child(2)
      transform rotate(60deg)
    &:nth-child(3)
      transform rotate(120deg)

  &:nth-child(1)
    top ((100 - $hexHeight)/2)
    left ((100 - $edgeSize)/2)
    opacity 1
    animation none

  for hex in 2...8
    &:nth-child({hex})
      transform rotate((hex * 60deg))
      animation-delay ($duration/6 * (hex - 1))

@keyframes hex-flash
  from
    opacity 0.2
  to
    opacity 1

.orbit__outer__1
  width 71%
  padding-bottom 71%
  left 50%
  top 55%
  transform translate3d(-50%, -50%, 0) rotateX(50deg) rotateZ(0)
  border-radius 50%
  box-shadow inset 0 -0.1875em 0.0625em 0 #7C85EA
  position absolute
  border 0.0625em solid #636CBD
  opacity 0.4

.orbit__outer__2
  width 101%
  padding-bottom 101%
  left 50%
  top 65%
  transform translate3d(-50%, -50%, 0) rotateX(48deg)
  border-radius 50%
  box-shadow inset -0.1875em -0.1875em 0.09375em 0 #7C85EA
  position absolute
  border 0.0625em solid #636CBD
  opacity 0.3

.orbit__outer__3
  width 131%
  padding-bottom 131%
  left 50%
  top 74%
  transform translate3d(-50%, -50%, 0) rotateX(46deg)
  border-radius 50%
  box-shadow inset 0.1875em 0.1875em 0.125em 0 #7C85EA
  position absolute
  border 0.0625em solid #636CBD
  opacity 0.2

.orbit__outer__active
  width 84%
  height auto
  left 50%
  top 57%
  transform translate3d(-50%, -50%, 0) rotateX(49deg)
  position absolute
  animation 3s orbit__outer__active infinite linear reverse

@keyframes orbit__outer__active
  from
    transform translate3d(-50%, -50%, 0) rotateX(49deg) rotateZ(0)
  to
    transform translate3d(-50%, -50%, 0) rotateX(49deg) rotateZ(360deg)

.plumbobs
  position absolute
  top 1%
  left 5%
  width 90%
</style>
