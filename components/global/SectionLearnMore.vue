<template>
  <div class="section">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="left">
          <div class="left__title tm-rf4 tm-bold tm-lh-title">Learn more</div>
        </div>
        <div class="list">
          <a
            v-for="item in data"
            :key="item.title"
            :href="item.url"
            target="_blank"
            rel="noreferrer noopener"
            class="list-item"
          >
            <span class="list-item__icon tm-rf2 tm-lh-solid">&#8599;</span>
            <div
              class="list-item__title tm-rf1 tm-bold tm-lh-title tm-measure-narrow"
            >
              {{ item.title }}
            </div>
            <div class="list-item__description tm-rf0 tm-lh-copy tm-measure">
              {{ item.desc }}
            </div>
            <div class="list-item__date tm-rf-1 tm-lh-title">
              {{ item.date }}
            </div>
          </a>
        </div>
      </div>
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
/deep/
  .container
    max-width unset

.left
  grid-column 1 / span 4
  &__title
    margin-top var(--spacing-7)
    color var(--white)

.list
  margin-top var(--spacing-7)
  grid-column 5/ span 9

.list-item
  display block
  text-align left
  padding var(--spacing-7) 0
  position relative
  &__icon
    position absolute
    right 0
    color var(--gray-600)
    transition color .1s ease-out, transform .25s ease-out
  &__title
    color var(--primary-900)
    transition color .1s ease-out
    padding-right 2rem
  &__description
    margin-top var(--spacing-4)
    color var(--gray-600)
  &__date
    margin-top var(--spacing-4)
    color var(--gray-600)
  &:hover
    .list-item__title,
    .list-item__icon
      color var(--white)
    .list-item__icon
      transform translate(3px, -3px)

@media screen and (max-width: 1024px)
  .left, .list
    grid-column 1 / span 12

@media screen and (max-width: 767px)
  .left
    margin-top var(--spacing-8)
</style>
