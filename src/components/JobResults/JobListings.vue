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
import { mapGetters, mapActions } from "vuex";
import { FETCH_JOBS, FILTERED_JOBS_BY_ORGANIZATIONS } from "@/store";
import JobListing from "@/components/JobResults/JobListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  computed: {
    ...mapGetters([FILTERED_JOBS_BY_ORGANIZATIONS]),

    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(
        this.FILTERED_JOBS_BY_ORGANIZATIONS.length / 10
      );
      return nextPage <= maxPage ? nextPage : undefined;
    },
    currentPage() {
      const pageString = this.$route.query.page || "1";
      return Number.parseInt(pageString);
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      // This filtered jobs array is coming from the mapGetters helper function, which has our jobs array that was populated by the FETCH_JOBS action and filtered by the FILTERED_JOBS_BY_ORGANIZATION getter,and we're slicing them in chunks of 10 based on the page we're currently on
      return this.FILTERED_JOBS_BY_ORGANIZATIONS.slice(
        firstJobIndex,
        lastJobIndex
      );
    },
    // ...mapState(["jobs"]),
  },
  async mounted() {
    // The action that actually triggers our api request
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions([FETCH_JOBS]),
  },
};
</script>
