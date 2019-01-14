<template>
  <div class="content">
    <res-index-content-header></res-index-content-header>
    <res-index-content-left></res-index-content-left>
  </div>
</template>

<script>
  import ResIndexContentHeader from './ResIndexContent/ResIndexContentHeader'
  import ResIndexContentLeft from './ResIndexContent/ResIndexContentLeft'
    export default {
        name: "ResIndexContent",
      components: {ResIndexContentHeader,ResIndexContentLeft}
    }
</script>

<style scoped>
  .content{
    overflow: hidden;
    height: 625px;
  }
</style>
