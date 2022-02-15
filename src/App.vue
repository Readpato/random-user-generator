<script>
import MainContent from "./components/MainContent.vue";

export default {
  components: {
    MainContent,
  },
};
</script>

<template>
  <div class="container">
    <MainContent />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  height: auto;
  width: 100%;
  background-color: $bodyColor;
}

.container {
  background-color: $containerColor;
  min-width: 350px;
  max-width: 375px;
  min-height: 300px;
  height: auto;
  margin: 1rem auto;
  display: block;
  border-radius: 1rem;
  box-shadow: 4px 4px 8px black;
}
</style>
