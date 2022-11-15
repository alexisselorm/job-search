<template>
  <div class="text-start flex flex-row flex-nowrap w-full">
    <JobFiltersSidebar />
    <JobListings />
  </div>
</template>

<script lang="ts">
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import { defineComponent } from "vue";
import JobListings from "@/components/JobResults/JobListings.vue";
export default defineComponent({
  name: "JobResultsView",
  components: {
    JobFiltersSidebar,
    JobListings,
  },
});
</script>
