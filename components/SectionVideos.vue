<template>
  <div id="videos" class="section section-videos">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="section-header">Videos</div>
        <div class="frame">
          <iframe
            src="https://www.youtube.com/embed/mlq5GzQTIAM?autoplay=0&controls=1&rel=0&modestbranding=1&fs=1&enablejsapi=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div class="text">
          <div class="text__caption">June 23</div>
          <div class="text__title">Stargate Q&amp;A with Zaki Manian</div>
          <div class="text__cta">
            <a
              href="https://www.youtube.com/watch?v=mlq5GzQTIAM"
              target="_blank"
              rel="noreferrer noopener"
            >
              Watch on YouTube &#8594;
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.section-videos
  padding-top 0
  padding-bottom 0
  .section-header
    grid-column 6 / span 7
    margin-bottom 4rem
  .frame
    background-color rgb(22, 25, 49)
    border-radius 0.5rem
    padding-top 1.5625rem
    padding-bottom 56.25% /* 16:9 */
    height 0
    position relative
    grid-column 1 / span 8
    iframe
      border-radius 0.5rem
      top 0
      left 0
      width 100%
      height 100%
      position absolute
  .text
    text-align left
    width 373px
    grid-column 9 / span 4
    position relative
    &__caption
      font-size 16px
      line-height 1.625
      color var(--blue-gray)
    &__title
      margin-top 8px
      font-weight bold
      font-size 2rem
      line-height 125%
      letter-spacing -0.025em
      color #FFFFFF
    &__cta
      display flex
      align-items center
      text-align center
      position absolute
      bottom 0
      right 0
      a
        font-weight bold
        font-size 1rem
        line-height 137.5%
        padding 0.8125rem 0
        border-radius 0.5rem

@media screen and (max-width: 1438px)
  .section-videos
    .container
      .frame
        grid-column 1 / 8
      .text
        grid-column 8 / span 4


@media screen and (max-width: 1024px)
  // .section .section-header
  //     grid-column 1 / span 12

  .section-videos
    .container
      .frame
        grid-column 1/span 12
      .text
        margin-top 2rem
        grid-column 1/span 12
        &__cta
          position unset
          text-align left

@media screen and (max-width: 576px)
  .section-videos
    .section-header
      margin-bottom 2rem
    .container .text
      width auto
      margin-top 0.5rem
      &__caption
        font-size 0.8125rem
        line-height 1.384
        letter-spacing 0.001em
      &__title
        font-size 1.1875rem
        line-height 1.263
        letter-spacing -0.01em
</style>
