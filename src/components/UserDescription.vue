<script>
export default {
  name: "UserDescription",
  data() {
    return {
      firstName: "Loading...",
      lastName: "",
      location: "Loading...",
      email: "Loading...",
      imgSource: "#",
      gender: "",
    };
  },
  mounted() {
    this.getRandomUser();
  },
  methods: {
    async getRandomUser() {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const { results: results } = data;
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.location = results[0].location.city;
      this.email = results[0].email;
      this.imgSource = results[0].picture.large;
      this.gender = results[0].gender;
    },
  },
};
</script>

<template>
  <div class="user-description">
    <img
      :class="gender"
      :src="imgSource"
      :alt="`Image of ${firstName} ${lastName}`"
    />
    <h2>{{ firstName }} {{ lastName }}</h2>
    <p><strong>City: </strong> {{ location }}</p>
    <p>{{ email }}</p>
    <button @click="getRandomUser">Get Random User</button>
  </div>
</template>

<style lang="scss" scoped>
.user-description {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 0.5rem;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  text-align: center;

  img {
    border-radius: 50%;
  }

  button {
    margin-top: 1rem;
    background-color: $buttonColor;
    padding: 0.6rem;
    border-radius: 0.6em;
    color: $buttonTextColor;
    border: none;
    cursor: pointer;
    transition: background-color ease-in 0.1s;
    font-size: 1rem;
  }

  button:hover {
    background-color: $buttonHoverColor;
  }

  .male {
    border: 5px solid $maleBorderColor;
  }

  .female {
    border: 5px solid $femaleBorderColor;
  }
}
.user-description > * {
  margin: 0.3rem 0;
}
</style>
