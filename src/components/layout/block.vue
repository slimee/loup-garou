<template>
  <div class="block">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'block',
  }
</script>

<style scoped>
  .block {
    padding: var(--block-size);
  }
</style>