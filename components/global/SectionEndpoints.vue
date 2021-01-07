<template>
  <div class="tm-section-container section-container">
    <div class="container">
      <div class="list section-join">
        <div class="list__title tm-rf4 tm-bold tm-lh-title tm-measure">
          Joining the testnet
        </div>

        <div class="list__item">
          <div class="list__item__paragraph tm-measure tm-rf1 tm-lh-copy">
            <slot name="intro" />
          </div>
        </div>
      </div>

      <div class="left">
        <div class="left__title tm-rf3 tm-bold tm-lh-title">Endpoints</div>
      </div>
      <div class="list">
        <div class="list__paragraph tm-measure tm-rf1 tm-lh-copy">
          Use the public endpoints below to interact with the
          {{ id }} testnet.
        </div>

        <div class="list__item">
          <div class="list__item__title tm-rf0 tm-bold tm-lh-title">
            Public RPC endpoint
          </div>
          <a
            :href="`http://${endpoints[code][0]}`"
            target="_blank"
            rel="noreferrer noopener"
            class="list__item__url tm-rf1 tm-lh-title tm-code"
            >{{ endpoints[code][0] }}</a
          >
        </div>

        <div class="list__item">
          <div class="list__item__title tm-rf0 tm-bold tm-lh-title">
            Public REST endpoint
          </div>
          <a
            :href="`http://${endpoints[code][1]}`"
            target="_blank"
            rel="noreferrer noopener"
            class="list__item__url tm-rf1 tm-lh-title tm-code"
            >{{ endpoints[code][1] }}</a
          >
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
    code: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      // RPC, REST
      endpoints: {
        bigbang: ['157.230.185.206:26657', '157.230.185.206:1317'],
        stargate: [
          'rpc.stargate.sim.bigdipper.live',
          'api.stargate.sim.bigdipper.live',
        ],
        cosmoshub: ['34.66.55.131:26657', '34.66.55.131:1317'],
      },
    }
  },
}
</script>

<style lang="stylus" scoped>
.section-join
  margin-bottom var(--spacing-10)

.left
  grid-column 1 / span 4
  margin-top var(--spacing-7)
  &__title
    color var(--white)

.list
  margin-top var(--spacing-7)
  grid-column 5/ span 9

  &__title
    margin-bottom var(--spacing-8)
    color var(--white)

  &__paragraph
    margin-bottom var(--spacing-8)

  &__item + &__item
    margin-top var(--spacing-8)

  &__item
    &__title
      margin-bottom var(--spacing-5)
      color var(--white)

blockquote
  padding-left var(--spacing-7)
  padding-right var(--spacing-7)
  border-left 0.25rem solid #FFBA31
  color inherit
  margin-top var(--spacing-8)

@media screen and (max-width: 1024px)
  .left, .list
    grid-column 1 / span 12

@media screen and (max-width: 767px)
  .left
    margin-top var(--spacing-8)
</style>
