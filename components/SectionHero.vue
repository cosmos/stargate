<template>
  <div class="section-hero">
    <div class="tm-section-container section-container">
      <div class="hero-graphics">
        <span class="hero-graphics__glow"></span>
        <span class="hero-graphics__gate"></span>
        <graphics-gate-notches class="hero-graphics__gate-notches" />
        <span class="hero-graphics__star"></span>
        <span class="hero-graphics__planet"></span>
      </div>
      <div class="container">
        <div class="content">
          <div class="suptitle tm-rf2 tm-rf3-m-up tm-lh-copy">
            The Internet of Blockchains is on the horizon.
          </div>
          <h1 class="title">
            <div class="wordmarks">
              <wordmark-stargate variant="glow" />
              <wordmark-stargate />
            </div>
            <span class="sr-only">Stargate</span>
          </h1>
          <div class="subtitle tm-rf1 tm-lh-copy tm-measure-narrow">
            Prepare your integrations for the imminent upgrades to bring
            Stargate to the Cosmos Hub.
          </div>
          <div class="btn-container">
            <tm-button
              to-link="internal"
              to="/testnet"
              size="l"
              color="var(--white)"
              background-color="var(--gray-trans-300)"
              glow
              class="btn-container__btn__primary"
              >Prepare <span class="icon__right">--></span></tm-button
            >
            <tm-button
              to-link="external"
              href="https://www.mintscan.io/cosmos/proposals/36"
              size="l"
              color="var(--black)"
              background-color="linear-gradient(90deg, #99DAFF 0%, #FFD1FD 50%, var(--primary-900) 100%), var(--primary-900)"
              glow
              class="btn-container__btn__secondary"
              >Vote <span class="icon__right">&#8599;</span></tm-button
            >
          </div>
        </div>
        <div class="hero-countdown">
          <div
            class="hero-countdown__title tm-rf0 tm-medium tm-lh-title tm-overline"
          >
            Cosmos hub upgrade
          </div>
          <tm-countdown
            :now="countdown.now"
            :end="countdownTimer.end"
            class="hero-countdown__timer tm-rf1 tm-medium tm-lh-title tm-overline"
          />
          <div class="hero-countdown__date tm-rf0 tm-lh-copy">
            February 18, 06:00 UTC
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'

export default {
  data() {
    return {
      countdown: {
        now: Math.trunc(new Date(new Date().toUTCString()).getTime() / 1000),
        // usage: moment.tz("2021-02-18 06:00", "UTC").format()
        end: '2021-02-18T06:00:00Z',
      },
    }
  },
  mounted() {
    window.setInterval(() => {
      this.countdown.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  methods: {
    countdownTimer(date, time) {
      return moment.tz(`${date} ${time}`, 'UTC').format()
    },
  },
}
</script>

<style lang="stylus" scoped>
@keyframes gate
  from
    transform translate3d(0,0,0) rotate(0deg)
  to
    transform translate3d(0,0,0) rotate(360deg)

.hero-countdown
  margin-top var(--spacing-10)
  display flex
  flex-direction column
  align-items center
  justify-content center
  &__title
    color var(--white)
  &__timer
    color var(--secondary-900)
    background-color var(--white-200)
    padding 0.25rem 1rem
    border-radius $border-radius-1
    width fit-content
    margin-top var(--spacing-4)
    margin-bottom var(--spacing-4)
  &__date
    color var(--primary-900)

.section-hero
  position relative
  height 100vh
  min-height 52rem
  max-height 72rem
  margin-top calc(var(--spacing-10) * -1)
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
    padding-top var(--spacing-12)
    // padding-bottom var(--spacing-10)
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
      display flex
      flex-direction column
      align-items center
      .suptitle
        margin-bottom var(--spacing-7)
        color var(--white)
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
    top -5%
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

.btn-container
  margin-top var(--spacing-8)
  display flex
  flex-wrap wrap
  justify-content center

  &__btn

    &:last-child
      margin-right 0

    &__primary
      margin-right var(--spacing-6)

    &__secondary
      backdrop-filter blur(3rem)

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

  .btn-container
    display flex
    flex-direction column

    &__btn

      &__primary
        margin-right 0
        height fit-content

      &__secondary
        height fit-content
        margin-top var(--spacing-7)

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
        padding-top 20%
        .subtitle
          margin-top var(--spacing-6)
    .hero-graphics
      font-size 0.36rem

@media screen and (max-width: 414px)
  .section-hero
    margin-top calc(var(--spacing-7) * -1)

@media screen and (min-width: 1536px)
  .section-hero
    .hero-graphics
      overflow visible
</style>
