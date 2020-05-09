<template>
  <div class="layer" :class="{ opaque:visible }" @click="$emit('layoutClick')">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'my-menu-layer',
    props: ['visible'],
  }
</script>

<style scoped>
  .layer {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity ease .3s;
    pointer-events: none;
    z-index: 3;
  }

  .opaque {
    opacity: 1;
    pointer-events: auto;
  }

</style>