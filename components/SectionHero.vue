<template>
  <div class="section-hero">
    <div class="tm-section-container section-container">
      <div class="hero-graphics">
        <span class="hero-graphics__gate"></span>
        <gate-notches class="hero-graphics__gate-notches" />
        <span class="hero-graphics__star"></span>
        <span class="hero-graphics__planet"></span>
      </div>
      <div class="container">
        <nav class="nav-primary">
          <ul>
            <li>
              <a href="https://cosmos.network">
                <span class="text tm-rf0 tm-lh-title">← Cosmos Network</span>
                <icon-arrow-right class="icon" />
              </a>
            </li>
            <li>
              <logo-wordmark class="logo" /><span class="sr-only">Cosmos</span>
            </li>
          </ul>
        </nav>
        <div class="headings">
          <h1 class="title">
            <wordmark-stargate />
            <span class="sr-only">Stargate</span>
          </h1>
          <div class="subtitle tm-rf3 tm-lh-copy">
            The Internet of Blockchains is on the horizon.
          </div>
        </div>
        <div class="hero-bottom">
          <tm-button
            v-scroll-to="'#testnets'"
            size="l"
            color="var(--white)"
            background-color="linear-gradient(92.99deg, #8D0EC0 0%, #4251FA 100%)"
            variant="contained"
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

.nav-primary
  ul
    display grid
    grid-template-columns repeat(3, 1fr)
    align-items center
    padding 0
  li
    list-style-type none
    &:first-child
      text-align left
  .logo
    display block
    margin 0 auto
  a
    display inline-block
    padding 0.8125rem 0
    color var(--gray-600)
    border-radius 0.375rem
    &:hover,
    &:focus
      color var(--gray-800)
    .icon
      display none
      fill var(--gray-800)
      transform rotate(180deg)
      width 1.5rem

.section-hero
  position relative
  height 100vh
  min-height 52rem
  max-height 64rem
  margin-bottom 6rem
  display flex
  justify-content stretch
  align-items stretch
  text-align center
  background radial-gradient(60.92% 51.1% at 50% 57.31%, #21255F 26.56%, #030419 80.73%, #000000 100%)
  .section-container
    display flex
    align-items stretch
    width 100%
    padding-top 4rem
    padding-bottom 6rem
  .container
    position relative
    display flex
    width 100%
    flex-direction column
    align-items normal
    justify-content space-between
    .nav-primary
      margin-bottom 5%
    .headings
      width 100%
      .title
        margin 0
        svg
          width 100%
          height auto
          max-height 5.5rem
      .subtitle
        margin-top 3rem
        color var(--gray-600)

.section-hero
  .hero-graphics
    position absolute
    top 10%
    left 0
    bottom -100%
    padding-top 50%
    width 100%
    overflow hidden
    &__gate,
    &__gate-notches
      position absolute
      width 78%
      left 11%
      top 9.3%
      transform translate3d(0,0,0)
    &__gate
      padding-bottom 78%
      border-radius 50%
      box-shadow inset 0 0.1875em 0.0625em 0 rgba(255, 255, 255, 0.3)
      border 1px solid rgba(255, 255, 255, 0.1)
      box-sizing content-box
      animation 3s gate infinite linear
      &:after
        content ""
        position absolute
        top 3.2%
        left 3.2%
        right 3.2%
        bottom 3.2%
        border-radius 50%
        box-shadow inset 0 -0.1875em 0.0625em 0 rgba(255, 255, 255, 0.3)
        border 1px solid rgba(255, 255, 255, 0.1)
        animation 1.4s gate infinite linear reverse
    &__gate-notches
      height auto
      animation 40s gate infinite linear
    &__star
      position absolute
      width 42%
      padding-bottom 42%
      left 29%
      top 22%
      border-radius 50%
      background var(--white)
      box-shadow 0px 0px 2.5em #263CFF, 0px 0px 8em #2D74FF
    &__planet
      position absolute
      width 126%
      padding-bottom 126%
      left -13%
      top 42%
      border-radius 50%
      background radial-gradient(84.49% 66.22% at 50% 59.94%, #000000 5.73%, #030419 71.48%, #0E1247 81.25%, #36299B 91.15%)
      box-shadow 0px -4.5em 4em rgba(28, 0, 238, 0.17), 0px -0.625em 0.5em rgba(92, 70, 255, 0.11), inset 0px 3.5em 3.5em rgba(48, 44, 245, 0.17), inset 0px 0.375em 0.75em rgba(104, 67, 252, 0.23)

.hero-bottom
  margin-top 15%

.hero-btn
  margin 3.5rem auto

@media screen and (max-width: 1024px)
  .section-hero
    display grid
    .container
      .headings
        .subtitle
          margin-top 2rem

@media screen and (max-width: 767px)
  .section-hero
    .hero-graphics
      font-size 0.5rem

@media screen and (max-width: 576px)
  .nav-primary
    .logo
      height 1.25rem
    a
      padding 0.75rem
      .text
        display none
      .icon
        display block

  .section-hero
    min-height 32rem
    max-height 42rem
    margin-bottom 3rem
    .section-container
      padding-top 0.75rem
      padding-bottom 2rem
    .container
      .nav-primary
        margin-bottom 3rem
      .headings
        .title
          padding-left 1rem
          padding-right 1rem
        .subtitle
          margin-top 1.5rem
    .hero-graphics
      font-size 0.36rem

@media screen and (min-width: 1536px)
  .section-hero
    .hero-graphics
      overflow visible
</style>
