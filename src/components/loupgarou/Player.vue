<template>
  <g :transform="transform">
    <g>
      <circle fill="none" stroke="#000000" cx="10" cy="5" r="5"></circle>
      <path stroke="#000000"
            d="M 10 10 L 10 30
               M 10 15 L 0 20
               M 10 15 L 20 20
               M 10 30 L 0 40
               M 10 30 L 20 40">
      </path>
    </g>
    <text>{{name}}</text>
  </g>
</template>


<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'player',
    props: {
      player: Object,
    },
    data: () => ({ xRatio: null, yRatio: null }),
    computed: {
      ...mapGetters('view', ['viewBox']),
      transform() {
        return `translate(${this.x}, ${this.y})`
      },
      name() {
        return this.player.name
      },
      groundViewBox() {
        return {
          top: this.viewBox.bottom - this.viewBox.height * 0.4 + this.viewBox.height * 0.1,
          left: this.viewBox.left + this.viewBox.width * 0.1,
          width: this.viewBox.width * 0.8,
          height: this.viewBox.height * 0.2,
        }
      },
      x() {
        return this.groundViewBox.left + this.xRatio * this.groundViewBox.width
      },
      y() {
        return this.groundViewBox.top + this.yRatio * this.groundViewBox.height
      },
    },
    beforeMount() {
      this.xRatio = Math.random()
      this.yRatio = Math.random()
    },
  }
</script>

<style scoped>

</style>