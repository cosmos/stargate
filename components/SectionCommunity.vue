<template>
  <div id="community" class="section section-community">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="section-header tm-rf0 tm-medium tm-lh-title tm-overline">
          Community
        </div>
        <div class="cards">
          <a
            href="https://cosmos.network/community"
            rel="noreferrer noopener"
            class="cards__item"
          >
            <div
              class="cards__item__caption tm-rf0 tm-medium tm-lh-title tm-overline"
            >
              Connect
            </div>
            <div class="cards__item__title tm-rf2 tm-bold tm-lh-title">
              Join the community
            </div>
            <div class="cards__item__description tm-rf1 tm-lh-copy">
              Learn about Cosmos, get to know the community, connect with other
              Cosmonauts and more.
            </div>
          </a>
          <a
            href="https://discord.com/channels/669268347736686612/723170066937413693"
            target="_blank"
            rel="noreferrer noopener"
            class="cards__item"
          >
            <span class="cards__item__disclosure">
              <icon-arrow-top-right />
            </span>
            <div
              class="cards__item__caption tm-rf0 tm-medium tm-lh-title tm-overline"
            >
              Chat
            </div>
            <div class="cards__item__title tm-rf2 tm-bold tm-lh-title">
              Discuss Stargate
            </div>
            <div class="cards__item__description tm-rf1 tm-lh-copy">
              Join the <code>#stargate</code> channel in the Cosmos community
              Discord and chat with developers.
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.section-community
  .section-header
    grid-column 6 / span 7
  .cards
    margin-top 6rem
    display grid
    grid-template-columns 1fr 1fr
    gap 2rem
    grid-column 1 / span 12
    &__item
      position relative
      padding 3rem
      height 338px
      color var(--white)
      position relative
      display flex
      flex-direction column
      flex-wrap nowrap
      justify-content flex-start
      color var(--white)
      height 338px
      background url("/top-half-graphics.svg"), linear-gradient(256.92deg, #120018 0%, #121435 100%)
      background-position bottom center
      background-size contain
      background-repeat no-repeat
      border-radius 1.25rem
      &:first-child
        background url("/bottom-half-graphics.svg"), linear-gradient(256.92deg, #121435 0%, #030419 100%)
        justify-content flex-end
        background-position top center
        background-size contain
        background-repeat no-repeat
      &:hover
        transform translateY(-3px)
        .cards__item__disclosure
          transform translate(2px,-2px)
        .cards__item__caption
          transform translateY(-4px)
        .cards__item__title
          transform translateY(-2px)
      &:active
        transform none
        transition-duration 0s
      &__disclosure
        position absolute
        top 3rem
        right 3rem
        width 1.5rem
        height 1.5rem
        transition transform .25s ease-out
      &__caption
        color var(--gray-600)
        transition transform .25s ease-out
      &__title
        margin-top 0.75rem
        color var(--white)
        transition transform .25s ease-out
      &__description
        margin-top 0.75rem
        color var(--gray-600)

@media screen and (max-width: 1024px)
  .section .section-header
      grid-column 1 / span 12

  .section-community .cards
    grid-template-columns repeat(1, 1fr)

@media screen and (max-width: 576px)
  .section-community
    .cards
      margin-top 2rem
      &__item
        height auto
        min-height 18rem
        border-radius 0.75rem
        &__disclosure
          top 1rem
          right 1rem

@media screen and (max-width: 320px)
  .section-community .cards__item
    padding 1.5rem
</style>
