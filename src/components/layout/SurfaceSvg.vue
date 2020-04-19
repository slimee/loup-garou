<template>
  <svg id="surface" ref="surface" class="surface no-select"
       :viewBox="viewBoxStr"
       v-touch:start="startDrag"
       v-touch:moving="drag"
       v-touch:end="endDrag"
  >
    <slot/>
  </svg>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex'

  const minus = (p1, p2) => ({ x: p1.x - p2.x, y: p1.y - p2.y })
  const add = (p1, p2) => ({ x: p1.x + p2.x, y: p1.y + p2.y })
  const getPoint = e => e.touches
    ? { x: e.touches[0].screenX, y: e.touches[0].screenY }
    : { x: e.screenX, y: e.screenY }

  export default {
    name: 'surface-svg',
    beforeMount() {
      this.trackWindowSize()
    },
    computed: {
      ...mapGetters('view', ['viewBoxStr']),
      ...mapState('view', ['camera']),
    },
    methods: {
      ...mapActions('view', ['resizeWindow', 'lookAt']),
      trackWindowSize() {
        this.resizeWindow(window)
        window.addEventListener('resize', () => this.resizeWindow(window))
      },
      startDrag(e) {
        this.cameraPan = { x: this.camera.panx, y: this.camera.pany }
        this.downPoint = getPoint(e)
      },
      drag(e) {
        if (this.downPoint) {
          const dragPoint = getPoint(e)
          const deltaPoint = minus(this.downPoint, dragPoint)
          const point = add(this.cameraPan, deltaPoint)
          this.lookAt({ ...point, direct: true })
        }
      },
      endDrag() {
        this.downPoint = null
      },
    },
  }
</script>

<style scoped>
  .surface {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: all;
    overflow-x: hidden;
    overflow-y: hidden;
  }
</style>