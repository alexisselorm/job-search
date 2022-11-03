<template>
  <Accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-wrap flex-row">
          <li class="w-1/2 h-8">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube">VueTube</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Vue and a half Men" type="checkbox" class="mr-3" />
            <label for="Vue and a half Men">Vue and a half Men</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Point of Vue" type="checkbox" class="mr-3" />
            <label for="Point of Vue">Point of Vue</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Vue Brute" type="checkbox" class="mr-3" />
            <label for="Vue Brute">Vue Brute</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordion,
  },
};
</script>
