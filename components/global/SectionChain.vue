<template>
  <div class="section">
    <div class="tm-section-container section-container">
      <div class="container list">
        <div class="section-graphics">
          <graphics-testnet class="section-graphics__canvas" />
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
        <div class="list__desc tm-rf2 tm-lh-copy">
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

.list
  margin-top var(--spacing-7)
  position relative

  &__top
    grid-column 5/ span 9
    position relative

    &__heading
      color var(--gray-600)
      position relative

  &__title
    margin-top var(--spacing-8)
    color var(--gray-800)
    grid-column 4/ span 9
    position relative

  &__desc
    margin-top var(--spacing-8)
    grid-column 5/ span 9
    color var(--gray-600)
    position relative

.section-graphics
  grid-column 7 / span 6
  position relative
  &__canvas
    position absolute
    width 130%
    margin-left -55%
    margin-top 90%
    transform translate(-50%, -50%)

@media screen and (max-width: 767px)
  .list
    display block
</style>
