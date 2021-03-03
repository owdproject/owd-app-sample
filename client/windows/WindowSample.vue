<template>
  <Window :window="window">
    <p>
      Hello world! I'm an empty window.
    </p>
  </Window>
</template>

<script>
  import Window from "@owd-client/core/src/components/window/Window";

  export default {
    components: {Window},
    props: {
      window: Object
    }
  }
</script>

<style scoped lang="scss">
  p {
    margin: 0;
    color: #AAA;
  }
</style>
