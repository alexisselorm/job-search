<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <!-- The :spotlight here is a prop that is to be passed to the parent that will render this component -->
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Spotlight",
  data() {
    return {
      spotlights: [],
    };
  },
  async mounted() {
    try {
      const baseUrl = process.env.VUE_APP_API_URL;
      const response = await axios.get(`${baseUrl}/spotlights`);
      this.spotlights = response.data;
    } catch (error) {
      throw new Error("Backend may not be running or responding", error);
    }
  },
};
</script>
