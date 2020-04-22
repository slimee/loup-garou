<template>
  <g :class="day ? 'landscape day':'landscape night'" @click="switchDay">
    <rect v-bind="sky" class="sky"></rect>
    <circle v-bind="soleil" class="soleil"></circle>
    <circle v-bind="lune" class="lune"></circle>
    <rect v-bind="ground" class="ground"></rect>
  </g>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'landscape',
    data: () => ({
      day: true,
    }),
    computed: {
      ...mapGetters('view', ['viewBox']),
      astreDaySize() {
        return Math.min(this.viewBox.width, this.viewBox.height) * 0.15
      },
      astreNightSize() {
        return Math.min(this.viewBox.width, this.viewBox.height) * 0.2
      },
      sky() {
        return {
          x: this.viewBox.left,
          y: this.viewBox.top,
          width: this.viewBox.width,
          height: this.viewBox.height,
        }
      },
      ground() {
        const groundHeight = this.viewBox.height * 0.4
        return {
          x: this.viewBox.left,
          y: this.viewBox.bottom - groundHeight,
          width: this.viewBox.width,
          height: groundHeight,
        }
      },
      soleil() {
        const daySize = this.astreDaySize
        const nightSize = this.astreNightSize
        return {
          cx: this.viewBox.left + daySize * 2,
          cy: this.day ? this.viewBox.top + daySize * 2 : this.viewBox.bottom - nightSize,
          r: this.day ? daySize : nightSize,
        }
      },
      lune() {
        const daySize = this.astreDaySize
        const nightSize = this.astreNightSize
        return {
          cx: this.viewBox.right - daySize * 2,
          cy: this.day ? this.viewBox.bottom - daySize : this.viewBox.top + daySize * 2,
          r: this.day ? daySize : nightSize,
        }
      },
    },
    methods: {
      switchDay() {
        this.day = !this.day
      },
    },
  }
</script>

<style scoped>
  .landscape {
    --night-day-speed: 3s;
  }

  .sky {
    fill: var(--sky-color);
    transition: all var(--night-day-speed);
  }

  .ground {
    fill: var(--ground-color);
    transition: all var(--night-day-speed);
  }

  .soleil {
    fill: var(--soleil-color);
    transition: all var(--night-day-speed);
  }

  .lune {
    fill: var(--lune-color);
    transition: all var(--night-day-speed);
  }

  .night {
    --sky-color: #0d0d30;
    --ground-color: #50625c;
    --lune-color: #e8e9eb;
    --soleil-color: #a01b06;
  }

  .day {
    --soleil-color: #ffea35;
    --lune-color: #e8e9eb;
    --sky-color: #33CCFF;
    --ground-color: #508b4a;
  }
</style>