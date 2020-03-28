<template>
  <div class="text-medium clickable-text">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'clickable-text',
  }
</script>

<style scoped>
  .clickable-text {
    cursor: pointer;
    transition: all 0.3s;
  }

  .clickable-text:hover {
    font-size: var(--font-size-medium-hovered);
    color: var(--text-color-hovered);
  }
</style>