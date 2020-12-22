<template>
  <nav class="nav-primary">
    <ul class="nav-primary__first">
      <li>
        <NuxtLink to="/">
          <logo-cosmos-wordmark v-if="this.$route.path === '/'" class="logo" />
          <logo-stargate-wordmark v-else class="logo" />
        </NuxtLink>
        <span class="sr-only">Cosmos</span>
      </li>
      <li>
        <NuxtLink to="/" class="text tm-rf0 tm-lh-title">Overview</NuxtLink>
        <NuxtLink to="/testnets" class="text tm-rf0 tm-lh-title"
          >Testnets</NuxtLink
        >
        <NuxtLink to="/resources" class="text tm-rf0 tm-lh-title"
          >Resources</NuxtLink
        >
      </li>
    </ul>
    <ul v-if="this.$route.path === '/testnets'" class="nav-primary__second">
      <li>
        <NuxtLink to="/">
          <span class="text tm-rf0 tm-lh-title">← Testnets</span>
          <icon-arrow-right class="icon" />
        </NuxtLink>
      </li>
      <li>
        <a
          href="https://github.com/cosmosdevs/stargate#stargate-5-testing"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="text tm-rf0 tm-lh-title">GitHub ↗</span>
          <icon-github class="icon" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active
  color #00c58e
  font-weight bold

.nav-primary
  &__first
    display grid
    grid-template-columns repeat(3, 1fr)
    align-items center
    padding 0
  &__second
    display flex
    justify-content space-between
    padding 0
  li
    list-style-type none
    &:first-child
      text-align left
    &:nth-child(2)
      display flex
      justify-content space-evenly
  .logo
    display block
    margin 0 auto
  a
    display inline-block
    padding var(--spacing-4) 0
    color var(--gray-600)
    border-radius $border-radius-2
    &:hover,
    &:focus
      color var(--gray-800)
    .icon
      display none
      fill var(--gray-800)
      transform rotate(180deg)
      width 1.5rem

// @media screen and (max-width: 1024px)
// @media screen and (max-width: 767px)

@media screen and (max-width: 576px)
  .nav-primary
    .logo
      height 1.25rem
      width auto
    a
      padding var(--spacing-4)
      .text
        display none
      .icon
        display block

@media $breakpoint-xsmall-only
  .nav-primary__first
    display inline-block
</style>
