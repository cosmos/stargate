<template>
  <nav class="nav-primary">
    <ul>
      <li>
        <NuxtLink to="/">
          <logo-wordmark class="logo" />
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
    // display block
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
//   .section-hero
//     display grid
//     .container
//       .headings
//         .subtitle
//           margin-top var(--spacing-7)

// @media screen and (max-width: 767px)
//   .section-hero
//     .container
//       .content
//         padding-bottom 20%
//     .hero-graphics
//       font-size 0.5rem

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

  // .section-hero
  //   min-height 32rem
  //   max-height 42rem
  //   margin-bottom var(--spacing-8)
  //   .section-container
  //     padding-top var(--spacing-4)
  //     padding-bottom var(--spacing-7)
  //   .container
  //     .nav-primary
  //       margin-bottom var(--spacing-8)
  //     .content
  //       padding-bottom 40%
  //       .subtitle
  //         margin-top var(--spacing-6)
</style>
