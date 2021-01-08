<template>
  <div class="section section-roadmap">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="section-header tm-rf0 tm-medium tm-lh-title tm-overline">
          Roadmap
        </div>
        <div class="section-title tm-rf7 tm-bold tm-lh-title">
          <span class="percentage">{{ progressTotal }}%</span> complete
        </div>
        <div class="section-milestones">
          <div class="section-milestones__title tm-rf3 tm-bold tm-lh-title">
            Milestones
          </div>
          <div class="section-milestones__cta">
            <tm-button
              to-link="external"
              href="https://github.com/orgs/cosmosdevs/projects/1"
              color="var(--link)"
              variant="text"
              size="l"
              >View on GitHub ↗</tm-button
            >
          </div>
          <div class="section-milestones__faq">
            <h4
              class="section-milestones__faq__title tm-rf0 tm-bold tm-lh-title"
            >
              How do we measure progress?
            </h4>
            <p
              class="section-milestones__faq__body tm-rf-1 tm-lh-copy tm-measure tm-measure-narrow-l-up"
            >
              The various parts of the Cosmos stack, upon which Stargate is
              built, each have their own milestone. The progress of each
              milestone depends on how many outstanding tasks there are. As more
              tasks are created or completed, the percentage will fluctuate
              until no more tasks remain and the milestone is achieved.
            </p>
          </div>
        </div>
        <a
          v-for="item in milestoneList"
          :key="item.url"
          :href="item.url"
          target="_blank"
          rel="noreferrer noopener"
          class="section-row"
        >
          <div
            class="meter"
            :style="{
              '--progress-bar-width': `${item.progress}%`,
              '--progress-bar-background-color': `${bgColor[item.logo]}`,
            }"
          ></div>
          <div class="details">
            <div class="icon">
              <component :is="`icon-${item.logo}`" />
            </div>
            <div class="text">
              <div class="title tm-rf1 tm-bold tm-lh-copy">
                {{ item.defaultTitle }}
              </div>
              <div class="subtitle tm-rf0 tm-lh-copy">{{ item.repo }}</div>
            </div>
            <div class="indicator">
              <div v-if="item.progress" class="progress__wrapper">
                <div class="progress tm-rf0 tm-lh-copy">
                  {{ item.progress }}% complete
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import IconIbc from '~/components/icons/IconIbc.vue'
import IconSdk from '~/components/icons/IconSdk.vue'
import IconCore from '~/components/icons/IconCore.vue'

