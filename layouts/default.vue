<template>
  <div>
    <div class="tm-section-container section-container nav-container">
      <section-primary-nav />
    </div>
    <nuxt />
    <tm-footer />
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="stylus">
// Accessible/SEO friendly CSS hiding
.sr-only
  position absolute
  height 1px
  width 1px
  overflow hidden
  clip rect(1px, 1px, 1px, 1px)

// https://nuxtjs.org/examples/transitions
.page-enter-active
  transition opacity 0.25s ease-out
.page-leave-active
  transition opacity 0.25s ease-out

.page-enter,
.page-leave-to
  opacity 0

.nav-container
  padding-top var(--spacing-7)

.section-container
  position relative
  max-width: $max-width['11']
  margin 0 auto

.container
  display grid
  grid-template-columns repeat(12, 1fr)
  gap 0 var(--spacing-7)

.section
  overflow hidden
  position relative
  padding-top var(--spacing-10)
  padding-bottom var(--spacing-10)

.section-header
  padding-top var(--spacing-5)
  min-height 3rem
  color var(--gray-600)
  border-top 1px solid #282B53

.section-title
  color var(--white)

@media $breakpoint-medium-max
  .section-container
    padding-top var(--spacing-6)
</style>
