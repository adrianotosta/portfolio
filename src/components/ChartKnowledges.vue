<script lang="ts">
import { h, computed } from 'vue';
import { onMounted } from 'vue';
import Knowledges from './ChartKnowledges';
import { useDisplay } from 'vuetify';

export default {
  setup() {
    const { name } = useDisplay();
    const chartType = computed(chooseChartType.bind(name));

    onMounted(() => {
      const chart = configChart.call(chartType);
      chart.draw();
    });
    
    return () => h('div', { id: 'container' });
  },
};

function configChart(this: any) {
  const chart = (window as any).anychart[this.value]();
  const series = chart[this.value]();
  
  series.fill('#000');
  series.stroke(false);
  
  chart.yAxis().enabled(false);
  
  return chart.data(Knowledges)
    .tooltip(false)
    .container("container");
}

function chooseChartType(this: any) {
  return this.value === 'xs' ? 'bar' : 'column';
}
</script>

<style module>
:global .anychart-credits-text,
:global .anychart-credits-logo {
  display: none;
}
                 
:global path[d^="M 10 197.5 L 1037 197.5"],
:global path[d^="M 10.5 198 L 10.5"]  {
  display: none;
}

:global #container {
  height: 240px;
}
</style>
