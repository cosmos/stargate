<template>
  <div class="section section-contributors">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="section-header tm-rf0 tm-medium tm-lh-title tm-overline">
          Contributors
        </div>
        <div class="section-graphics">
          <graphics-consortium class="section-graphics__canvas" />
        </div>
        <div class="section-top">
          <div class="section-title tm-rf6 tm-bold tm-lh-title">
            Core Developers
          </div>
          <div class="section-statement tm-rf1 tm-lh-copy tm-measure">
            Stargate is made possible through the hard work and coordination of
            many dedicated teams contributing to development on Cosmos SDK,
            Tendermint Core, IBC and Gaia.
          </div>
        </div>
        <div class="section-list container">
          <div class="left-half__container">
            <div
              v-for="i in contributorsList.slice(0, 3)"
              :key="i.name.toLowerCase()"
              class="left-half__container__item"
            >
              <a
                :href="i.url"
                target="_blank"
                rel="noreferrer noopener"
                class="section-list__item"
              >
                <div class="section-list__item__logo">
                  <img alt="Company logo" :src="i.logo" />
                </div>
                <div
                  class="section-list__item__title tm-rf1 tm-bold tm-lh-title"
                >
                  {{ i.name }}
                  <code
                    v-if="i.role"
                    class="section-list__item__title__role tm-rf-1 tm-lh-title"
                    >{{ i.role }}</code
                  >
                </div>
                <div class="section-list__item__date tm-rf2 tm-lh-solid">
                  &#8599;
                </div>
              </a>
            </div>
          </div>
          <div class="right-half__container">
            <div
              v-for="i in contributorsList.slice(3, contributorsList.length)"
              :key="i.name.toLowerCase()"
              class="right-half__container__item"
            >
              <a
                :href="i.url"
                target="_blank"
                rel="noreferrer noopener"
                class="section-list__item"
              >
                <div class="section-list__item__logo">
                  <img alt="Company logo" :src="i.logo" />
                </div>
                <div
                  class="section-list__item__title tm-rf1 tm-bold tm-lh-title"
                >
                  {{ i.name }}
                  <code
                    v-if="i.role"
                    class="section-list__item__title__role tm-rf-1 tm-lh-title"
                    >{{ i.role }}</code
                  >
                </div>
                <div class="section-list__item__date tm-rf2 tm-lh-solid">
                  &#8599;
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { orderBy } from 'lodash'

export default {
  data() {
    return {
      contributors: [
        {
          logo: '/logos/tendermint.svg',
          name: 'Tendermint',
          url: 'http://tendermint.com',
        },
        {
          logo: '/logos/iqlusion.svg',
          name: 'Iqlusion',
          role: 'Coordinator',
          url: 'https://www.iqlusion.io',
        },
        {
          logo: '/logos/interchain-gmbh.svg',
          name: 'Interchain GmbH',
          url: 'http://interchain.berlin',
        },
        {
          logo: '/logos/informal-systems.svg',
          name: 'Informal Systems',
          url: 'https://informal.systems',
        },
        {
          logo: '/logos/regen-network.svg',
          name: 'Regen Network',
          url: 'https://www.regen.network',
        },
        {
          logo: '/logos/fission-labs.svg',
          name: 'Fission Labs',
          url: 'https://fissionlabs.io',
        },
        {
          logo: '/logos/akash-network.svg',
          name: 'Akash Network',
          url: 'https://akash.network',
        },
      ],
    }
  },
  computed: {
    contributorsList() {
      const sortedList = orderBy(this.contributors, 'name')
      return sortedList
    },
  },
}
</script>

<style lang="stylus" scoped>
.section-contributors
  .section-header
    grid-column 6 / span 7
  .section-graphics
    grid-column 7 / span 6
    position relative
    .section-graphics__canvas
      position absolute
      width 130%
      margin-left -15%
      margin-top 0
  .section-top
    grid-column 1 / span 7
    margin-top var(--spacing-12)
    position relative
  .section-title
    align-self flex-start
    max-width 6em
  .section-statement
    margin-top var(--spacing-8)
    color var(--gray-800)
  .section-list
    grid-column 1/span 12
    grid-auto-flow column
    width 100%
    max-width none
    position relative
    .left-half__container
      grid-column 1/span 5
      margin-top auto
    .right-half__container
      grid-column 8/span 5
    &__item
      padding var(--spacing-7) 0
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      border-bottom 1px solid #282B53
      &__title
        color var(--primary-900)
        transition color .1s ease-out
        flex 1
        margin 0 var(--spacing-7)
        &__role
          color var(--gray-600)
          margin-left var(--spacing-3)
          vertical-align baseline
          background #282B53
          border-radius $border-radius-5
          padding var(--spacing-1) var(--spacing-4)
          display inline-block
      &__date
        color var(--gray-600)
        transition color 0.1s ease-out, transform 0.15s ease-out
      &:hover .section-list__item__title,
      &:hover .section-list__item__date
        color var(--white)
      &:hover .section-list__item__date
        transform translate(3px, -3px)

@media screen and (max-width: 1024px)
  .section .section-header
      grid-column 1 / span 12

  .section-contributors
    .section-top
      grid-column 1/span 12
    .section-list
      margin-top var(--spacing-9)
      display block
      .left-half
        grid-column unset
      .right-half
        grid-column unset

@media screen and (max-width: 576px)
  .section-contributors
    .section-graphics
      grid-column 4/span 8
      font-size 0.5rem
    .section-top
      margin-top var(--spacing-13)
    .section-list
      margin-top var(--spacing-8)
      &__item__logo
        max-width $max-width['2']
</style>
