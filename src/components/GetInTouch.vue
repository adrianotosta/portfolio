<template>
  <section
    id="GetInTouch"
    :class="$style.getInTouch">
    <h2 :class="$style.title">
      Get in touch
    </h2>
    <v-list
      :class="$style.contactList" 
      lines="two">
      <v-list-item
        title="email"
        subtitle="adriano.tosta@gmail.com" />
      <v-list-item
        href="https://www.linkedin.com/in/adrianotosta/"
        link
        title="linkedin"
        subtitle="https://www.linkedin.com/in/adrianotosta/" />
    </v-list>
  </section>
  <TheFooter />
</template>

<script setup lang="ts">
import TheFooter from './TheFooter.vue';
</script>

<style module>
.getInTouch {
  composes: pt-16 h-100 from global;
}

@media screen and (min-width: 600px) {
  .getInTouch {
    margin: 0 auto;
    width: 75%;
  }
}

.title {
  composes: text-h2 mb-5 font-weight-bold from global;
}

.contactList {
  width: 100%;
}

@media screen and (min-width: 960px) {
  .contactList {
    width: 32%;
  }
}
</style>
