<template>
  <JobFiltersSidebarCheckboxGroup
    :unique-values="uniqueDegrees"
    :mutation="ADD_SELECTED_DEGREES"
    data-test="degrees-filter"
  />
</template>
<script lang="ts">
import { ADD_SELECTED_DEGREES } from "@/store/constants";
import { useUniqueDegrees } from "@/store/composables";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "JobFiltersSidebarDegrees",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },

  setup() {
    const uniqueDegrees = useUniqueDegrees();

    return { uniqueDegrees, ADD_SELECTED_DEGREES };
  },
});
</script>