export default {
  components: {
    IconIbc,
    IconSdk,
    IconCore,
  },
  data() {
    return {
      milestoneList: [],
      sources: [
        ['cosmos/cosmos-sdk', 25, 'sdk', 'Cosmos SDK 0.40'],
        ['tendermint/tendermint', 27, 'core', 'Tendermint Core 0.34'],
        ['cosmos/cosmos-sdk', 21, 'ibc', 'IBC 1.0'],
      ],
      bgColor: {
        sdk: 'linear-gradient(95.47deg, #320B93 0%, #3B2AB7 100%)',
        core: 'linear-gradient(95.47deg, #086108 0%, #018A01 100%)',
        ibc: 'linear-gradient(95.47deg, #121435 0%, #282B53 100%)',
      },
    }
  },
  computed: {
    progressTotal() {
      const progressSum = this.milestoneList
        .map((i) => Math.floor(i.progress))
        .reduce((a, b) => a + b, 0)
      const percentage = ((progressSum / 300) * 100).toFixed(0)
      return percentage
    },
  },
  mounted() {
    this.sources.forEach(async (source) => {
      const milestone = await this.getMilestone.apply(null, source)
      this.milestoneList.push(milestone)
    })
  },
  methods: {
    async getMilestone(repo, id, logo, defaultTitle, defaultProgress) {
      const url = `https://github.com/${repo}/milestone/${id}`
      try {
        const api = `https://api.github.com/repos/${repo}/milestones/${id}`
        const m = (
          await axios.get(api, {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_PERSONAL_TOKEN}`,
            },
          })
        ).data
        const open = parseInt(m.open_issues)
        const closed = parseInt(m.closed_issues)
        const progress = Math.floor((100 * closed) / (open + closed)).toFixed(0)
        return { defaultTitle, repo, progress, logo, url }
      } catch {
        return {
          repo,
          logo,
          url,
          defaultTitle,
          progress: null,
        }
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.percentage
  background linear-gradient(to bottom right, #3fb3ff, #9010c7)
  background-clip text
  -webkit-text-fill-color transparent

.section-roadmap
  .section-header
    grid-column 1 / span 12
  .section-title
    margin-top var(--spacing-10)
    margin-bottom var(--spacing-9)
    text-align right
    grid-column 1 / span 12
  .section-milestones
    grid-column 1 / 5
    grid-row 3 / 6
    &__title
      margin-top var(--spacing-7)
      color var(--white)
    &__cta
      margin-top var(--spacing-5)
    &__faq
      margin-top var(--spacing-5)
      &__title
        color var(--gray-800)
      &__body
        color var(--gray-600)
        margin-top var(--spacing-3)
  .section-row
    position relative
    margin-top var(--spacing-7)
    grid-column 5 / span 8
    background linear-gradient(258.96deg, #121435 0%, #030419 100%)
    color white
    border-radius $border-radius-5
    transition all .25s ease-out
    .meter
      position absolute
      top 0
      left 0
      bottom 0
      width var(--progress-bar-width, 0)
      background var(--progress-bar-background-color, linear-gradient(95.47deg, #121435 0%, #282B53 100%))
      border-radius $border-radius-5
      transition opacity .15s
    .details
      position relative
      grid-template-columns auto 1fr
      gap var(--spacing-6)
      padding var(--spacing-8)
      grid-column-start 2
      display grid
      grid-auto-flow column
      align-items center
      text-align left
      justify-content space-between
      .icon
        width 3rem
        height 3rem
        fill var(--white)
        opacity 0.50
        transition opacity .25s, transform .15s ease-out
      .title
        transition transform .15s ease-out
      .subtitle
        color var(--white-70)
        transition color .15s, transform .15s ease-out
      .indicator
        display flex
        flex-direction row
        align-items flex-end
        background rgba(0, 0, 0, 0)
      .progress__wrapper
        display flex
        flex-direction column
        align-items flex-end
        .progress
          display flex
          align-items center
    &:hover
      transform translateY(-2px)
      .meter
        opacity 0.9
      .details
        .icon
          opacity 0.75
          transform translate(-2px,-2px)
        .title
          transform translateY(-3px)
        .subtitle
          color var(--white)
          transform translateY(-2px)
      &:active
        transform none
        transition-duration 0s
  .section-proposal
    grid-column 1 / 5
    margin-top var(--spacing-10)
    &__title
      margin-top var(--spacing-7)
      grid-column 1 / span 4
      color var(--white)

.proposal-card
  position relative
  margin-top var(--spacing-7)
  grid-column 5 / span 8

.proposal-item
  background linear-gradient(89.41deg, #99DAFF -0.22%, #FFD1FD 99.78%)
  box-shadow 0 0 1px rgba(0,0,0,.07), 0 8px 16px rgba(0,0,0,.05), 0 20px 44px rgba(0,3,66,.12)
  border-radius var(--spacing-4)
  padding var(--spacing-7)
  backface-visibility hidden
  transform translateZ(0)
  transition all .25s cubic-bezier(.165,.84,.44,1)
  cursor pointer
  position relative
  width 23.3125rem
  margin-top var(--spacing-10)
  grid-column 1 / span 12
  display block
  text-align left
  &__icon
    display flex
    justify-content flex-end
    color var(--gray-600)
    transition color .1s ease-out, transform .25s ease-out
  &__title
    color var(--gray-50)
    transition color .1s ease-out
    padding-right 2rem
    margin-top var(--spacing-8)
  &__date
    margin-top var(--spacing-4)
    color var(--trans-gray-400)
  &:hover
    .articles-item__title,
    .articles-item__icon
      color var(--white)
    .articles-item__icon
      transform translate(3px, -3px)

@media screen and (max-width: 1024px)
  .section .section-header
      grid-column 1 / span 12

  .section-roadmap
    .section-title
      grid-column 1 / span 12
      text-align left
    .section-row, .proposal-card, .section-milestones, .section-proposal
      grid-column 1 / span 12

@media screen and (max-width: 767px)
  .section-roadmap
    .section-title
      margin-bottom var(--spacing-5)
    .section-proposal
      margin-top var(--spacing-8)

@media screen and (max-width: 576px)
  .section-roadmap
    .section-milestones
      &__cta
        margin-top var(--spacing-3)
    .section-row
      margin-top var(--spacing-5)
      &,
      .meter
        border-radius $border-radius-4
      .details
        grid-template-columns unset
        grid-auto-flow unset

@media screen and (max-width: 414px)
  .meter
    width 100%
</style>
