<template>
  <Accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobType in uniqueJobTypes"
            :key="jobType"
            class="w-1/2 h-8"
          >
            <input
              :id="jobType"
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
import { ref } from "vue";
import { useUniqueJobTypes } from "@/store/composables";
import Accordion from "@/components/Shared/Accordion.vue";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "JobFiltersSidebarJobTypes",
  components: {
    Accordion,
  },
  // COMPOSITION API
  setup() {
    const store = useStore();
    const router = useRouter();
    const selectedJobTypes = ref([]);
    const uniqueJobTypes = useUniqueJobTypes();

    const selectJobType = () => {
      store.commit(ADD_SELECTED_JOB_TYPES, selectedJobTypes.value);
      router.push({ name: "JobResults" });
    };

    return { selectedJobTypes, uniqueJobTypes, selectJobType };
  },
};
</script>
