<template>
  <div class="callout-wrap">
    <p class="callout" v-html="quote"></p>
  </div>
</template>

<script>
  export default {
    props: ['quote']
  }
</script>

<style lang="postcss" scoped>
  .callout-wrap {
    background-color: var(--color__gold);
  }

  .callout {
    margin-right: auto;
    margin-left: auto;
    padding-top: 80px;
    padding-bottom: 80px;
    max-width: 640px;
    width: 90%;
    font-size: 24px;
    font-family: var(--font-family__sans);
    line-height: 1.6;
    text-align: center;
    color: var(--color__white);
  }
</style>
