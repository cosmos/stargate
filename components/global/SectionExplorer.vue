<template>
  <div class="tm-section-container section-container section-explorer">
    <div class="section-graphics">
      <graphics-explore-1
        v-if="this.$route.path === '/testnets/wallets-explorers-exchanges'"
        class="section-graphics__canvas"
      />
      <graphics-explore-2
        v-if="this.$route.path === '/testnets/community'"
        class="section-graphics__canvas"
      />
      <graphics-explore-3
        v-if="this.$route.path === '/testnets/validator'"
        class="section-graphics__canvas"
      />
    </div>
    <div class="headings">
      <div class="headings__title tm-rf6 tm-bold tm-lh-title">
        Explore the testnet
      </div>
      <div class="headings__subtitle tm-rf1 tm-lh-copy tm-measure">
        Browse the testnet with your favorite community-run block explorers.
      </div>
    </div>
    <div class="cards-container">
      <a
        v-for="item in data"
        :key="item.name"
        :href="item.url"
        target="_blank"
        rel="noreferrer noopener"
        class="cards-container__item"
      >
        <span class="cards-container__item__icon tm-rf2 tm-lh-solid"
          >&#8599;</span
        >
        <div
          class="cards-container__item__title tm-rf1 tm-bold tm-lh-title tm-measure-narrow"
        >
          {{ item.name }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="stylus" scoped>

.section-graphics
  position relative
  &__canvas
    z-index -1
    width 120%
    margin-left -10%
    height auto
    margin-top -16%
    margin-bottom -16%

.headings
  &__title
    color var(--white)
    position relative

  &__subtitle
    margin-top var(--spacing-7)
    color var(--gray-800)
    position relative

.cards-container
  margin-top var(--spacing-9)
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  position relative

  &__item
    background linear-gradient(89.41deg, #99DAFF -0.22%, #FFD1FD 99.78%)
    border-radius var(--spacing-4)
    padding var(--spacing-7)
    backface-visibility hidden
    transform translateZ(0)
    transition all .25s cubic-bezier(.165,.84,.44,1)
    cursor pointer
    max-width 23.3125rem
    text-align left

    &__icon
      display flex
      justify-content flex-end
      color var(--gray-50)
      transition color .1s ease-out, transform .25s ease-out

    &__title
      color var(--gray-50)
      transition color .1s ease-out
      padding-right 2rem
      margin-top var(--spacing-8)

@media $breakpoint-medium
  .cards-container
    grid-template-columns repeat(2, 1fr)

@media $breakpoint-xl
  .cards-container
    grid-template-columns repeat(3, 1fr)
</style>
