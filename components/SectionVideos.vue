<template>
  <div class="section section-videos">
    <div class="section-container">
      <div class="container">
        <div class="section-header tm-rf3 tm-bold tm-lh-title">Videos</div>
        <div class="frame">
          <iframe
            title="Stargate video"
            src="https://www.youtube.com/embed/mlq5GzQTIAM?autoplay=0&controls=1&rel=0&modestbranding=1&fs=1&enablejsapi=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div class="text">
          <div class="text__caption tm-rf-1 tm-lh-title">June 23</div>
          <div class="text__title tm-rf2 tm-bold tm-lh-title">
            Stargate Q&amp;A with Zaki Manian
          </div>
          <tm-button
            to-link="external"
            href="https://www.youtube.com/watch?v=mlq5GzQTIAM"
            variant="text"
            color="var(--link)"
            class="text__cta"
          >
            Watch on YouTube &#8594;
          </tm-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
/deep/
.section-header
  border none
  color inherit

.section-videos
  padding-top 0
  padding-bottom 0
  .section-header
    grid-column 1 / span 12
    margin-bottom var(--spacing-9)
    color var(--white)
  .frame
    background-color rgb(22, 25, 49)
    border-radius $border-radius-3
    padding-bottom 56.25% /* 16:9 */
    height 0
    position relative
    grid-column 1/span 12
    iframe
      border-radius $border-radius-3
      top 0
      left 0
      width 100%
      height 100%
      position absolute
  .text
    display block
    margin-top var(--spacing-7)
    grid-column 1/span 12
    position relative
    &__caption
      color var(--gray-600)
    &__title
      margin-top var(--spacing-4)
      color var(--white)
    &__cta
      margin-top var(--spacing-3)

@media $breakpoint-xxl
  .section-videos
    .container
      .frame
        grid-column 1 / span 12

@media $breakpoint-large
  .section-header
    grid-column 2 / span 12

  .section-videos
    .container
      .frame
        grid-column 1 / 8
      .text
        grid-column 8 / span 5
        margin-top 0
        display flex
        flex-direction column
        &__cta
          align-self flex-end
          margin-top auto

@media $breakpoint-medium
  .section-videos
    .section-header
      grid-column 2 / span 12

@media $breakpoint-xsmall-only
  .section-videos
    .container .text
      margin-top var(--spacing-6)

    .section-header
      grid-column 1 / span 12
</style>
