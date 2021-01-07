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
      <ul>
        <li>
          <NuxtLink to="/" class="text tm-rf0 tm-medium tm-lh-title"
            >Overview</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/testnets" class="text tm-rf0 tm-medium tm-lh-title"
            >Testnets</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/resources" class="text tm-rf0 tm-medium tm-lh-title"
            >Resources</NuxtLink
          >
        </li>
      </ul>
    </nav>
    <nav
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
            ><span class="icon__left">←</span>Testnets
          </tm-button>
        </li>
        <li>
          <tm-button
            to-link="internal"
            to="https://github.com/cosmosdevs/stargate#stargate-5-testing"
            size="l"
            variant="text"
            color="var(--white)"
            glow
            ><span class="text">GitHub<span class="icon__right">↗️</span></span>
            <icon-github class="icon" />
          </tm-button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>

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
    align-items flex-end

@media $breakpoint-xsmall-only
  .nav
    &-primary
      justify-content center
      flex-direction column
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
</style>
