<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <JobFiltersSidebarPrompt />
      <Accordion header="Skills and Qualifications">
        <JobFiltersSidebarSkills />
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
import Accordion from "@/components/Shared/Accordion.vue";
import JobFiltersSidebarDegrees from "./JobFiltersSidebarDegrees.vue";
import JobFiltersSidebarJobTypes from "./JobFiltersSidebarJobTypes.vue";
import JobFiltersSidebarOrganizations from "./JobFiltersSidebarOrganizations.vue";
import JobFiltersSidebarSkills from "./JobFiltersSidebarSkills.vue";
import JobFiltersSidebarPrompt from "./JobFiltersSidebarPrompt.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "JobResultsSidebar",
  components: {
    Accordion,
    JobFiltersSidebarPrompt,
    JobFiltersSidebarSkills,
    JobFiltersSidebarDegrees,
    JobFiltersSidebarJobTypes,
    JobFiltersSidebarOrganizations,
  },
});
</script>
