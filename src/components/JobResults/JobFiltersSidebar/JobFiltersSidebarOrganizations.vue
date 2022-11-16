<template>
  <JobFiltersSidebarCheckboxGroup
    :unique-values="uniqueOrganizations"
    :mutation="ADD_SELECTED_ORGANIZATIONS"
    data-test="organiztions-filter"
  />
</template>
<script lang="ts">
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";
import { useUniqueOrganizations } from "@/store/composables";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "JobFiltersSidebarDegrees",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },

  setup() {
    const uniqueOrganizations = useUniqueOrganizations();

    return { uniqueOrganizations, ADD_SELECTED_ORGANIZATIONS };
  },
});
</script>
