<template>
  <section :class="$style.whatIKnow">
    <h3 :class="$style.title">
      What I know
    </h3>
    <Chart />
  </section>
</template>

<script lang="ts" setup>
import Chart from './ChartKnowledges.vue';
</script>

<style module>
.title {
  composes: text-h2 mb-5 font-weight-bold from global;
}
</style>
