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
      <Accordion header="Skrr"></Accordion>

      <Accordion header="Job Types">
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
    </section>
  </div>
</template>
<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobResultsSidebar",
  components: {
    ActionButton,
    Accordion,
  },
};
</script>
