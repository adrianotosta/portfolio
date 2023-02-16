<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import Introduction from './components/TheIntroduction.vue';
import WhoIAm from './components/WhoIAm.vue';
import GetInTouch from './components/GetInTouch.vue';
</script>

<template>
  <v-app>
    <v-app-bar
      :class="$style.appbar"
      app
      elevation="0">
      <TheHeader />
    </v-app-bar>
    <v-main>
      <v-container 
        :class="$style.container"
        fluid>
        <Introduction />
        <WhoIAm />
        <GetInTouch />
      </v-container>
    </v-main>
  </v-app>
</template>

<style module>
.appbar {
  border-bottom: solid 1px rgba(200, 200, 200, 0.5)!important;
  display: grid!important;
  justify-content: center!important;
}

.container {
  composes: h-screen from global;
}
</style>
