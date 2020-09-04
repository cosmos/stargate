<template>
  <div class="pa8">
    <h5>FUNCTIONAL</h5>
    <div class="tm-rf1 tm-lh-title fw6 tracked ttu">Overline</div>
    <div class="tm-rf3">Default</div>
    <div class="tm-rf3 tm-lh-title">Title line-height</div>
    <div class="tm-rf3 tm-lh-copy">Paragraph line-height</div>
    <div class="tm-rf3 tm-lh-title tm-bold">Title line-height bold</div>

    <h5>CONSOLIDATED</h5>
    <div class="overline1">Overline</div>
    <div class="default3">Default</div>
    <div class="subtitle3">Title line-height</div>
    <div class="paragraph3">Paragraph line-height</div>
    <div class="heading3">Title line-height bold</div>

    <h5>HYBRID</h5>
    <div class="tm-rf1 tm-lh-title overline">Overline</div>
    <div class="tm-rf3">Default</div>
    <div class="tm-rf3 tm-lh-title">Title line-height</div>
    <div class="tm-rf3 tm-lh-copy">Paragraph line-height</div>
    <div class="tm-rf3 tm-lh-title tm-bold">Title line-height bold</div>
  </div>
</template>

<style lang="stylus" scoped>
// FUNCTIONAL
// DESIGN ----------- DEVELOPMENT
// Overline 1 ------> .rf1 .lh-title .fw6 .tracked .ttu
// Overline 0 ------> .rf0 .lh-title .fw6 .tracked .ttu
// Overline -1 -----> .rf-1 .lh-title .fw6 .tracked .ttu
.fw6
  font-weight 600
.tracked
  letter-spacing 0.08em
.ttu
  text-transform uppercase

// CONSOLIDATED
.default3
  font-size var(--r-font-size-3)
  letter-spacing var(--letter-spacing-n-3)
  font-weight var(--font-weight-n-3)
.subtitle3
  @extends .default3
  line-height var(--line-height-title-3)
.paragraph3
  @extends .default3
  line-height var(--line-height-copy-3)
.heading3
  font-size var(--r-font-size-3)
  letter-spacing var(--letter-spacing-b-3)
  font-weight var(--font-weight-b-3)
  line-height var(--line-height-title-3)
.overline1
  font-size var(--r-font-size-1)
  line-height var(--line-height-title-1)
  letter-spacing 0.08em
  font-weight 600
  text-transform uppercase

// HYBRID – Let's go with this!
.overline
  letter-spacing 0.08em
  font-weight 600
  text-transform uppercase
</style>
