<template>
  <nav class="nav tm-rf1 tm-lh-copy">
    <ul class="nav__list">
      <li class="nav__list__item">
        <a v-scroll-to="'#intro'">Overview</a>
      </li>
      <li class="nav__list__item">
        <a v-scroll-to="'#testnets'">Testnets</a>
      </li>
      <li class="nav__list__item">
        <a v-scroll-to="'#articles'">Resources</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.nav
  overflow-x auto
  overflow-y hidden
  white-space nowrap
  scrollbar-width none
  &__list
    display flex
    flex-direction row
    justify-content center
    list-style none
    padding-left var(--spacing-9)
    padding-right var(--spacing-9)
    &__item
      + .nav__list__item
        margin-left var(--spacing-7)
      a
        display inline-block
        padding var(--spacing-5) 0
        position relative
        cursor pointer
        z-index 1
        color var(--gray-600)
        &:hover,
        &:focus
          color var(--gray-900)
        &:hover:before
          visibility visible
          transform scaleX(1)
        &:before
          content ""
          position absolute
          width 100%
          height 2px
          bottom 2px
          z-index -1
          border-radius $border-radius-1
          background-color #3B2AB7
          visibility hidden
          transform scaleX(0)
          transition all 300ms cubic-bezier(0.325, -0.075, 0, 1.65)

@media screen and (max-width: 1024px)
  .nav
    &::-webkit-scrollbar
      display none
    &__list
      display flex
      flex-direction row
      justify-content space-between
      transition transform 200ms ease 0s
      width fit-content
      -webkit-overflow-scrolling touch

@media screen and (max-width: 767px)
  .nav
    &__list
      padding-left var(--spacing-6)
      padding-right var(--spacing-6)

@media screen and (max-width: 576px)
  .nav
    &__list__item a
      padding var(--spacing-4) 0
</style>
