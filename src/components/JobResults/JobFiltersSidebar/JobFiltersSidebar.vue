<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Clear Filters" type="secondary" />
        </div>
      </div>
      <Accordion header="Job Types">
        <!-- If I don't specify anything here, the fallback text in the Accordion will fire -->
      </Accordion>
      <JobFiltersSibarOrganizations />
    </section>
  </div>
</template>
<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import Accordion from "@/components/Shared/Accordion.vue";
import JobFiltersSibarOrganizations from "./JobFiltersSibarOrganizations.vue";
export default {
  name: "JobResultsSidebar",
  components: {
    ActionButton,
    Accordion,
    JobFiltersSibarOrganizations,
  },
};
</script>
