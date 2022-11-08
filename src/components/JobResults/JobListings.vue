<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            data-test="previous-page-link"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            data-test="next-page-link"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { useFilteredJobs } from "@/store/composables";
import { FETCH_JOBS } from "@/store/constants";
import JobListing from "@/components/JobResults/JobListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  setup() {
    const store = useStore();
    store.dispatch(FETCH_JOBS);
    const fetchJobs = () => store.dispatch(FETCH_JOBS);
    onMounted(fetchJobs);

    const filteredJobs = useFilteredJobs();
    const route = useRoute();

    const currentPage = computed(() =>
      Number.parseInt(route.query.page || "1")
    );
    const previousPage = computed(() => {
      const previousPage = currentPage.value - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    });

    const nextPage = computed(() => {
      const nextPage = currentPage.value + 1;
      const maxPage = Math.ceil(filteredJobs.value.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    });
    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      // This filtered jobs array is coming from the mapGetters helper function, which has our jobs array that was populated by the FETCH_JOBS action and filtered by the FILTERED_JOBS_BY_ORGANIZATION getter,and we're slicing them in chunks of 10 based on the page we're currently on
      return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    });
    return {
      previousPage,
      nextPage,
      displayedJobs,
      currentPage,
    };
  },
};
</script>
