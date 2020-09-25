<template>
  <nav class="nav tm-rf1 tm-lh-copy">
    <ul class="nav__list">
      <li class="nav__list__item">
        <a v-scroll-to="'#intro'">What is Stargate?</a>
      </li>
      <li class="nav__list__item">
        <a v-scroll-to="'#features'">Features</a>
      </li>
      <li class="nav__list__item">
        <a v-scroll-to="'#testnets'">Testnets</a>
      </li>
      <li class="nav__list__item">
        <a v-scroll-to="'#roadmap'">Roadmap</a>
      </li>
      <li class="nav__list__item">
        <a v-scroll-to="'#contributors'">Contributors</a>
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
  overflow scroll
  white-space nowrap
  &__list
    display flex
    flex-direction row
    justify-content center
    list-style none
    padding-left 4rem
    padding-right 4rem
    &__item
      + .nav__list__item
        margin-left 2rem
      a
        display inline-block
        padding 1.25rem 0
        position relative
        cursor pointer
        z-index 1
        color var(--gray-600)
        &:hover,
        &:focus
          color #ECEDF7
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
          border-radius 4px
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
      overflow-x scroll
      overflow-y hidden
      white-space nowrap
      width fit-content
      -webkit-overflow-scrolling touch

@media screen and (max-width: 767px)
  .nav
    &__list
      padding-left 1.5rem
      padding-right 1.5rem

@media screen and (max-width: 576px)
  .nav
    &__list__item a
      padding 0.8125rem 0
</style>
