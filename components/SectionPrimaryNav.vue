<template>
  <div class="nav-inner">
    <nav class="nav nav-primary" role="navigation">
      <NuxtLink
        to="/"
        :class="['logos', this.$route.path != '/' && ' not-home']"
      >
        <logo-cosmos-wordmark class="logo logo-cosmos" />
        <logo-stargate-wordmark class="logo logo-stargate" />
      </NuxtLink>
      <span class="sr-only">Cosmos – Stargate</span>
      <div class="nav-scroll">
        <ul>
          <li>
            <NuxtLink to="/" class="text tm-rf0 tm-medium tm-lh-title"
              >Overview</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/testnet" class="text tm-rf0 tm-medium tm-lh-title"
              >Prepare</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/resources" class="text tm-rf0 tm-medium tm-lh-title"
              >Resources</NuxtLink
            >
          </li>
          <li>
            <a
              href="https://github.com/cosmos/stargate-launch"
              target="_blank"
              rel="noreferrer noopener"
              class="text tm-rf0 tm-medium tm-lh-title"
              >Updates &#8599;</a
            >
          </li>
        </ul>
      </div>
      <div
        v-if="toTimezone(countdown.date, countdown.time) >= moment()"
        class="countdown tm-rf-1 tm-code"
      >
        Launch in&nbsp;
        <tm-countdown
          :now="countdown.now"
          :end="countdownTimer(countdown.date, countdown.time)"
        />
      </div>
    </nav>
    <!-- <nav
      v-if="
        this.$route.path === '/testnets/wallets-explorers-exchanges' ||
        this.$route.path === '/testnets/community' ||
        this.$route.path === '/testnets/validator'
      "
      class="nav nav-secondary"
      role="navigation"
    >
      <ul>
        <li>
          <tm-button
            to-link="internal"
            to="/testnets"
            size="l"
            variant="text"
            color="var(--white)"
            glow
            ><span class="icon__left">←</span>Prepare
          </tm-button>
        </li>
        <li>
          <tm-button
            to-link="external"
            href="https://github.com/cosmosdevs/stargate#stargate-5-testing"
            size="l"
            variant="text"
            color="var(--white)"
            glow
            ><span class="text"
              >GitHub<span class="icon__right">&#8599;</span></span
            >
            <icon-github class="icon" />
          </tm-button>
        </li>
      </ul>
    </nav> -->
  </div>
</template>

<script>
import moment from 'moment-timezone'

export default {
  data() {
    return {
      moment,
      countdown: {
        now: Math.trunc(new Date(new Date().toUTCString()).getTime() / 1000),
        date: '2021-02-18',
        time: '06:00',
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
    toTimezone(date, time) {
      return (
        moment
          // set base time with UTC
          // get timezone with i18n API - Intl.DateTimeFormat().resolvedOptions().timeZone
          // usage: 2020-08-04 08:00
          .tz(`${date} ${time}`, 'UTC')
          // use client's locale time zone
          .tz(moment.tz.guess())
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
.countdown
  display flex
  color var(--secondary-900)
  border 0.0625rem solid rgba(255, 255, 255, 0.2)
  padding 0.125rem 0.5rem
  border-radius $border-radius-1

.nav-inner
  position relative
  z-index 2

.nav
  /* if no secondary nav, create similar space */
  &:first-child:last-child
    margin-bottom var(--spacing-9)

  &-primary,
  ul
    display flex
    align-items center
    justify-content space-between
  ul
    padding 0
  li
    list-style-type none
    display inline-block
    + li
      margin-left var(--spacing-7)
  .logo
    display block
    transition transform .4s $ease-out, opacity .4s $ease-out, color .4s $ease-out, visibility .4s 0s
    color var(--white)
  .logo-stargate
    position absolute
    height 1rem
    opacity 0
    visibility hidden
    transform scale(0.8)
  .logos
    position relative
    width 10rem
    height 3rem
    display flex
    justify-content center
    flex-direction column
    &.not-home
      .logo-cosmos
        transform scale(0.4) translateY(-3.5rem)
        color var(--gray-600)
      .logo-stargate
        opacity 1
        visibility visible
        transform scale(1)
        transition transform .4s $ease-out, opacity .4s $ease-out, visibility 0s

  &-primary ul a
    display block
    white-space nowrap
    padding var(--spacing-6) 0
    color var(--white)
    border-radius $border-radius-2
    transition all .25s $ease-out
    &:hover,
    &:focus
      opacity 0.8
    &:active
      opacity 0.6
      transition-duration .05s
    // /* exact link will show the primary color for only the exact matching link */
    &.nuxt-link-exact-active
      cursor default
      color var(--gray-600)
      opacity 1
  &-secondary
    .tm-button
      min-width $max-width['2']
    .icon
      display none
      fill var(--white)
      width 1.5rem
      &__reverse
        transform rotate(180deg)

@media $breakpoint-small
  .homelink
    align-self baseline
    margin-top var(--spacing-1)
  .logos
    align-items start
    height 4rem
  .logo
    transform-origin 0% 50%
  .nav-primary
    align-items center

@media $breakpoint-xsmall-only
  .nav
    &-primary
      justify-content center
      flex-direction column
      align-items unset
    .logos
      center()
    .logo-cosmos
      max-height 1.5rem
      width auto
    .logo-stargate
      height 0.75rem
    .logos.not-home
      .logo-cosmos
        transform scale(0.5) translateY(-2.5rem)
    &-secondary
      .text
        display none
      .icon
        display block

  .nav-scroll
    margin-left calc(-1 * var(--spacing-7))
    margin-right calc(-1 * var(--spacing-7))
    overflow-x auto
    text-align center
    scrollbar-width none
    &::-webkit-scrollbar
      display none

  .nav ul
    padding-left var(--spacing-7)
    padding-right var(--spacing-7)
    display inline-flex
    justify-content center
    align-items center

  .countdown
    display none

@media screen and (max-width: 1024px)
  .nav
    &-primary
      justify-content center
      flex-direction column

  .countdown
    display none
</style>
