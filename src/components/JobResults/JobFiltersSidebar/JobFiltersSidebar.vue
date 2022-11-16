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
      <Accordion header="Skills">
        -->
        <!-- If I don't specify anything here, the fallback text in the Accordion will fire -->
      </Accordion>
      <Accordion header="Degrees">
        <JobFiltersSidebarDegrees />
      </Accordion>
      <!-- <JobFiltersSidebarJobTypes /> -->
      <Accordion header="Job Types">
        <JobFiltersSidebarJobTypes />
      </Accordion>

      <Accordion header="Organizations">
        <JobFiltersSidebarOrganizations />
      </Accordion>
    </section>
  </div>
</template>
<script lang="ts">
import ActionButton from "@/components/Shared/ActionButton.vue";
import { key } from "@/store";
import { useStore } from "vuex";
import Accordion from "@/components/Shared/Accordion.vue";
import JobFiltersSidebarDegrees from "./JobFiltersSidebarDegrees.vue";
import JobFiltersSidebarJobTypes from "./JobFiltersSidebarJobTypes.vue";
import JobFiltersSidebarOrganizations from "./JobFiltersSidebarOrganizations.vue";

import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/constants";
import { defineComponent } from "vue";
export default defineComponent({
  name: "JobResultsSidebar",
  components: {
    ActionButton,
    Accordion,
    JobFiltersSidebarDegrees,
    JobFiltersSidebarJobTypes,
    JobFiltersSidebarOrganizations,
  },
  setup() {
    const store = useStore(key);

    const clearUserJobFilterSelections = () => {
      store.commit(CLEAR_USER_JOB_FILTER_SELECTIONS);
    };
    return {
      clearUserJobFilterSelections,
    };
  },
});
</script>
