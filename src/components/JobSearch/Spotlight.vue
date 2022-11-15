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

<script lang="ts">
import { ref, onMounted, defineComponent } from "vue";
import axios from "axios";

interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Spotlight",
  setup() {
    const spotlights = ref<Spotlight[]>([]);
    const getSpotlights = async () => {
      try {
        const baseUrl = process.env.VUE_APP_API_URL;
        const response = await axios.get<Spotlight[]>(`${baseUrl}/spotlights`);
        spotlights.value = response.data;
      } catch (error: any) {
        throw new Error(`Backend may not be running or responding, ${error}`);
      }
    };
    // Use onMounted to actually run our function to get the spotlights from the backend
    onMounted(getSpotlights);

    return { spotlights };
  },
  // data() {
  //   return {
  //     spotlights: [],
  //   };
  // },
  // async mounted() {
  //   try {
  //     const baseUrl = process.env.VUE_APP_API_URL;
  //     const response = await axios.get(`${baseUrl}/spotlights`);
  //     this.spotlights = response.data;
  //   } catch (error) {
  //     throw new Error("Backend may not be running or responding", error);
  //   }
  // },
});
</script>
