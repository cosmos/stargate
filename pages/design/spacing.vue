<template>
  <main>
    <div class="tm-section-container">
      <h2 class="tm-rf3 tm-lh-title tm-bold">Spacing scale</h2>
      <p>
        <code>var(--spacing-*)</code>
      </p>
      <div class="scale scale__spacing">
        <div class="box step-1">1</div>
        <div class="box step-2">2</div>
        <div class="box step-3">3</div>
        <div class="box step-4">4</div>
        <div class="box step-5">5</div>
        <div class="box step-6">6</div>
        <div class="box step-7">7</div>
        <div class="box step-8">8</div>
        <div class="box step-9">9</div>
        <div class="box step-10">10</div>
        <div class="box step-11">11</div>
        <div class="box step-12">12</div>
        <div class="box step-13">13</div>
      </div>
    </div>
    <div class="tm-section-container">
      <h2 class="tm-rf3 tm-lh-title tm-bold">Measures</h2>
      <div class="scale scale__measures">
        <div class="box tm-measure-narrower">Narrower</div>
        <div class="box tm-measure-narrow">Narrow</div>
        <div class="box tm-measure">Normal</div>
        <div class="box tm-measure-wide">Wide</div>
      </div>
      <p class="tm-rf0 tm-lh-copy tm-measure-wide">
        <code>.tm-measure-wide</code><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
        tortor et pellentesque lobortis. Sed aliquam eros ex, vitae gravida
        dolor euismod non. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Nam nisl arcu, porttitor a neque in, gravida rhoncus justo.
        Aliquam vitae leo tincidunt eros vestibulum pellentesque. Proin
        tristique libero nec libero sollicitudin, quis scelerisque velit
        hendrerit. Integer scelerisque urna malesuada pretium convallis.
      </p>
      <p class="tm-measure">
        <code>.tm-measure-medium</code><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
        tortor et pellentesque lobortis. Sed aliquam eros ex, vitae gravida
        dolor euismod non. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Nam nisl arcu, porttitor a neque in, gravida rhoncus justo.
        Aliquam vitae leo tincidunt eros vestibulum pellentesque. Proin
        tristique libero nec libero sollicitudin, quis scelerisque velit
        hendrerit. Integer scelerisque urna malesuada pretium convallis.
      </p>
      <p class="tm-rf0 tm-lh-copy tm-measure-narrow">
        <code>.tm-measure-narrow</code><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
        tortor et pellentesque lobortis. Sed aliquam eros ex, vitae gravida
        dolor euismod non. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Nam nisl arcu, porttitor a neque in, gravida rhoncus justo.
        Aliquam vitae leo tincidunt eros vestibulum pellentesque. Proin
        tristique libero nec libero sollicitudin, quis scelerisque velit
        hendrerit. Integer scelerisque urna malesuada pretium convallis.
      </p>
      <p class="tm-rf0 tm-lh-copy tm-measure-narrower">
        <code>.tm-measure-narrower</code><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
        tortor et pellentesque lobortis. Sed aliquam eros ex, vitae gravida
        dolor euismod non. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Nam nisl arcu, porttitor a neque in, gravida rhoncus justo.
        Aliquam vitae leo tincidunt eros vestibulum pellentesque. Proin
        tristique libero nec libero sollicitudin, quis scelerisque velit
        hendrerit. Integer scelerisque urna malesuada pretium convallis.
      </p>
    </div>
    <div class="tm-section-container">
      <h2 class="tm-rf3 tm-lh-title tm-bold">Max-widths</h2>
      <p>
        <code>max-width: $max-width['*']</code>
      </p>
      <div class="scale scale__max-widths">
        <div class="box step-1">1</div>
        <div class="box step-2">2</div>
        <div class="box step-3">3</div>
        <div class="box step-4">4</div>
        <div class="box step-5">5</div>
        <div class="box step-6">6</div>
        <div class="box step-7">7</div>
        <div class="box step-8">8</div>
        <div class="box step-9">9</div>
        <div class="box step-10">10</div>
        <div class="box step-11">11</div>
      </div>
      <p>Example:</p>
      <div class="box box__mw">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
        tortor et pellentesque lobortis. Sed aliquam eros ex, vitae gravida
        dolor euismod non. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Nam nisl arcu, porttitor a neque in, gravida rhoncus justo.
        Aliquam vitae leo tincidunt eros vestibulum pellentesque. Proin
        tristique libero nec libero sollicitudin, quis scelerisque velit
        hendrerit. Integer scelerisque urna malesuada pretium convallis.
      </div>
      <p>Outside of content max-widths</p>
      <div class="box box__mw">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
        tortor et pellentesque lobortis. Sed aliquam eros ex, vitae gravida
        dolor euismod non. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Nam nisl arcu, porttitor a neque in, gravida rhoncus justo.
        Aliquam vitae leo tincidunt eros vestibulum pellentesque. Proin
        tristique libero nec libero sollicitudin, quis scelerisque velit
        hendrerit. Integer scelerisque urna malesuada pretium convallis.
      </div>
    </div>
    <div class="tm-section-container">
      <h2 class="tm-rf3 tm-lh-title tm-bold">Comparing approaches</h2>
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
    </div>
  </main>
</template>

<style lang="stylus" scoped>
.box
  border 2px solid cyan

.scale
  .box
    padding var(--spacing-1) 0
    white-space nowrap
    background darkcyan
    border-width 0
    border-bottom-width 1px
    text-indent var(--spacing-2)
    color white
  &__spacing
    for $step in 1...(length($spacing) + 1)
      .step-{$step}
        width var('--spacing-%s' % $step)
  &__max-widths
    for $step in 1...(length($max-width) + 1)
      .step-{$step}
        width $max-width[''+$step]



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


.box__mw
  padding var(--spacing-7)
  max-width: $max-width['7']
  margin 0 auto

// MANUAL
.manual-box
  padding 2rem
  .text-bottom
    margin-top 1rem
</style>
