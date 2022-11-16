<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton
            text="Clear Filters"
            type="secondary"
            @click="clearUserJobFilterSelections"
          />
        </div>
      </div>
      <!-- <Accordion header="Degree"> -->
      <!-- If I don't specify anything here, the fallback text in the Accordion will fire -->
      <!-- </Accordion> -->
      <JobFiltersSidebarCheckboxGroup
        header="Degrees"
        :unique-values="uniqueDegrees"
        :mutation="ADD_SELECTED_DEGREES"
        data-test="degrees-filter"
      />
      <!-- <JobFiltersSidebarJobTypes /> -->
      <JobFiltersSidebarCheckboxGroup
        header="Job Types"
        :unique-values="uniqueJobTypes"
        :mutation="ADD_SELECTED_JOB_TYPES"
        data-test="job-types-filter"
      />

      <JobFiltersSidebarCheckboxGroup
        header="Organizations"
        :unique-values="uniqueOrganizations"
        :mutation="ADD_SELECTED_ORGANIZATIONS"
        data-test="organiztions-filter"
      />
    </section>
  </div>
</template>
<script lang="ts">
import ActionButton from "@/components/Shared/ActionButton.vue";
import { key } from "@/store";
import { useStore } from "vuex";
// import Accordion from "@/components/Shared/Accordion.vue";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

import {
  useUniqueJobTypes,
  useUniqueOrganizations,
  useUniqueDegrees,
} from "@/store/composables";
import {
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_DEGREES,
  CLEAR_USER_JOB_FILTER_SELECTIONS,
} from "@/store/constants";
import { defineComponent } from "vue";
export default defineComponent({
  name: "JobResultsSidebar",
  components: {
    ActionButton,
    // Accordion,
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const store = useStore(key);
    const uniqueOrganizations = useUniqueOrganizations();
    const uniqueJobTypes = useUniqueJobTypes();
    const uniqueDegrees = useUniqueDegrees();
    const clearUserJobFilterSelections = () => {
      store.commit(CLEAR_USER_JOB_FILTER_SELECTIONS);
    };
    return {
      uniqueOrganizations,
      uniqueJobTypes,
      uniqueDegrees,
      clearUserJobFilterSelections,
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_DEGREES,
      ADD_SELECTED_ORGANIZATIONS,
    };
  },
});
</script>
