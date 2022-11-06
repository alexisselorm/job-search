<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultspage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-brand-green-1">
            {{ FILTERED_JOBS.length }}
          </span>
          jobs matched
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import useConfirmRoute from "@/composables/useConfirmRoute";
import { useFilteredJobs } from "@/store/composables";

export default {
  name: "SubNav",
  // COMPOSITION API
  setup() {
    const FILTERED_JOBS = useFilteredJobs();

    const onJobResultspage = useConfirmRoute("JobResults");

    return { onJobResultspage, FILTERED_JOBS };
  },
  // OPTIONS API
  // import { mapGetters } from "vuex";
  // import { FILTERED_JOBS } from "@/store/constants";
  // computed: {
  //   ...mapGetters([FILTERED_JOBS]),
  //   onJobResultspage() {
  //     return this.$route.name === "JobResults";
  //   },
  // },
};
</script>
