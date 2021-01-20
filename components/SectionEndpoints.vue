<template>
  <div class="tm-section-container section-container">
    <div class="container">
      <div class="left">
        <div class="left__title tm-rf3 tm-bold tm-lh-title">How to prepare</div>
      </div>
      <div class="list">
        <div v-for="item in preps" :key="item.name" class="list__item">
          <div class="list__item__logo">
            <img alt="Prep item logo" :src="item.logo" />
          </div>
          <div class="list__item__title tm-rf2 tm-bold tm-lh-title">
            {{ item.name }}
          </div>
          <div
            class="list__item__paragraph tm-rf1 tm-lh-copy"
            v-html="markdown(item.desc)"
          ></div>
        </div>
      </div>

      <div class="left">
        <div class="left__title tm-rf3 tm-bold tm-lh-title">
          Joining the testnet
        </div>
        <div class="left__id">
          <span class="left__id__chain tm-rf-1 tm-lh-title">chain-id</span>
          <span class="left__id__id tm-rf1 tm-bold tm-lh-copy tm-code">{{
            id
          }}</span>
        </div>
      </div>
      <div class="list">
        <div class="list__paragraph tm-measure tm-rf1 tm-lh-copy">
          The previous individual testnets have all ended to make way for the
          final testnet to be used for service provider integration and relayer
          testing.
        </div>

        <div class="list__paragraph tm-measure tm-rf1 tm-lh-copy">
          Join <code>stargate-final</code>, the persistent, non-adversarial
          testnet that replicates a Stargate-enabled Cosmos Hub
        </div>

        <div class="list__item__title tm-rf2 tm-bold tm-lh-title">
          Endpoints
        </div>
        <div class="list__paragraph tm-measure tm-rf1 tm-lh-copy">
          Use the public endpoints below to interact with the
          <code>stargate-final</code> testnet.
        </div>

        <div class="list__item__endpoint">
          <div class="list__item__title tm-rf0 tm-bold tm-lh-title">
            Public RPC endpoint
          </div>
          <a
            :href="`http://${endpoints[0]}`"
            target="_blank"
            rel="noreferrer noopener"
            class="list__item__url tm-rf1 tm-lh-title tm-code"
            >{{ endpoints[0] }}</a
          >
        </div>

        <div class="list__item__endpoint">
          <div class="list__item__title tm-rf0 tm-bold tm-lh-title">
            Public REST endpoint
          </div>
          <a
            :href="`http://${endpoints[1]}`"
            target="_blank"
            rel="noreferrer noopener"
            class="list__item__url tm-rf1 tm-lh-title tm-code"
            >{{ endpoints[1] }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  props: {},
  data() {
    return {
      // RPC, REST
      endpoints: ['34.71.170.158:26657', '34.71.170.158:1317'],
      preps: [
        {
          logo: '/icons/prepare-rectangle.svg',
          name: 'Wallets & Exchanges',
          desc:
            'Wallets and Explorers should test to ensure that the legacy Amino endpoints provided on the new chains are compatible with existing services. It is highly recommended to start planning a transition to Protobuf endpoints as Amino support is expected to be discontinued in the future.',
        },
        {
          logo: '/icons/prepare-overlay.svg',
          name: 'Exchanges',
          desc:
            'Exchanges should ensure their signing and querying software is ready by testing the new features against their infrastructure ahead of the Stargate upgrade. Use the Stargate <a href="https://github.com/cosmosdevs/stargate/blob/master/ibc_readiness_matrix.md" target="blank_" rel="noreferrer noopener">IBC Skill Matrix</a> to guide you in supporting IBC with your upgrades.',
        },
        {
          logo: '/icons/prepare-zone.svg',
          name: 'Zone Developers',
          desc:
            'Prepare for Stargate by upgrading your applications and modules to support the latest Cosmos SDK 0.40.0 release. See the <a href="/resources">resources below</a> for migration guides.',
        },
        {
          logo: '/icons/prepare-validators.svg',
          name: 'Validators',
          desc:
            'To implement the Stargate upgrades, validators should prepare by helping to run the final Stargate testnet. <br /><br /> The future of Cosmos depends on you, Cosmonauts!',
        },
      ],
    }
  },
  methods: {
    markdown(value) {
      const md = new MarkdownIt({
        linkify: true,
        html: true,
      })
      return md.render(value)
    },
  },
}
</script>

<style lang="stylus" scoped>
.left
  grid-column 1 / span 4
  margin-top var(--spacing-9)
  &__title
    color var(--white)
  &__id
    margin-top var(--spacing-6)
    display flex
    flex-direction column
    &__chain
      color var(--gray-600)
    &__id
      color var(--gray-800)

.list
  margin-top var(--spacing-9)
  grid-column 6/span 7

  &__title
    margin-bottom var(--spacing-8)
    color var(--white)

  &__paragraph
    margin-bottom var(--spacing-8)

  &__item + &__item
    margin-top var(--spacing-9)

  &__item__endpoint + &__item__endpoint
    margin-top var(--spacing-8)

  &__item

    &__title
      margin-top var(--spacing-5)
      margin-bottom var(--spacing-5)
      color var(--white)

    &__paragraph
      margin-top var(--spacing-5)
      color var(--gray-800)

@media screen and (max-width: 1024px)
  .left, .list
    grid-column 1 / span 12

@media screen and (max-width: 767px)
  .left
    margin-top var(--spacing-8)
</style>
