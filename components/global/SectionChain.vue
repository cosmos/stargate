<template>
  <div class="section">
    <div class="tm-section-container section-container">
      <div class="container list">
        <div class="section-graphics">
          <graphics-chain-1
            v-if="this.$route.path === '/testnets/wallets-explorers-exchanges'"
            class="section-graphics__canvas"
          />
          <graphics-chain-2
            v-if="this.$route.path === '/testnets/community'"
            class="section-graphics__canvas"
          />
          <graphics-chain-3
            v-if="this.$route.path === '/testnets/validator'"
            class="section-graphics__canvas"
          />
        </div>
        <div class="list__top tm-rf1 tm-lh-copy">
          <div
            class="list__top__heading tm-rf-1 tm-medium tm-lh-title tm-overline"
          >
            chain-id
          </div>
          <div class="list__top__chain-id tm-code">
            {{ id }}
          </div>
        </div>
        <div class="list__title tm-rf6 tm-bold tm-lh-title">
          {{ title }}
        </div>
        <div class="list__desc tm-rf2 tm-lh-copy tm-measure-narrower">
          {{ desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="stylus" scoped>
/deep/
  .section
    overflow initial

.section
  overflow visible

.list
  margin-top var(--spacing-7)
  position relative

  &__top
    grid-column 5/ span 9
    position relative

    &__heading
      color var(--gray-600)
      position relative

    &__chain-id
      color var(--gray-900)

  &__title
    margin-top var(--spacing-8)
    color var(--white)
    grid-column 4/ span 9
    position relative

  &__desc
    margin-top var(--spacing-8)
    grid-column 5/ span 9
    color var(--gray-800)
    position relative

.section-graphics
  grid-column 1/span 3
  grid-row span 4
  position relative
  z-index -1
  &__canvas
    position absolute
    width 390%
    right -190%
    height auto
    margin-top 10%

@media $breakpoint-medium-max
  .list__top,
  .list__title,
  .list__desc
    grid-column 1/span 12
  .section-graphics
    grid-column 1/span 12
    grid-row 5
    &__canvas
      position relative
      width 140%
      right auto
      margin-top -20%
      margin-bottom -40%
      margin-left -20%
</style>
