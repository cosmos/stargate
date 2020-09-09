<template>
  <div class="tm-section-container">
    <h5>FUNCTIONAL</h5>
    <div class="box pa7">
      <div class="tm-rf1">Top text</div>
      <div class="tm-rf1 mt5">Bottom text</div>
    </div>

    <h5>SCOPED</h5>
    <div class="box scoped-box">
      <div class="tm-rf1">Top text</div>
      <div class="tm-rf1 text-bottom">Bottom text</div>
    </div>

    <h5>MANUAL</h5>
    <div class="box manual-box">
      <div class="tm-rf1">Top text</div>
      <div class="tm-rf1 text-bottom">Bottom text</div>
    </div>

    <h5>Measures</h5>
    <p class="measure-example-wide">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
      tortor et pellentesque lobortis. Sed aliquam eros ex, vitae gravida dolor
      euismod non. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Nam nisl arcu, porttitor a neque in, gravida rhoncus justo. Aliquam vitae
      leo tincidunt eros vestibulum pellentesque. Proin tristique libero nec
      libero sollicitudin, quis scelerisque velit hendrerit. Integer scelerisque
      urna malesuada pretium convallis.
    </p>
    <p class="measure-example-medium">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
      tortor et pellentesque lobortis. Sed aliquam eros ex, vitae gravida dolor
      euismod non. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Nam nisl arcu, porttitor a neque in, gravida rhoncus justo. Aliquam vitae
      leo tincidunt eros vestibulum pellentesque. Proin tristique libero nec
      libero sollicitudin, quis scelerisque velit hendrerit. Integer scelerisque
      urna malesuada pretium convallis.
    </p>
    <p class="measure-example-narrow">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
      tortor et pellentesque lobortis. Sed aliquam eros ex, vitae gravida dolor
      euismod non. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Nam nisl arcu, porttitor a neque in, gravida rhoncus justo. Aliquam vitae
      leo tincidunt eros vestibulum pellentesque. Proin tristique libero nec
      libero sollicitudin, quis scelerisque velit hendrerit. Integer scelerisque
      urna malesuada pretium convallis.
    </p>
    <div class="measure-example-narrower">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
      tortor et pellentesque lobortis. Sed aliquam eros ex, vitae gravida dolor
      euismod non. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Nam nisl arcu, porttitor a neque in, gravida rhoncus justo. Aliquam vitae
      leo tincidunt eros vestibulum pellentesque. Proin tristique libero nec
      libero sollicitudin, quis scelerisque velit hendrerit. Integer scelerisque
      urna malesuada pretium convallis.
    </div>
    <div class="box content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
      tortor et pellentesque lobortis. Sed aliquam eros ex, vitae gravida dolor
      euismod non. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Nam nisl arcu, porttitor a neque in, gravida rhoncus justo. Aliquam vitae
      leo tincidunt eros vestibulum pellentesque. Proin tristique libero nec
      libero sollicitudin, quis scelerisque velit hendrerit. Integer scelerisque
      urna malesuada pretium convallis.
    </div>
    <p>Outside of content max-widths</p>
    <div class="box content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
      tortor et pellentesque lobortis. Sed aliquam eros ex, vitae gravida dolor
      euismod non. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Nam nisl arcu, porttitor a neque in, gravida rhoncus justo. Aliquam vitae
      leo tincidunt eros vestibulum pellentesque. Proin tristique libero nec
      libero sollicitudin, quis scelerisque velit hendrerit. Integer scelerisque
      urna malesuada pretium convallis.
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.box
  background rgba(255,255,255,0.2)

// FUNCTIONAL
// DESIGN ----------- DEVELOPMENT
// ~2rem -----------> .pa7
.pa7
  padding var(--spacing-7)
.mt5
  margin-top var(--spacing-5)

// SCOPED
.scoped-box
  padding var(--spacing-7)
  .text-bottom
    margin-top var(--spacing-5)

.measure-example-wide
  max-width $measure-4
.measure-example-medium
  max-width $measure-3
.measure-example-narrow
  max-width $measure-2
.measure-example-narrower
  max-width $measure-1

.content
  padding var(--spacing-7)
  max-width $max-width-7
  margin 0 auto

// MANUAL
.manual-box
  padding 2rem
  .text-bottom
    margin-top 1rem
</style>
