<template>
  <div class="section">
    <div class="tm-section-container section-container">
      <div class="section-banner">
        <a
          href="https://airtable.com/shrEr1bQD6COG9WH0"
          target="_blank"
          rel="noreferrer"
        >
          <div class="content">
            <div class="left">
              <div class="tm-rf3 tm-bold tm-lh-title">Joined the testnet?</div>
            </div>
            <div class="right">
              <div class="tm-rf2 tm-lh-copy">
                Confirm your readiness &#8594;
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="stylus" scoped>
/deep/
  a[href]
    color inherit

.section-banner
  background url('~static/bg/upgrade.jpg'), linear-gradient(270deg, #151042 0%, rgba(21, 16, 66, 0) 6.6%, rgba(21, 16, 66, 0) 87.49%, #151042 100%), linear-gradient(252.44deg, rgba(230, 68, 248, 0.4) 0%, rgba(80, 100, 251, 0.4) 100%)
  background-size cover
  background-repeat no-repeat
  background-position center center
  border-radius $border-radius-4
  hover-raise(-3px)

.content
  padding 4rem
  display grid
  grid-template-columns 50% 50%
  grid-template-rows 1fr
  align-items center
  justify-content space-between
  min-height 16.8125rem
  color var(--white)

.right
  text-align right

@media $breakpoint-xl-max
  .content
    grid-template-columns auto
    justify-content center

  .right
    justify-content flex-start
    margin-top 2rem

@media $breakpoint-medium-max
  .content
    padding 2rem
</style>
