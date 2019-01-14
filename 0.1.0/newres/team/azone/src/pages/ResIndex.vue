<template>
    <div>
      <res-index-header></res-index-header>
      <res-index-content></res-index-content>
    </div>
</template>

<script>
  import ResIndexHeader from '../components/ResIndex/ResIndexHeader'
  import ResIndexContent from '../components/ResIndex/ResIndexContent'
    export default {
        name: "ResIndex",
      components: {ResIndexHeader,ResIndexContent}
    }
</script>

<style >
  @import "../assets/css/resindex.css";
  @import "../assets/css/resindexiconfont.css";
</style>
