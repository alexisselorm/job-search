<template>
  <Accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobType in UNIQUE_JOB_TYPES"
            :key="jobType"
            class="w-1/2 h-8"
          >
            <input
              :id="jobTypes"
              v-model="selectedJobTypes"
              :data-test="jobType"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              @change="selectJobType"
            />
            <label data-test="job-type" :for="jobType">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";
import { mapGetters, mapMutations } from "vuex";
import { UNIQUE_JOB_TYPES, ADD_SELECTED_JOB_TYPES } from "@/store/constants";
// import
export default {
  name: "JobFiltersSidebarJobTypes",
  components: {
    Accordion,
  },
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_JOB_TYPES]),
  },
  methods: {
    ...mapMutations([ADD_SELECTED_JOB_TYPES]),
    selectJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
    },
  },
};
</script>
