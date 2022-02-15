<script>
import AppTitle from "./AppTitle.vue";
import UserDescription from "./UserDescription.vue";

export default {
  name: "MainContent",
  components: {
    AppTitle,
    UserDescription,
  },
};
</script>

<template>
  <main>
    <AppTitle title="Random User Generator" />
    <UserDescription />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: auto;
}
</style>
