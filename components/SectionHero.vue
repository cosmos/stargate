<template>
  <div class="section-hero">
    <div class="section-container">
      <div class="hero-graphics">
        <span class="hero-graphics__glow"></span>
        <span class="hero-graphics__gate"></span>
        <graphics-gate-notches class="hero-graphics__gate-notches" />
        <span class="hero-graphics__star"></span>
        <span class="hero-graphics__planet"></span>
      </div>
      <div class="container">
        <div class="content">
          <h1 class="title">
            <div class="wordmarks">
              <wordmark-stargate variant="glow" />
              <wordmark-stargate />
            </div>
            <span class="sr-only">Stargate</span>
          </h1>
          <div class="subtitle tm-rf2 tm-rf3-m-up tm-lh-copy">
            The Internet of Blockchains is on the horizon.
          </div>
          <tm-button
            to-link="internal"
            to="/testnets"
            size="l"
            color="var(--black)"
            background-color="linear-gradient(90deg, #99DAFF 0%, #FFD1FD 50%, var(--primary-900) 100%), var(--primary-900)"
            glow
            class="hero-btn"
            >Join testnets</tm-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@keyframes gate
  from
    transform translate3d(0,0,0) rotate(0deg)
  to
    transform translate3d(0,0,0) rotate(360deg)

.section-hero
  position relative
  height 100vh
  min-height 52rem
  max-height 72rem
  margin-bottom var(--spacing-10)
  display flex
  justify-content stretch
  align-items stretch
  text-align center
  background url(/stars.svg)
  .section-container
    display flex
    align-items stretch
    width 100%
    padding-top var(--spacing-9)
    padding-bottom var(--spacing-10)
  .container
    position relative
    display flex
    width 100%
    flex-direction column
    align-items normal
    justify-content flex-start
    .content
      margin auto
      width 100%
      .title
        margin 0
        padding-left var(--spacing-5)
        padding-right var(--spacing-5)
        svg
          width 100%
          height auto
          max-height 6rem
        .wordmarks
          position relative
          svg:first-child
            position absolute
            transform translateY(20%)
          svg:last-child
            position relative
      .subtitle
        margin-top var(--spacing-7)
        color var(--primary-900)

  .hero-graphics
    position absolute
    top -10%
    left 0
    bottom -100%
    width 100%
    overflow hidden
    &__glow
      position absolute
      width 140%
      padding-bottom 140%
      left -20%
      top 5%
      background radial-gradient(50% 50% at 50% 50%, #320b93 50%, rgba(50,11,147,0) 99%)
      z-index -1
    &__gate,
    &__gate-notches
      position absolute
      width 88%
      left 6%
      top 15%
      transform translate3d(0,0,0)
    &__gate
      padding-bottom 88%
      border-radius 50%
      box-shadow inset 0 0.1875em 0.0625em 0 rgba(255, 255, 255, 0.3)
      border 1px solid rgba(255, 255, 255, 0.1)
      box-sizing content-box
      animation 3s gate infinite linear
      &:after
        content ""
        position absolute
        trbl 3.2%
        border-radius 50%
        box-shadow inset 0 -0.1875em 0.0625em 0 rgba(255, 255, 255, 0.3)
        border 1px solid rgba(255, 255, 255, 0.1)
        animation 1.4s gate infinite linear reverse
    &__gate-notches
      height auto
      animation 40s gate infinite linear
    &__star
      position absolute
      width 60%
      padding-bottom 60%
      left 20%
      top 25%
      background radial-gradient(50% 50% at 50% 50%, #fff 39.83%, rgba(203,162,255,0.63) 64.1%, rgba(64, 53, 195, 0.59) 85.81%, rgba(53, 11, 158, 0) 99%)
    &__planet
      position absolute
      width 126%
      padding-bottom 126%
      left -13%
      top 42%
      border-radius 50%
      background radial-gradient(31.26% 16.8% at 50.03% -2.64%, #ccc7fb 0%, rgba(145,51,202,0.6) 55.21%, rgba(141,14,192,0) 100%), radial-gradient(84.49% 66.22% at 50% 59.94%, #000 0%, #030419 60.94%, #340d67 80.73%, #36299b 90.1%)
      box-shadow inset 0px 3.5rem 3.5rem rgba(48, 44, 245, 0.17)

.hero-btn
  margin var(--spacing-8) auto

@media screen and (max-width: 1024px)
  .section-hero
    display grid
    .container
      .headings
        .subtitle
          margin-top var(--spacing-7)

@media screen and (max-width: 767px)
  .section-hero
    .container
      .content
        padding-bottom 20%
    .hero-graphics
      font-size 0.5rem

@media screen and (max-width: 576px)
  .section-hero
    min-height 32rem
    max-height 42rem
    margin-bottom var(--spacing-8)
    .section-container
      padding-top var(--spacing-4)
      padding-bottom var(--spacing-7)
    .container
      .content
        padding-bottom 40%
        .subtitle
          margin-top var(--spacing-6)
    .hero-graphics
      font-size 0.36rem

  .hero-btn
    width 100%
    max-width: $max-width['6']

@media screen and (min-width: 1536px)
  .section-hero
    .hero-graphics
      overflow visible
</style>
