<template>
  <div class="t-main bio">
    <p v-for="paragraph in bio">{{ paragraph }}</p>
  </div>
</template>

<script>
  export default {
    props: ['bio']
  }
</script>

<style lang="postcss">
  .bio {
    margin-right: auto;
    margin-bottom: 148px;
    margin-left: auto;
    width: 90%;
    max-width: 600px;
  }
  .bio p:first-child:first-letter {
    margin-top: 6px;
    margin-right: 20px;
    padding: 20px 12px 14px;
    float: left;
    border: 1px solid var(--color__gray--light);
    font-family: var(--font-family__sans);
    font-size: 3.8em;
    line-height: .7;
    box-shadow: 3px 3px 0 0 var(--color__gray--light);
    color: var(--color__gold);
  }
  .bio p:last-child:after {
    content: "•••";
    margin-top: 10px;
    display: block;
    font-size: 2em;
    text-align: center;
    letter-spacing: 10px;
    color: var(--color__gold);
  }
</style>
