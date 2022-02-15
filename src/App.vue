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

<style>
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
  background-color: #f4fdd9;
}

.container {
  background-color: #e4ffe1;
  min-width: 350px;
  max-width: 375px;
  height: auto;
  min-height: 300px;
  margin: 1rem auto;
  display: block;
  border-radius: 1rem;
  box-shadow: 1px 1px 5px black;
  border: 2px solid black;
}
</style>
