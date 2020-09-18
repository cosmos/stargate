<template>
  <div>
    <nuxt />
    <tm-footer />
  </div>
</template>

<script>
import TmFooter from '~/components/TmFooter.vue'

export default {
  components: {
    TmFooter,
  },
}
</script>

<style lang="stylus">
a[href]
  color inherit
  text-decoration initial

// Accessible/SEO friendly CSS hiding
.sr-only
  position absolute
  height 1px
  width 1px
  overflow hidden
  clip rect(1px, 1px, 1px, 1px)

.section-container
  position relative
  max-width 96rem
  margin 0 auto
  .container
    display grid
    grid-template-columns repeat(12, 1fr)
    gap 0 2rem
    max-width var(--container-mw-lg)
    margin 0 auto

.section
  overflow hidden
  position relative
  padding-top 6rem
  padding-bottom 6rem

.section-header
  padding-top 1rem
  min-height 3rem
  font-weight 600
  font-size 1.1875rem
  line-height 1.263
  letter-spacing 0.08em
  text-transform uppercase
  color #989BB9
  border-top 1px solid #282B53

@media screen and (max-width: 1279px)
  .section
    padding-top 6rem
    padding-bottom 6rem

@media screen and (max-width: 1024px)
  .section
    padding-top 4rem
    padding-bottom 4rem

  // .section .section-header
  //   grid-column 1 / span 12

@media screen and (max-width: 767px)
  .section
    .section-header
      font-size 1rem
      line-height 1.375

  .section-container
    padding-top 1.5rem

@media screen and (min-width: 1920px)
  .section
    padding-top 8rem
    padding-bottom 8rem
</style>
