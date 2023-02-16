<template>
  <div :class="$style.introduction">
    <blockquote data-cy="title">
      <p 
        :class="$style.text">
        Simplicity is the ultimate <br>form of sophistication
      </p>
      <p :class="$style.author">
        Leonardo Da Vinci
      </p>
    </blockquote>
  </div>
</template>

<style module>
 .introduction {
  composes: h-screen from global;
  align-items: center;
  display: grid;
  justify-items: center;
}


.text{
  composes: text-h4 text-sm-h2 text-lg-h1 text-center font-weight-black d-block mb-4 mb-sm-6 mb-lg-6 from global;
}

.author {
  composes: d-block text-center text-lg-body-1 from global;
}
</style>
