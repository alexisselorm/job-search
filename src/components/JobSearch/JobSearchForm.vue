<template>
  <form
    class="flex items-center w-full h-12 border border-solid mt-14 border-brand-gray-3 rounded-3xl"
    action=""
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-1 h-full text-base font-light flex-nowrap">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10" for="role">Role</label>
        <TextInput
          v-model="role"
          data-test="role-input"
          placeholder="Software Engineer"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10" for="location">Location</label>
        <TextInput
          v-model="location"
          data-test="location-input"
          placeholder="Science Market"
        />
      </div>
    </div>
    <ActionButton
      text="Search"
      data-test="form-submit-button"
      type="secondary"
      class="rounded-r-3xl"
    />
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ActionButton from "../Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  // COMPOSITION API
  setup() {
    // Methods
    const router = useRouter();
    const searchForJobs = () => {
      router.push({
        name: "JobResults",
        query: { role: role.value, location: location.value },
      });
    };
    // Data
    const role = ref("");
    const location = ref("");
    return { role, location, searchForJobs };
  },
  // OPTIONS API
  // data() {
  //   return {
  //     role: "",
  //     location: "",
  //   };
  // },
  // methods: {
  //   searchForJobs() {
  //     this.$router.push({
  //       name: "JobResults",
  //       query: { role: this.role, location: this.location },
  //     });
  //   },
  // },
};
</script>
