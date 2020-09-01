<template>
  <div>
    <div class="tabs">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ 'is-active': tab.isActive }"
        >
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { tabs: [] }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.tabs
  user-select none
  align-items stretch
  display flex
  font-size 1rem
  justify-content space-between

.tabs ul
  align-items center
  display flex
  flex-direction row
  flex-shrink 0
  padding 0
  margin 0

.tabs li
  display block

.tabs a
  align-items center
  color #989BB9
  display flex
  justify-content center
  margin-bottom -1px
  padding .5em 1em
  vertical-align top

.is-active
  font-weight bold
  font-size 1.1875rem
  line-height 126.3%
  letter-spacing -0.005em
  color #ECEDF7

.is-active a
  border-bottom 2px solid #4251FA

.tabs-details
  border-bottom 1px solid #282B53
  padding-bottom 3rem
</style>
