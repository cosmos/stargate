<template>
  <nav class="nav-primary">
    <ul>
      <li><logo-wordmark class="logo" /><span class="sr-only">Cosmos</span></li>
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
  ul
    display grid
    grid-template-columns repeat(3, 1fr)
    align-items center
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
    .nav-primary
      margin-bottom 5%
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
  .nav-primary
    .logo
      height 1.25rem
    a
      padding var(--spacing-4)
      .text
        display none
      .icon
        display block

  .section-hero
    min-height 32rem
    max-height 42rem
    margin-bottom var(--spacing-8)
    .section-container
      padding-top var(--spacing-4)
      padding-bottom var(--spacing-7)
    .container
      .nav-primary
        margin-bottom var(--spacing-8)
      .content
        padding-bottom 40%
        .subtitle
          margin-top var(--spacing-6)

  .hero-btn
    width 100%
    max-width: $max-width['6']
</style>
