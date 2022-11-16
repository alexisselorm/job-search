<template>
  <div class="mt-5">
    <fieldset>
      <ul class="flex flex-row flex-wrap">
        <li v-for="value in uniqueValues" :key="value" class="w-1/2 h-8">
          <input
            :id="value"
            v-model="selectedValues"
            :data-test="value"
            :value="value"
            type="checkbox"
            class="mr-3"
            @change="selectValue"
          />
          <label data-test="value" :for="value">{{ value }}</label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script lang="ts">
// import Accordion from "@/components/Shared/Accordion.vue";
import { defineComponent, ref, PropType } from "vue";
import { useStore } from "vuex";
import { key } from "@/store/index";
import { useRouter } from "vue-router";
import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/constants";
export default defineComponent({
  name: "JobFiltersSidebarCheckboxGroup",
  components: {
    // Accordion,
  },
  props: {
    uniqueValues: {
      type: [Set, Array] as PropType<string[] | Set<string>>,
      required: true,
    },
    mutation: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const store = useStore(key);

    const selectedValues = ref<string[]>([]);
    // Pay attention to our  clear user job filter selection mutation and clear our checkboxes when this mutation runs
    store.subscribe((mutation) => {
      if (mutation.type === CLEAR_USER_JOB_FILTER_SELECTIONS) {
        selectedValues.value = [];
      }
    });

    const selectValue = () => {
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: "JobResults" });
    };

    return { selectValue, selectedValues };
  },
});
</script>
