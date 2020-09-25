<template>
  <div id="roadmap" class="section section-roadmap">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="section-header tm-rf0 tm-medium tm-lh-title tm-overline">
          Roadmap
        </div>
        <div class="section-title tm-rf6 tm-bold tm-lh-title">
          {{ progressTotal }}% complete
        </div>
        <div class="section-milestones">
          <div class="section-milestones__title tm-rf3 tm-bold tm-lh-title">
            Milestones
          </div>
          <div class="section-milestones__cta tm-rf1 tm-lh-copy">
            <a
              href="https://github.com/orgs/cosmosdevs/projects/1"
              target="_blank"
              rel="noreferrer noopener"
            >
              View on GitHub &#8594;
            </a>
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
        <div class="section-status">
          <div class="section-status__title tm-rf3 tm-bold tm-lh-title">
            Status updates
          </div>
        </div>
        <div class="section-list">
          <a
            v-for="item in currentUpdates"
            :key="updatesList[item - 1].title"
            :href="updatesList[item - 1].url"
            target="_blank"
            rel="noreferrer noopener"
            class="section-list__item"
          >
            <div class="section-list__item__title tm-rf1 tm-bold tm-lh-title">
              {{ updatesList[item - 1].title }}
            </div>
            <div class="section-list__item__date tm-rf1 tm-lh-title">
              {{ updatesList[item - 1].date }} &#8594;
            </div>
          </a>
          <div class="section-list__bottom">
            <div
              v-if="currentUpdates != updatesList.length"
              class="section-list__bottom__cta tm-rf1 tm-lh-copy"
              role="button"
              @click="currentUpdates = updatesList.length"
            >
              View all updates
            </div>
            <div
              v-else
              class="section-list__bottom__cta tm-rf1 tm-lh-copy"
              role="button"
              @click="currentUpdates = 3"
            >
              View less
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import IconIbc from '~/components/IconIbc.vue'
import IconSdk from '~/components/IconSdk.vue'
import IconCore from '~/components/IconCore.vue'

export default {
  components: {
    IconIbc,
    IconSdk,
    IconCore,
  },
  data() {
    return {
      milestoneList: [],
      currentUpdates: 3,
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
      updates: [
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week1.md',
          title: 'Week 1 status',
          date: 'July 02',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week2.md',
          title: 'Week 2 status',
          date: 'July 13',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week3.md',
          title: 'Week 3 status',
          date: 'July 20',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week4.md',
          title: 'Week 4 status',
          date: 'July 27',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week5.md',
          title: 'Week 5 status',
          date: 'August 07',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week6.md',
          title: 'Week 6 status',
          date: 'August 12',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week7.md',
          title: 'Week 7 status',
          date: 'August 19',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week8.md',
          title: 'Week 8 status',
          date: 'August 26',
        },
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/week-9/week9.md',
          title: 'Week 9 status',
          date: 'September 09',
        },
        {
          url:
            'https://github.com/cosmosdevs/stargate/blob/master/week10_11.md',
          title: 'Week 10 & 11 status',
          date: 'September 16',
        },
      ],
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
    updatesList() {
      return this.updates.slice().reverse()
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
.section-roadmap
  .section-header
    grid-column 6 / span 7
  .section-title
    margin-top 3rem
    margin-bottom 3rem
    text-align right
    grid-column 1 / span 12
  .section-milestones
    grid-column 1 / 5
    grid-row 3 / 6
    &__title
      margin-top 2rem
      color var(--white)
    &__cta
      margin-top 1rem
      a
        display inline-block
        border-radius 0.375rem
        padding 1.25rem 0
  .section-row
    position relative
    margin-top 2rem
    grid-column 5 / span 8
    background linear-gradient(258.96deg, #121435 0%, #030419 100%)
    color white
    border-radius 1.25rem
    transition all .25s ease-out
    .meter
      position absolute
      top 0
      left 0
      bottom 0
      width var(--progress-bar-width, 0)
      background var(--progress-bar-background-color, linear-gradient(95.47deg, #121435 0%, #282B53 100%))
      border-radius 1.25rem
      transition opacity .15s
    .details
      position relative
      grid-template-columns auto 1fr
      gap 1.5rem
      padding 3rem
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
  .section-status
    grid-column 1 / 5
    margin-top 6rem
    &__title
      margin-top 2rem
      grid-column 1 / span 4
      color var(--white)
  .section-list
    color var(--white)
    margin-top 6rem
    grid-column 6 / span 7
    &__item
      padding-top 1.875rem
      padding-bottom 1.875rem
      display flex
      flex-direction row
      justify-content space-between
      border-bottom 1px solid #282B53
      &__title
        color var(--primary-900)
        transition color 0.1s ease-out
      &__date
        color var(--gray-600)
        transition color 0.1s ease-out, transform 0.15s ease-out
      &:hover .section-list__item__title,
      &:hover .section-list__item__date
        color var(--white)
      &:hover .section-list__item__date
        transform translateX(3px)
    &__bottom
      text-align center
      padding 1.25rem 0
      &__cta
        color var(--link)
        font-weight 700
        cursor pointer

@media screen and (max-width: 1024px)
  .section .section-header
      grid-column 1 / span 12

  .section-roadmap
    .section-title
      grid-column 1 / span 12
      text-align left
    .section-row
      grid-column 1 / span 12
    .section-milestones
      grid-column 1 / 12
    .section-status
      grid-column 1 / 12
    .section-list
      margin-top 1.5rem
      grid-column 1 / span 12

@media screen and (max-width: 767px)
  .section-roadmap
    .section-title
      margin-bottom 1rem
    .section-status
      margin-top 3rem

@media screen and (max-width: 576px)
  .section-roadmap
    .section-milestones
      &__cta
        margin-top 0.5rem
        a
          padding 0.8125rem 0
    .section-row
      margin-top 1rem
      &,
      .meter
        border-radius 0.75rem
      .details
        padding 1.5rem
        grid-template-columns unset
        grid-auto-flow unset
  .section-roadmap
    .section-list__item
      padding-top 1.25rem
      padding-bottom 1.25rem

@media screen and (max-width: 414px)
  .section-roadmap .section-row .meter
    width 100%
</style>
