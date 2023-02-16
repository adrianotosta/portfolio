<script lang="ts">
import { h, useCssModule } from 'vue';
export default {
  setup() {
    const $style = useCssModule();
    return () => h('footer', { class: [$style.footer]}, ['@copyright 2023']);
  }
};
</script>

<style module>
.footer{
  composes: pa-7 bg-primary text-center w-100 from global;
  border-top: solid 1px rgba(226, 226, 226, 1);
  left: 0;
  position: absolute;
  z-index: 100;
}
</style>
