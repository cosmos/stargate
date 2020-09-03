<template>
  <main>
    <div class="row">
      <div class="colhead rf-1 lh-solid">Step</div>
      <div class="colhead rf-1 lh-solid">Light</div>
      <div class="colhead rf-1 lh-solid">Regular</div>
      <div class="colhead rf-1 lh-solid">Medium</div>
      <div class="colhead rf-1 lh-solid">Semi Bold</div>
      <div class="colhead rf-1 lh-solid">Bold</div>
      <div class="colhead rf-1 lh-solid">Extra Bold</div>
      <div class="colhead rf-1 lh-solid">Black</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead rf-1 lh-solid">7</div>
      <div class="text rf7 b lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead rf-1 lh-solid">6</div>
      <div class="text rf6 b lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead rf-1 lh-solid">5</div>
      <div class="text rf5 b lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead rf-1 lh-solid">4</div>
      <div class="text rf4 b lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead rf-1 lh-solid">3</div>
      <div class="text rf3 lh-title">Subtitle</div>
      <div class="text rf3 b lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead rf-1 lh-solid">2</div>
      <div class="text rf2 lh-title">Subtitle</div>
      <div class="text rf2 b lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead rf-1 lh-solid">1</div>
      <div class="text rf1 lh-title">Subtitle</div>
      <div class="text rf1 b lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead rf-1 lh-solid">0</div>
      <div class="text rf0 lh-title">Subtitle</div>
      <div class="text rf0 b lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead rf-1 lh-solid">-1</div>
      <div class="text rf-1 lh-title">Subtitle</div>
      <div class="text rf-1 b lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead rf-1 lh-solid">3</div>
      <div class="text rf3 lh-copy">Paragraph</div>
      <div class="text rf3 b lh-copy">Paragraph</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead rf-1 lh-solid">2</div>
      <div class="text rf2 lh-copy">Paragraph</div>
      <div class="text rf2 b lh-copy">Paragraph</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead rf-1 lh-solid">1</div>
      <div class="text rf1 lh-copy">Paragraph</div>
      <div class="text rf1 b lh-copy">Paragraph</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead rf-1 lh-solid">0</div>
      <div class="text rf0 lh-copy">Paragraph</div>
      <div class="text rf0 b lh-copy">Paragraph</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead rf-1 lh-solid">-1</div>
      <div class="text rf-1 lh-copy">Paragraph</div>
      <div class="text rf-1 b lh-copy">Paragraph</div>
    </div>
    <div class="row">
      <div class="rowhead rf-1 lh-solid">1</div>
      <div class="text rf1 lh-title ttu fw6 tracked-mega">Overline</div>
    </div>
    <div class="row">
      <div class="rowhead rf-1 lh-solid">0</div>
      <div class="text rf0 lh-title ttu fw6 tracked-mega">Overline</div>
    </div>
    <div class="row">
      <div class="rowhead rf-1 lh-solid">-1</div>
      <div class="text rf-1 lh-title ttu fw6 tracked-mega">Overline</div>
    </div>
    <div class="row">
      <div class="rowhead rf-1 lh-solid">2</div>
      <code class="rf2 lh-copy">Code</code>
      <code class="rf2 fw7 lh-copy">Code</code>
    </div>
    <div class="row">
      <div class="rowhead rf-1 lh-solid">1</div>
      <code class="rf1 lh-copy">Code</code>
      <code class="rf1 fw7 lh-copy">Code</code>
    </div>
    <div class="row">
      <div class="rowhead rf-1 lh-solid">0</div>
      <code class="rf0 lh-copy">Code</code>
      <code class="rf0 fw7 lh-copy">Code</code>
    </div>
    <div class="row">
      <div class="rowhead rf-1 lh-solid">-1</div>
      <code class="rf-1 lh-copy">Code</code>
      <code class="rf-1 fw7 lh-copy">Code</code>
    </div>
  </main>
</template>

<style lang="stylus" scoped>

main
  padding 5rem 1.5rem

.row
  width 100%
  display grid
  grid-template-columns repeat(10, 1fr)
  align-items baseline

.rowhead,
.colhead
  grid-column span 1
  position relative
  color silver
.colhead
  + .colhead:before
    content ""
    border-left 1px dotted rgba(255, 255  255, 0.5);
    height 200vh
    top 0
    position absolute

.text,
code
  white-space nowrap
  position relative
  // overflow hidden
  &:before
    content ""
    border-left 1px solid salmon
    height 100%
    top 0
    position absolute

.text
  grid-column 2/span 3
  &:last-child
    grid-column 5/span 4

code
  grid-column 2/span 4
  &:last-child
    grid-column 6/span 4

for size in -1...6
  .var-weight .rf{size}:not(.b):not(.rowhead)
    // weight - starting col (300 weight) / 3 colspan * %
    transform: translateX(((356 - size * 24) - 300)/3 * 1%)

for size in -1...12
  .var-weight .rf{size}.b
    // weight - starting col (600 weight) / 4 colspan * %
    transform: translateX(((690 + size * 30) - 600)/4 * 1%)
</style>
