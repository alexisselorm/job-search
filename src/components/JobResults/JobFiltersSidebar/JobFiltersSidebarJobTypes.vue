<template>
  <JobFiltersSidebarCheckboxGroup
    :unique-values="uniqueJobTypes"
    :mutation="ADD_SELECTED_JOB_TYPES"
    data-test="job-types-filter"
  />
</template>
<script lang="ts">
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";
import { useUniqueJobTypes } from "@/store/composables";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "JobFiltersSidebarDegrees",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },

  setup() {
    const uniqueJobTypes = useUniqueJobTypes();

    return { uniqueJobTypes, ADD_SELECTED_JOB_TYPES };
  },
});
</script>
