<template>
  <div class="headroom section-nav">
    <nav class="nav">
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
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.headroom
  will-change transform
  transition transform .2s ease-out

.headroom--pinned
  transform translateY(0%)

.headroom--unpinned
  transform translateY(-100%)

.section-nav
  top 0
  width 100%
  z-index 1000
  &.headroom--pinned,
  &.headroom--unpinned
    position fixed
    &:not(.headroom--frozen)
      background linear-gradient(180deg, rgba(0,0,0,0.96) 41%, rgba(0, 0, 0, 0))
      padding-bottom 1rem
  &.headroom--frozen
    position static
  .nav
    overflow scroll
    white-space nowrap
    font-size 1.1875rem
    line-height 1.263
    letter-spacing -0.005em
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
          z-index 1
          color #989BB9
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
  // .section .section-header
  //     grid-column 1 / span 12

  .section-nav
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
  .section-nav
    .nav
      &__list
        padding-left 1.5rem
        padding-right 1.5rem

@media screen and (max-width: 576px)
  .section-nav
    .nav
      font-size 1rem
      line-height 1.375
      letter-spacing 0
      &__list__item a
        padding 0.8125rem 0
</style>
