<template>
  <main>
    <section-chain></section-chain>
    <section-endpoints></section-endpoints>
    <readiness-banner />
    <section-documentation />
    <section-testnets />
    <section-explorer :data="explorers"></section-explorer>
    <bug-bounty-banner />
    <section-form />
  </main>
</template>

<script>
export default {
  data() {
    return {
      explorers: [
        {
          name: 'Big Dipper',
          url: 'https://stargate.simulation.bigdipper.live/',
        },
      ],
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
        {
          url: 'https://github.com/cosmosdevs/stargate/blob/master/week12.md',
          title: 'Week 12 status',
          date: 'September 23',
        },
      ],
    }
  },
  computed: {
    updatesList() {
      return this.updates.slice().reverse()
    },
  },
  methods: {},
}
</script>

<style lang="stylus" scoped>
.section-title
  margin-top var(--spacing-10)
  margin-bottom var(--spacing-9)
  text-align right
  grid-column 1 / span 12
.section-row
  position relative
  margin-top var(--spacing-7)
  grid-column 5 / span 8
  background linear-gradient(258.96deg, #121435 0%, #030419 100%)
  color white
  border-radius $border-radius-5
  transition all .25s ease-out
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

@media screen and (max-width: 1024px)
  .section-title
    grid-column 1 / span 12
    text-align left
  .section-row
    grid-column 1 / span 12

@media screen and (max-width: 767px)
  .section-title
    margin-bottom var(--spacing-5)

@media screen and (max-width: 576px)
  .section-row
    margin-top var(--spacing-5)
    &,
    .details
      grid-template-columns unset
      grid-auto-flow unset
</style>
