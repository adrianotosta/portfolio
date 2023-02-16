<template>
  <section
    id="WhoIam"
    :class="$style.whoIAm">
    <h2 :class="$style.title">
      Who I am
    </h2>
    <div :class="$style.content">
      <v-img 
        :class="$style.photo"
        :src="image"
        alt="my black and white picture"
        cover />
      <div>
        <p :class="$style.text">
          Hi, my name is Adriano Tosta and I’m a dedicated Brazilian web designer, 
          passionate about design and development, with a lot of out of box ideas.
          I graduated as Bachelor of Graphic Design at Universidade do Estado da Bahia in 2006, 
          since then I’ve worked as a web designer, developping clean and useful interfaces
          and websites, improving a complete user experience for all, with focus on ease of use, 
          speed and delivery of relevant information to the users.      
        </p>
        <p :class="$style.text">
          I am able to add, or create, new something and unique to already successful team.
          I have a strong attention to detail providing top quality designs, 
          working with minimal supervision or cooperatively in a team.      
        </p>
        <p :class="$style.text">
          Having an excellent understanding of designing for the web,
          I can work with developers on integration: 
          designing and code web solutions through advanced knowledge of programming and scripting
          languages, developing strategies and plan for web to support and evolving
          the web services.      
        </p> 
        <v-btn 
          href="https://github.com/adrianotosta"
          size="x-large"
          tag="a"
          variant="outlined">
          github
        </v-btn>     
      </div>
    </div>
    <WhatIKnow />
  </section>
</template>

<script lang="ts" setup>
import WhatIKnow from './WhatIKnow.vue';
import image from '../assets/photo.jpeg';
</script>

<style module>
.whoIAm {
  composes: pt-16 from global;
}

@media screen and (min-width: 600px) {
  .whoIAm {
    margin: 0 auto;
    width: 75%;
  }
}

.title {
  composes: text-h2 mb-5 font-weight-bold from global;
}

.content {
  composes: mb-6 from global;
}

@media screen and (min-width: 600px) {
  .content {
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-template-rows: 64%;
    gap: 4%;
  }
}

.photo {
  composes: float-left float-sm-none d-block mr-6 mr-sm-0 from global;
  border-radius: 16px;
}

@media screen and (max-width: 600px) {
  .photo {
    height: 50%;
    width: 50%;
  }
}

.text {
  composes: mb-5 text-body-1 from global;
}
</style>
