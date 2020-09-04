<template>
  <main>
    <div class="row">
      <div class="colhead tm-rf-1 tm-lh-solid">Step</div>
      <div class="colhead tm-rf-1 tm-lh-solid">Light</div>
      <div class="colhead tm-rf-1 tm-lh-solid">Regular</div>
      <div class="colhead tm-rf-1 tm-lh-solid">Medium</div>
      <div class="colhead tm-rf-1 tm-lh-solid">Semi Bold</div>
      <div class="colhead tm-rf-1 tm-lh-solid">Bold</div>
      <div class="colhead tm-rf-1 tm-lh-solid">Extra Bold</div>
      <div class="colhead tm-rf-1 tm-lh-solid">Black</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead tm-rf-1 tm-lh-solid">7</div>
      <div class="text tm-rf7 tm-bold tm-lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead tm-rf-1 tm-lh-solid">6</div>
      <div class="text tm-rf6 tm-bold tm-lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead tm-rf-1 tm-lh-solid">5</div>
      <div class="text tm-rf5 tm-bold tm-lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead tm-rf-1 tm-lh-solid">4</div>
      <div class="text tm-rf4 tm-bold tm-lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead tm-rf-1 tm-lh-solid">3</div>
      <div class="text tm-rf3 tm-lh-title">Subtitle</div>
      <div class="text tm-rf3 tm-bold tm-lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead tm-rf-1 tm-lh-solid">2</div>
      <div class="text tm-rf2 tm-lh-title">Subtitle</div>
      <div class="text tm-rf2 tm-bold tm-lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead tm-rf-1 tm-lh-solid">1</div>
      <div class="text tm-rf1 tm-lh-title">Subtitle</div>
      <div class="text tm-rf1 tm-bold tm-lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead tm-rf-1 tm-lh-solid">0</div>
      <div class="text tm-rf0 tm-lh-title">Subtitle</div>
      <div class="text tm-rf0 tm-bold tm-lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead tm-rf-1 tm-lh-solid">-1</div>
      <div class="text tm-rf-1 tm-lh-title">Subtitle</div>
      <div class="text tm-rf-1 tm-bold tm-lh-title">Heading</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead tm-rf-1 tm-lh-solid">3</div>
      <div class="text tm-rf3 tm-lh-copy">Paragraph</div>
      <div class="text tm-rf3 tm-bold tm-lh-copy">Paragraph</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead tm-rf-1 tm-lh-solid">2</div>
      <div class="text tm-rf2 tm-lh-copy">Paragraph</div>
      <div class="text tm-rf2 tm-bold tm-lh-copy">Paragraph</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead tm-rf-1 tm-lh-solid">1</div>
      <div class="text tm-rf1 tm-lh-copy">Paragraph</div>
      <div class="text tm-rf1 tm-bold tm-lh-copy">Paragraph</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead tm-rf-1 tm-lh-solid">0</div>
      <div class="text tm-rf0 tm-lh-copy">Paragraph</div>
      <div class="text tm-rf0 tm-bold tm-lh-copy">Paragraph</div>
    </div>
    <div class="row var-weight">
      <div class="rowhead tm-rf-1 tm-lh-solid">-1</div>
      <div class="text tm-rf-1 tm-lh-copy">Paragraph</div>
      <div class="text tm-rf-1 tm-bold tm-lh-copy">Paragraph</div>
    </div>
    <div class="row">
      <div class="rowhead tm-rf-1 tm-lh-solid">1</div>
      <div class="text tm-rf1 tm-lh-title tm-overline">Overline</div>
    </div>
    <div class="row">
      <div class="rowhead tm-rf-1 tm-lh-solid">0</div>
      <div class="text tm-rf0 tm-lh-title tm-overline">Overline</div>
    </div>
    <div class="row">
      <div class="rowhead tm-rf-1 tm-lh-solid">-1</div>
      <div class="text tm-rf-1 tm-lh-title tm-overline">Overline</div>
    </div>
    <div class="row">
      <div class="rowhead tm-rf-1 tm-lh-solid">2</div>
      <code class="tm-rf2 tm-lh-copy">Code</code>
      <code class="tm-rf2 tm-bold tm-lh-copy">Code</code>
    </div>
    <div class="row">
      <div class="rowhead tm-rf-1 tm-lh-solid">1</div>
      <code class="tm-rf1 tm-lh-copy">Code</code>
      <code class="tm-rf1 tm-bold tm-lh-copy">Code</code>
    </div>
    <div class="row">
      <div class="rowhead tm-rf-1 tm-lh-solid">0</div>
      <code class="tm-rf0 tm-lh-copy">Code</code>
      <code class="tm-rf0 tm-bold tm-lh-copy">Code</code>
    </div>
    <div class="row">
      <div class="rowhead tm-rf-1 tm-lh-solid">-1</div>
      <code class="tm-rf-1 tm-lh-copy">Code</code>
      <code class="tm-rf-1 tm-bold tm-lh-copy">Code</code>
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
  .var-weight .tm-rf{size}:not(.tm-bold):not(.rowhead)
    // weight - starting col (300 weight) / 3 colspan * %
    transform: translateX(((356 - size * 24) - 300)/3 * 1%)

for size in -1...12
  .var-weight .tm-rf{size}.tm-bold
    // weight - starting col (600 weight) / 4 colspan * %
    transform: translateX(((690 + size * 30) - 600)/4 * 1%)
</style>
