<template>
  <div class="about">
    <h1 class="text-6xl font-bold">This is an about page</h1>
    <button @click="goToHome">Go to homepage</button>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
